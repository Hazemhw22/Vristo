import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import MobileNavigation from "@/components/MobileNavigation";
import { Flame } from "lucide-react";

const products = Array(30)
  .fill(0)
  .map((_, i) => ({
    id: `p${i + 1}`,
    name: `Product ${i + 1}`,
    image: "/public/images/pngtree-smart-electronic-apple-watches-vector-set-png-image_5155507.png",
    price: 75 + i * 10,
    originalPrice: 100 + i * 10,
    discount: 25,
    rating: 4,
    store: `Store ${i + 1}`,
    reviewCount: i + 1,
  }));

const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();   
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === product.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const total = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 bg-white dark:bg-gray-800 p-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm space-y-4">
            <h3 className="font-semibold text-lg mb-2">Filters</h3>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
                <option>All</option>
                <option>Electronics</option>
                <option>Accessories</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Brand</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                placeholder="Search Brand"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Price Range</label>
              <input type="range" className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Rating</label>
              <select className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
                <option>All</option>
                <option>4 stars & up</option>
                <option>3 stars & up</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Availability</label>
              <select className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
                <option>All</option>
                <option>In Stock</option>
                <option>Out of Stock</option>
              </select>
            </div>
          </aside>

          {/* Product Grid & Sort */}
          <section className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" />
                Products
              </h2>
              <select className="border rounded-md p-2 dark:bg-gray-700 dark:border-gray-600">
                <option>Sort by</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
                <option>Newest</option>
              </select>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-4 fixed right-0 top-0 bottom-0 z-50 shadow-lg overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Cart</h2>
              <button onClick={() => setIsCartOpen(false)}>
                <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            {cartItems.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-sm">Cart Empty</p>
            ) : (
              <>
                <ul className="space-y-4">
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center gap-4 border-b pb-2 border-gray-300 dark:border-gray-700"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-contain"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{item.name}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {item.quantity} × ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        <X className="h-4 w-4 text-red-500" />
                      </Button>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t pt-4 border-gray-300 dark:border-gray-700">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Total:</span>
                    <span>${total}</span>
                  </div>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    Complete your purchase
                  </Button>
                </div>
              </>
            )}
          </div>
        )}

        {!isMobile && (
            <FloatingButtons
            onCartClick={() => setIsCartOpen(true)}
            cartCount={cartItems.length}/>
        )}

            <MobileNavigation
                onOrdersClick={() => setIsCartOpen(true)}
                cartCount={cartItems.length}
            />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
