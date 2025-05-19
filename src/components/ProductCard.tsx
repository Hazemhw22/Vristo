import React, { useState } from "react";
import { Heart } from "lucide-react";
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
  onAddToCart?: (product: { id: string; name: string; image: string; price: number; quantity: number }) => void;
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
  onAddToCart,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickSellOpen, setIsQuickSellOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ id, name, image, price, quantity });
    }
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => {
        const fillPercent = Math.min(Math.max(rating - index, 0), 1);
        return (
          <svg key={index} className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <defs>
              <linearGradient id={`star-${id}-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset={`${fillPercent * 100}%`} stopColor="#facc15" />
                <stop offset={`${fillPercent * 100}%`} stopColor="#d1d5db" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#star-${id}-${index})`}
              d="M12 2l2.9 6h6.1l-4.9 4.2L18.9 20 12 15.8 5.1 20l2.8-7.8L3 8h6.1L12 2z"
            />
          </svg>
        );
      });
  };

  return (
    <>
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg relative w-full max-w-sm group cursor-pointer"
        onClick={() => setIsQuickSellOpen(true)}
      >
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium z-10">
            {discount}% OFF
          </div>
        )}

        <button className="absolute top-2 right-2 bg-white dark:bg-gray-700 p-1 rounded-full shadow-sm z-10 transition hover:scale-110">
          <Heart className="h-5 w-5 text-blue-500 dark:text-blue-400" />
        </button>

        <div className="p-4">
          <div
            className="h-36 flex items-center justify-center mb-3 transition duration-300 transform group-hover:scale-[1.08]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={isHovered && hoverImage ? hoverImage : image}
              alt={name}
              className="max-h-full object-contain transition duration-300"
            />
          </div>

          <h3 className="font-medium text-sm mb-1 line-clamp-2 h-5 text-gray-900 dark:text-gray-100">{name}</h3>
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{store}</div>

          <div className="flex mb-3">
            {renderStars(rating)}
            <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">({reviewCount})</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              {originalPrice && (
                <div className="text-gray-400 dark:text-gray-500 line-through text-sm">
                  ${(originalPrice * quantity).toFixed(2)}
                </div>
              )}
              <div className="font-bold text-gray-900 dark:text-gray-100">${(price * quantity).toFixed(2)}</div>
            </div>

            <Button
              className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 w-8 h-8 p-0 rounded-md text-xl font-bold flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation(); // يمنع فتح المودال
                handleAddToCart();
              }}
            >
              +
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Sell Modal */}
      <Dialog
        open={isQuickSellOpen}
        onClose={() => setIsQuickSellOpen(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen bg-black/50 p-4">
          <Dialog.Panel className="bg-white dark:bg-gray-800 rounded-[20px] p-6 w-full max-w-md max-h-screen overflow-y-auto">
            <img src={image} alt={name} className="w-full h-48 object-contain mb-4 rounded-lg" />
            <Dialog.Title className="text-xl font-semibold mb-2 text-center text-gray-900 dark:text-gray-100">
              {name}
            </Dialog.Title>

            <div className="flex justify-center items-center mb-2">
              {renderStars(rating)}
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">({reviewCount} Evaluation)</span>
            </div>

            {description && (
              <p className="text-center text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
            )}

            {category && (
              <div className="mb-3 text-sm">
                <span className="text-gray-500 dark:text-gray-400">Category:</span>
                <span className="ml-2 font-medium text-gray-800 dark:text-gray-100">{category}</span>
              </div>
            )}

            {features && features.length > 0 && (
              <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-400 space-y-1 mb-4">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}

            <div className="mb-4">
              <div className="text-gray-500 dark:text-gray-400 text-sm">Price:</div>
              {originalPrice && originalPrice > price && (
                <div className="text-sm line-through text-gray-400">${originalPrice.toFixed(2)}</div>
              )}
              <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
                ${(price * quantity).toFixed(2)}
              </div>
            </div>

            <div className="mb-4 flex items-center gap-3 text-gray-900 dark:text-gray-100">
              <span>Quantity:</span>
              <button onClick={decreaseQty} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">-</button>
              <span className="w-8 text-center">{quantity}</span>
              <button onClick={increaseQty} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">+</button>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setIsQuickSellOpen(false)}>Close</Button>
              <Button
                className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                onClick={() => {
                  handleAddToCart();
                  setIsQuickSellOpen(false);
                }}
              >
                Add To Cart
              </Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ProductCard;
