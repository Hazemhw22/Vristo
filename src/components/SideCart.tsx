import React from "react";
import { X } from "lucide-react";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number; // أضفنا الكمية
}

interface SideCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void; // دالة تعديل الكمية
}

const SideCart: React.FC<SideCartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onUpdateQuantity,
}) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
        <h2 className="text-lg font-bold dark:text-white">Your Cart</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5 text-gray-600 dark:text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 overflow-y-auto h-[calc(100%-160px)] space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">Cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 border-b pb-2 last:border-b-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold dark:text-white">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  ${item.price.toFixed(2)}
                </p>
                {/* تعديل الكمية */}
                <div className="flex items-center space-x-2 mt-1">
                  <button
                    className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded"
                    onClick={() =>
                      onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    –
                  </button>
                  <span className="text-sm dark:text-white">{item.quantity}</span>
                  <button
                    className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-xs text-red-600 dark:text-red-400"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="flex justify-between mb-3">
          <span className="font-medium dark:text-white">Total:</span>
          <span className="font-bold dark:text-white">${total.toFixed(2)}</span>
        </div>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
          disabled={cartItems.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default SideCart;
