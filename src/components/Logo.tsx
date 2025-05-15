import React from "react";
import { Link } from "react-router-dom"; // لو تستخدم React Router

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img
        src="/public/logo.svg"
        alt="Vristo Logo"
        className="w-10 h-10 object-contain"
      />
      <span className="text-2xl font-bold text-black dark:text-gray-300">Vristo</span>
    </Link>
  );
};

export default Logo;
