import { CoreProduct } from "@/app/(search)/search/page";
import Image from "next/image";
import { FC } from "react";

interface ProductCardProps {
  product: CoreProduct;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <li className="mx-auto py-4 px-8 flex space-x-4 hover:bg-gray-100 transition-colors">
      <div className="relative flex items-center bg-zinc-100 rounded-lg h-12 w-12 md:h-40 md:w-40">
        <Image
          loading="eager"
          fill
          alt="product-image"
          src={`/${product.imageId}`}
        />
      </div>
      <div className="w-full flex-1 space-y-2 py-1">
        <h1 className="text-lg font-medium text-gray-900">{product.name}</h1>
        <p className="prose prose-sm text-gray-500 line-clamp-2 md:line-clamp-3">
          {product.description}
        </p>
        <p className="text-base font-medium text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </li>
  );
};

export default ProductCard;
