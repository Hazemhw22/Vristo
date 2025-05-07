
import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
     
      <div className="ml-1 font-bold text-xl flex items-center">
        <span className="text-blue-500">Vristo</span>
        <span>Mart</span>
      </div>
    </Link>
  );
};

export default Logo;
