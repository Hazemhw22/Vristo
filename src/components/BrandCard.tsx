import React from "react";

interface BrandProps {
  id: string;
  name: string;
  logo: string;
}

const BrandCard: React.FC<BrandProps> = ({ name, logo }) => {
  return (
    <div className="p-4 text-center hover:scale-105 transition-transform duration-300">
      <img
        src={logo}
        alt={name}
        className="mx-auto h-16 sm:h-20 w-16 sm:w-20 object-contain"
      />
      <p className="mt-2 font-medium text-xs sm:text-sm">{name}</p>
    </div>
  );
};

export default BrandCard;
