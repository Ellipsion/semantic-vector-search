import { db } from "@/db";
import { productsTable } from "@/db/schema";
import { sql } from "drizzle-orm";
import { redirect } from "next/navigation";
import { FC } from "react";

interface SearchPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const SearchPage: FC<SearchPageProps> = async ({ searchParams }) => {
  const { query } = searchParams;

  if (Array.isArray(query) || !query) {
    return redirect("/");
  }

  let products = await db
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

  return <pre className="">{JSON.stringify(products)}</pre>;
};

export default SearchPage;
