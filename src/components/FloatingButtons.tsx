import React from "react";
import { Home, Heart, ShoppingBag, ShoppingCart } from "lucide-react";

interface FloatingButtonsProps {
  onCartClick: () => void;
  cartCount: number;
}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({ onCartClick, cartCount }) => {
  const commonStyle =
    "w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:scale-110 transition-all";

  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-50">
      <button className={commonStyle}>
        <Home className="h-5 w-5" />
      </button>
      <button className={commonStyle}>
        <Heart className="h-5 w-5" />
      </button>
      <button className={commonStyle}>
        <ShoppingBag className="h-5 w-5" />
      </button>
      <button onClick={onCartClick} className={`relative ${commonStyle}`}>
        <ShoppingCart className="h-5 w-5" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default FloatingButtons;
