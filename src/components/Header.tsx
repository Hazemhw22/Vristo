import React, { useState } from "react";
import {
  MapPin,
  ChevronDown,
  Search,
  Bell,
  ShoppingBag,
  UserCircle,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [language, setLanguage] = useState("en");

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
          {/* Location at the top (for desktop) */}
          <div className="hidden md:flex justify-between items-center py-2 bg-blue-50">
            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span className="ml-1 text-gray-600">Arad, Israel</span>
            </div>

            {/* Language Selector with background and animation */}
            <div className="flex items-center space-x-2 p-2 text-blue-600 hover:text-blue-800 transition-all duration-300 cursor-pointer">
    <span
      className="text-sm"
      onClick={() => setLanguage(language === "en" ? "he" : "en")}
    >
      {language === "en" ? "EN" : "HE"}
    </span>
  </div>
</div>

          {/* Mobile Header */}
          <div className="flex items-center justify-between py-2 md:hidden">
            {/* Menu button */}
            <button onClick={() => setSidebarOpen(true)} className="text-gray-700">
              <Menu className="h-6 w-6 transition-all duration-300 hover:text-blue-600" />
            </button>

            {/* Location */}
            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span className="ml-1 text-gray-600">Arad, Israel</span>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="text-gray-700 transition-all duration-300 hover:text-blue-600"
              >
                <Search className="h-5 w-5" />
              </button>
              <button className="text-gray-700 transition-all duration-300 hover:text-blue-600">
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
              <Link
                to="/"
                className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-all duration-300"
              >
                Vristo
              </Link>
              <nav className="flex space-x-6 text-gray-700">
                <Link
                  to="/"
                  className="transition-all duration-300 hover:text-blue-600"
                >
                  Home
                </Link>
                <Link
                  to="/categories"
                  className="transition-all duration-300 hover:text-blue-600"
                >
                  Categories
                </Link>
                <Link
                  to="/favourite"
                  className="transition-all duration-300 hover:text-blue-600"
                >
                  Favourite
                </Link>
                <Link
                  to="/stores"
                  className="transition-all duration-300 hover:text-blue-600"
                >
                  Stores
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              {/* Desktop Search Bar */}
              <div
                className={`relative flex items-center ${
                  searchOpen ? "w-64" : "w-16"
                } transition-all duration-300`}
              >
                {searchOpen && (
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="pl-10 pr-4 py-2 rounded-full bg-gray-100 w-full text-sm outline-none"
                  />
                )}
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="text-gray-700 transition-all duration-300 hover:text-blue-600"
                >
                  <Search className="h-6 w-6" />
                </button>
              </div>
              <Bell className="h-6 w-6 text-gray-700 transition-all duration-300 hover:text-blue-600" />
              <Link to="/cart">
              <ShoppingBag className="h-6 w-6 text-gray-700 transition-all duration-300 hover:text-blue-600" />
              </Link>
              <Link
                to="/signin"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300"
              >
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
