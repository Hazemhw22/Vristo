import React, { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog } from "@headlessui/react";

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
  category?: string;
  description?: string;
  features?: string[];
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
  category,
  description,
  features,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickSellOpen, setIsQuickSellOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => {
        const fillPercent = Math.min(Math.max(rating - index, 0), 1);
        return (
          <svg key={index} className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <defs>
              <linearGradient id={`star-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset={`${fillPercent * 100}%`} stopColor="#facc15" />
                <stop offset={`${fillPercent * 100}%`} stopColor="#d1d5db" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#star-${index})`}
              d="M12 2l2.9 6h6.1l-4.9 4.2L18.9 20 12 15.8 5.1 20l2.8-7.8L3 8h6.1L12 2z"
            />
          </svg>
        );
      });
  };

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-lg relative w-full max-w-sm transform transition duration-300 hover:scale-[1.08] group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium z-10">
            {discount}% OFF
          </div>
        )}

        <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-sm z-10 transition hover:scale-110">
          <Heart className="h-5 w-5 text-blue-500" />
        </button>

        <div className="p-4">
          <div
            className="h-36 flex items-center justify-center mb-3 transition duration-300 cursor-pointer"
            onClick={() => setIsQuickSellOpen(true)}
          >
            <img
              src={isHovered && hoverImage ? hoverImage : image}
              alt={name}
              className="max-h-full object-contain transition duration-300"
            />
          </div>

          <h3 className="font-medium text-sm mb-1 line-clamp-2 h-10 text-center">{name}</h3>

          <div className="text-xs text-gray-500 mb-2 text-center">{store}</div>

          <div className="flex justify-center items-center mb-3">
            {renderStars(rating)}
            <span className="ml-1 text-xs text-gray-500">({reviewCount})</span>
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

      {/* Quick Sell Modal */}
      <Dialog open={isQuickSellOpen} onClose={() => setIsQuickSellOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen bg-black/50 p-4">
          <Dialog.Panel className="bg-white rounded-[20px] p-6 w-full max-w-md">
            <img src={image} alt={name} className="w-full h-48 object-contain mb-4 rounded-lg" />

            <Dialog.Title className="text-xl font-semibold mb-2 text-center">{name}</Dialog.Title>

            {/* النجوم + التقييم */}
            <div className="flex justify-center items-center mb-2">
              {renderStars(rating)}
              <span className="ml-2 text-sm text-gray-500">({reviewCount} تقييم)</span>
            </div>

            {/* الوصف البسيط */}
            {description && (
              <p className="text-center text-gray-600 text-sm mb-4">{description}</p>
            )}

            {/* الفئة */}
            {category && (
              <div className="mb-3 text-sm text-gray-700">
                <span className="text-gray-500">الفئة:</span>
                <span className="ml-2 font-medium">{category}</span>
              </div>
            )}

            {/* مميزات كنقاط */}
            {features && features.length > 0 && (
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mb-4">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}

            {/* السعر */}
            <div className="mb-4">
              <div className="text-gray-500 text-sm">السعر:</div>
              <div className="text-lg font-bold">${price.toFixed(2)}</div>
            </div>

            {/* الكمية */}
            <div className="mb-4 flex items-center gap-3">
              <span>الكمية:</span>
              <button onClick={decreaseQty} className="bg-gray-200 px-2 py-1 rounded">-</button>
              <span className="w-8 text-center">{quantity}</span>
              <button onClick={increaseQty} className="bg-gray-200 px-2 py-1 rounded">+</button>
            </div>

            <div className="flex justify-between">
              
              <Button variant="outline" onClick={() => setIsQuickSellOpen(false)}>
                Close
              </Button>
              <Button
                className="bg-blue-500 hover:bg-blue-600"
                onClick={() => {

                  setIsQuickSellOpen(false);
                }}
              >
               Add To Card
              </Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ProductCard;
