import React, { useState, useEffect } from "react";
import { X, Flame, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import MobileNavigation from "@/components/MobileNavigation";
import ProductFilters from "@/components/ProductFilters";

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  store: string;
  reviewCount: number;
};

type CartItem = Product & {
  quantity: number;
};

const products: Product[] = Array(30)
  .fill(0)
  .map((_, i) => ({
    id: `p${i + 1}`,
    name: `Product ${i + 1}`,
    image:
      "/images/pngtree-smart-electronic-apple-watches-vector-set-png-image_5155507.png",
    price: 75 + i * 10,
    originalPrice: 100 + i * 10,
    discount: 25,
    rating: 4,
    store: `Store ${i + 1}`,
    reviewCount: i + 1,
  }));

const ProductPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // تحميل الكارت من localStorage عند بداية التشغيل
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch {
        console.error("خطأ في قراءة الكارت من localStorage");
      }
    }
  }, []);

  // حفظ الكارت تلقائياً عند التغيير
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === product.id);
      return existing
        ? prevItems.map((i) =>
            i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const total = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="flex-1 container mx-auto px-7 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <ProductFilters />

          <section className="flex-1">
            {/* بحث وفرز */}
            <div className="mb-4 flex items-center gap-2 max-w-md relative">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none" />
              </div>

              <div className="relative">
                <button
                  onClick={() => setSortMenuOpen((prev) => !prev)}
                  className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <SlidersHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
                {sortMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-md p-2 z-50">
                    <button className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                      Price: Low to High
                    </button>
                    <button className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                      Price: High to Low
                    </button>
                    <button className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                      Most Popular
                    </button>
                    <button className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                      Newest
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* عنوان */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" />
                Products
              </h2>
            </div>

            {/* المنتجات */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onAddToCart={() => handleAddToCart(product)}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">
                  No products found.
                </p>
              )}
            </div>
          </section>
        </div>

        {/* سلة المشتريات */}
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
          <FloatingButtons onCartClick={() => setIsCartOpen(true)} cartCount={cartItems.length} />
        )}
        <MobileNavigation onOrdersClick={() => setIsCartOpen(true)} cartCount={cartItems.length} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
