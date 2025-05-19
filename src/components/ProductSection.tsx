import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  store: string;
  reviewCount: number;
}

interface ProductSectionProps {
  title: string;
  icon?: React.ReactNode;
  products: Product[];
  onAddToCart?: (product: Product) => void; // 👈 تعديل بسيط في نوع البراميتر
}

const itemsPerPage = 10;

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  icon,
  products,
  onAddToCart,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + itemsPerPage < products.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          {icon && <div className="ml-2">{icon}</div>}
        </div>
        <Link
          to="/products"
          className="text-blue-600 text-sm font-medium flex items-center cursor-pointer"
        >
          See All
        </Link>
      </div>

      <div className="relative" {...swipeHandlers}>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={() =>
                onAddToCart?.({
                  ...product,
                  quantity: 1,
                })
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
