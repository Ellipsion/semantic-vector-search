import { CoreProduct } from "@/app/(search)/search/page";
import Image from "next/image";
import { FC } from "react";

interface ProductCardProps {
  product: CoreProduct;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <li className="mx-auto py-4 px-8 flex space-x-4 hover:bg-muted transition-colors">
      <div className="relative flex items-center bg-muted rounded-lg h-12 w-12 md:h-40 md:w-40">
        <div className="absolute z-20 inset-x-0 h-full hidden dark:block bg-gradient-to-r from-background/10 to-background/40"></div>
        <Image
          loading="eager"
          fill
          alt="product-image"
          src={`/${product.imageId}`}
        />
      </div>
      <div className="w-full flex-1 space-y-3 py-1">
        <h1 className="text-lg font-medium text-foreground">{product.name}</h1>
        <p className="prose prose-sm text-gray-500 leading-tight line-clamp-2 md:line-clamp-3">
          {product.description}
        </p>
        <p className="text-base font-medium text-foreground">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </li>
  );
};

export default ProductCard;
