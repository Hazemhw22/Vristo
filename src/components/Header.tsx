import React, { useState, useEffect } from "react";
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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "he" : prev === "he" ? "ar" : "en"));
  };

  const getLocationText = () => {
    switch (language) {
      case "ar":
        return "عراد، إسرائيل";
      case "he":
        return "ערד, ישראל";
      default:
        return "Arad, Israel";
    }
  };

  const getLanguageLabel = () => {
    switch (language) {
      case "ar":
        return "AR";
      case "he":
        return "HE";
      default:
        return "EN";
    }
  };

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
      <header className="bg-white dark:bg-gray-900 shadow-sm z-30 sticky top-0 w-full transition-colors duration-300">
        <div className="container mx-auto px-4">

         {/* Top bar for desktop */}
        <div className="hidden md:flex justify-between items-center px-4 py-1 bg-blue-50 dark:bg-gray-800 transition-colors duration-300 rounded-b-md">
          {/* Left: Location */}
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
         <MapPin className="h-3 w-3 text-blue-600 dark:text-blue-400" />
        <span className="ml-1">{getLocationText()}</span>
        </div>

  {/* Right: Language + Dark Mode */}
  <div className="flex items-center gap-4 text-sm">
    {/* Language Toggle */}
    <div
      onClick={toggleLanguage}
      className="cursor-pointer text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-white transition-all duration-300"
    >
      {getLanguageLabel()}
    </div>

    {/* Dark Mode Toggle */}
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-white transition-all duration-300"
    >
      {darkMode
        ? language === "ar" ? "☀️ " : language === "he" ? "☀️ " : "☀️ "
        : language === "ar" ? "🌙 " : language === "he" ? "🌙 " : "🌙 "}
    </button>
  </div>
</div>


          {/* Mobile Header */}
          <div className="flex items-center justify-between py-2 md:hidden">
            <button onClick={() => setSidebarOpen(true)} className="text-gray-700">
              <Menu className="h-6 w-6 hover:text-blue-600" />
            </button>

            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span className="ml-1 text-gray-600">{getLocationText()}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="text-gray-700 hover:text-blue-600"
              >
                <Search className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-blue-600">
                <Bell className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile Search */}
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

          {/* Desktop Main Header */}
          <div className="hidden md:flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
             <Link to="/" className="flex items-center text-2xl font-bold text-blue-600 hover:text-blue-700 gap-2">
              <img src="/public/logo.svg" alt="Vristo Logo" className="w-8 h-8" />
                    <span className="text-2xl font-bold text-black dark:text-gray-300">Vristo</span>

            </Link>

              <nav className="flex space-x-6 text-gray-500">
                <Link to="/" className="hover:text-blue-600">Home</Link>
                <Link to="/categories" className="hover:text-blue-600">Categories</Link>
                <Link to="/favourite" className="hover:text-blue-600">Favourite</Link>
                <Link to="/stores" className="hover:text-blue-600">Stores</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              {/* Search */}
            <div className={`relative flex items-center transition-all duration-300 ${searchOpen ? "w-64" : "w-10"}`}>
               <button
                 onClick={() => setSearchOpen(!searchOpen)}
                className="absolute left-3 z-10 text-gray-500 hover:text-blue-600">
                <Search className="h-6 w-6" />
              </button>

              <input
                type="text"
                placeholder="Search products..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className={`pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm outline-none w-full transition-opacity duration-300 ${
                searchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              />
            </div>

              <Bell className="h-6 w-6 text-gray-500 hover:text-blue-600" />
              <Link to="/cart">
                <ShoppingBag className="h-6 w-6 text-gray-500 hover:text-blue-600" />
              </Link>
              <Link to="/signin" className="flex items-center text-gray-500 hover:text-blue-600">
                <UserCircle className="h-6 w-6 " />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
