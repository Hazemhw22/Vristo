import { Home, Heart, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";

const MobileNavigation = ({ onOrdersClick, cartCount = 0 }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-40 md:hidden">
      <div className="flex items-center justify-around">
        <Link
          to="/"
          className="flex flex-col items-center justify-center py-2 flex-1"
        >
          <Home size={20} className="text-vristo-500" />
          <span className="text-xs mt-1 text-gray-600 dark:text-gray-300">Home</span>
        </Link>

        <Link
          to="/favorites"
          className="flex flex-col items-center justify-center py-2 flex-1"
        >
          <Heart size={20} className="text-gray-600 dark:text-gray-300" />
          <span className="text-xs mt-1 text-gray-600 dark:text-gray-300">Favorites</span>
        </Link>

        <Link
          to="/cart"
          className="flex flex-col items-center justify-center py-2 flex-1 relative"
        >
          <div className="bg-vristo-500 rounded-full p-3 -mt-5 border-4 border-white dark:border-gray-900 relative">
            <ShoppingBag size={20} className="text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-xs mt-1 text-vristo-500">Cart</span>
        </Link>

        <button
          onClick={onOrdersClick}
          className="flex flex-col items-center justify-center py-2 flex-1"
        >
          <ShoppingBag size={20} className="text-gray-600 dark:text-gray-300" />
          <span className="text-xs mt-1 text-gray-600 dark:text-gray-300">Orders</span>
        </button>

        <Link
          to="/account"
          className="flex flex-col items-center justify-center py-2 flex-1"
        >
          <User size={20} className="text-gray-600 dark:text-gray-300" />
          <span className="text-xs mt-1 text-gray-600 dark:text-gray-300">Account</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;
