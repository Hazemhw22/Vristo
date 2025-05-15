// components/FloatingButtons.tsx
import React from "react";
import { Utensils, Home, Heart, ShoppingBag, ShoppingCart } from "lucide-react";

const FloatingButtons = ({ onCartClick }: { onCartClick: () => void }) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-50">
     
      <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all">
        <Home className="h-5 w-5" />
      </button>
      <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all">
        <Heart className="h-5 w-5" />
      </button>
      <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all">
        <ShoppingBag className="h-5 w-5" />
      </button>
      <button
        onClick={onCartClick}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all"
      >
        <ShoppingCart className="h-5 w-5" />
      </button>
    </div>
  );
};

export default FloatingButtons;
