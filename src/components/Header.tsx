import React, { useState } from "react";
import {
  MapPin,
  ChevronDown,
  Search,
  Bell,
  ShoppingCart,
  UserCircle,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Overlay for sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500 hover:text-red-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4 text-gray-700">
          <Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link>
          <Link to="/categories" onClick={() => setSidebarOpen(false)}>Categories</Link>
          <Link to="/favourite" onClick={() => setSidebarOpen(false)}>Favourite</Link>
          <Link to="/stores" onClick={() => setSidebarOpen(false)}>Stores</Link>
          <Link to="/signin" onClick={() => setSidebarOpen(false)}>Sign In</Link>
        </nav>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm z-30 sticky top-0 w-full">
        <div className="container mx-auto px-4">
          {/* Mobile Header */}
          <div className="flex items-center justify-between py-2 md:hidden">
            {/* Menu button */}
            <button onClick={() => setSidebarOpen(true)} className="text-gray-700">
              <Menu className="h-6 w-6" />
            </button>

            {/* Location */}
            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span className="ml-1 text-gray-600">Arad, Israel</span>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-2">
              <button onClick={() => setSearchOpen(true)} className="text-gray-700">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-gray-700">
                <Bell className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {searchOpen && (
            <div className="mt-2 md:hidden relative">
              <div className="flex items-center border rounded-full px-3 py-1 bg-gray-100">
                <Search className="text-gray-400 mr-2" size={18} />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-sm"
                />
                <button
                  className="text-gray-400"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchText("");
                  }}
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Desktop Header */}
          <div className="hidden md:flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-2xl font-bold text-blue-600">Vristo</Link>
              <nav className="flex space-x-6 text-gray-700">
                <Link to="/">Home</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/favourite">Favourite</Link>
                <Link to="/stores">Stores</Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 rounded-full bg-gray-100 w-full text-sm outline-none"
                />
              </div>
              <Bell className="h-6 w-6 text-gray-700" />
              <Link to="/cart">
                <ShoppingCart className="h-6 w-6 text-gray-700" />
              </Link>
              <Link to="/signin" className="flex items-center text-gray-700 hover:text-blue-600">
                <UserCircle className="h-6 w-6 mr-1" />
                <span>Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
