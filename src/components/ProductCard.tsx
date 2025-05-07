import React, { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  store: string;
  reviewCount: number;
  hoverImage?: string; 
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  hoverImage,
  price,
  originalPrice,
  discount,
  rating,
  store,
  reviewCount,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-sm relative transform transition duration-300 hover:scale-[1.02] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {discount && (
        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium z-10">
          {discount}% OFF
        </div>
      )}

      <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-sm z-10 transition hover:scale-110">
        <Heart className="h-5 w-5 text-blue-500" />
      </button>

      <div className="p-4">
        <div className="h-36 flex items-center justify-center mb-4 transition duration-300">
          <img
            src={isHovered && hoverImage ? hoverImage : image}
            alt={name}
            className="max-h-full object-contain transition duration-300"
          />
        </div>

        <div className="text-sm text-gray-500 mb-1">{store}</div>
        <h3 className="font-medium mb-1 line-clamp-2 h-12">{name}</h3>

        <div className="flex items-center mb-2">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <span
                key={index}
                className={`text-sm ${
                  index < Math.floor(rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          <span className="ml-1 text-sm text-gray-500">({reviewCount})</span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            {originalPrice && (
              <div className="text-gray-400 line-through text-sm">
                ${originalPrice.toFixed(2)}
              </div>
            )}
            <div className="font-bold">${price.toFixed(2)}</div>
          </div>

          <Button className="bg-blue-500 hover:bg-blue-600 p-2 rounded-md transition hover:scale-105">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
