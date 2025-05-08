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
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Header: React.FC = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();

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
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4 text-gray-700">
          <Link to="/" onClick={() => setSidebarOpen(false)}>
            Home
          </Link>
          <Link to="/categories" onClick={() => setSidebarOpen(false)}>
            Categories
          </Link>
          <Link to="/favourite" onClick={() => setSidebarOpen(false)}>
            Favourite
          </Link>
          <Link to="/stores" onClick={() => setSidebarOpen(false)}>
            Stores
          </Link>
          <Link to="/signin" onClick={() => setSidebarOpen(false)}>
            Sign In
          </Link>
        </nav>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm z-30 relative sticky top-0 w-full">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex justify-between items-center py-2  bg-blue-50">
            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span className="ml-1">Your Location:</span>
              <div className="relative">
                <button
                  className="flex items-center ml-1 text-blue-600 font-medium"
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                >
                  arad , israel
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <div className="relative">
                <button
                  className="flex items-center text-sm"
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                >
                  English
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
              </div>

              <div className="relative ml-4">
                <button
                  className="flex items-center text-sm"
                  onClick={() => setIsUserOpen(!isUserOpen)}
                >
                  <UserCircle className="h-5 w-5 mr-1 text-gray-700 hover:text-blue-600 transition-colors" />
                  Join Us
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Main nav */}
          <div className="flex flex-wrap justify-between items-center py-4">
            <div className="flex items-center space-x-8 w-full md:w-auto justify-center md:justify-start">
              <Link to="/">
                <Logo />
              </Link>

              <nav className="hidden md:flex space-x-6">
                {[
                  { label: "Home", path: "/" },
                  { label: "Categories", path: "/categories" },
                  { label: "Favourite", path: "/favourite" },
                  { label: "Stores", path: "/stores" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-blue-600"
                        : "text-gray-800 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center justify-center md:justify-end space-x-4 mt-4 md:mt-0 w-full md:w-auto">
              {/* Search */}
              <div className="relative transition-all duration-300 ease-in-out">
                {searchOpen ? (
                  <div className="flex items-center space-x-2 border border-gray-300 rounded-md px-2 py-1 w-64 transition">
                    <Search className="h-5 w-5 text-gray-500" />
                    <input
                      type="text"
                      className="w-full outline-none text-sm"
                      placeholder="Search..."
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                      className="text-gray-400 hover:text-red-500"
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchText("");
                      }}
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <button
                    className="p-2 hover:text-blue-600 transition-colors"
                    onClick={() => setSearchOpen(true)}
                  >
                    <Search className="h-6 w-6" />
                  </button>
                )}
              </div>

              <button className="p-2 hover:text-blue-600 transition-colors">
                <Bell className="h-6 w-6" />
              </button>
              <Link to="/cart" className="p-2 hover:text-blue-600 transition-colors">
                <ShoppingCart className="h-6 w-6" />
              </Link>
              <Link to="/signin" className="hidden md:flex items-center hover:text-blue-600 transition-colors">
                <UserCircle className="h-6 w-6 mr-1" />
                <span>Sign In</span>
              </Link>
              {/* <button
                className=" p-2 hover:text-blue-600 transition-colors"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
