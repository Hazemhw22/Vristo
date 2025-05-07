import React from "react";
import { Leaf, Home, Heart, ShoppingBag, ShoppingCart } from "lucide-react";

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col space-y-3">
      <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-600">
        <Leaf className="h-5 w-5" />
      </button>
      <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-600">
        <Home className="h-5 w-5" />
      </button>
      <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-600">
  <Heart className="h-5 w-5" />
</button>

      <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-600">
        <ShoppingBag className="h-5 w-5" />
      </button>
      <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-600">
        <ShoppingCart className="h-5 w-5" />
      </button>
    </div>
  );
};

export default FloatingButtons;
