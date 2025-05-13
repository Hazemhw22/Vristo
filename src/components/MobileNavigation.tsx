
import { Home, Heart, ShoppingBag, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const MobileNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden">
      <div className="flex items-center justify-around">
        <Link
          to="/"
          className="flex flex-col items-center justify-center py-2 flex-1"
        >
          <Home size={20} className="text-vristo-500" />
          <span className="text-xs mt-1 text-gray-600">Home</span>
        </Link>

        <Link
          to="/favorites"
          className="flex flex-col items-center justify-center py-2 flex-1"
        >
          <Heart size={20} className="text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">Favorites</span>
        </Link>

        <Link
          to="/cart"
          className="flex flex-col items-center justify-center py-2 flex-1 relative"
        >
          <div className="bg-vristo-500 rounded-full p-3 -mt-5 border-4 border-white">
            <ShoppingBag size={20} className="text-white" />
          </div>
          <span className="text-xs mt-1 text-vristo-500">Cart</span>
        </Link>

        <Link
          to="/orders"
          className="flex flex-col items-center justify-center py-2 flex-1"
        >
          <ShoppingBag size={20} className="text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">Orders</span>
        </Link>

        <Link
          to="/account"
          className="flex flex-col items-center justify-center py-2 flex-1"
        >
          <User size={20} className="text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">Account</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;