import ProductCard from "@/components/custom/product-card";
import { db } from "@/db";
import { productsTable, Product } from "@/db/schema";
import { Index } from "@upstash/vector";
import { sql } from "drizzle-orm";
import { X } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FC } from "react";

export const dynamic = "force-dynamic";

interface SearchPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export type CoreProduct = Omit<Product, "createdAt" | "updatedAt">;
const index = new Index<CoreProduct>();

const SearchPage: FC<SearchPageProps> = async ({ searchParams }) => {
  const { query } = searchParams;

  if (Array.isArray(query) || !query) {
    return redirect("/");
  }

  let products: CoreProduct[] = await db
    .select()
    .from(productsTable)
    .where(
      sql`
        to_tsvector('simple', lower(${productsTable.name} || ' ' || ${
        productsTable.description
      })) 
        @@ to_tsquery('simple', ${query.trim().split(" ").join(" & ")})
    `
    )
    .limit(3);

  if (products.length < 3) {
    // semantic search
    const res = await index.query({
      topK: 5,
      data: query,
      includeMetadata: true,
    });

    const vectorProducts: CoreProduct[] = res
      .filter((product) => {
        if (
          products.some(
            (existingProduct) => product.id === existingProduct.id
          ) ||
          product.score < 0.8
        ) {
          return false;
        } else {
          return true;
        }
      })
      .map((product) => product.metadata!);

    products.push(...vectorProducts);
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-10 bg-white shadow-md rounded-b-md">
        <X className="mx-auto h-24 w-24 text-gray-200" />
        <h3 className="mt-2 text-sm font-semibold text-gray-900">No results</h3>
        <p>
          Sorry, we could not find any matches for{" "}
          <span className="text-green-600 font-medium">{query}</span>.
        </p>
      </div>
    );
  }

  return (
    <ul className="py-4 divide-y divide-zinc-100 bg-white shadow-md rounded">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`} scroll={true}>
          <ProductCard product={product} />
        </Link>
      ))}
    </ul>
  );
};

export default SearchPage;
