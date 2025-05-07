import React from "react";

interface BrandProps {
  id: string;
  name: string;
  logo: string;
}

const BrandCard: React.FC<BrandProps> = ({ name, logo }) => {
  return (
    <div className="p-4 text-center hover:scale-110 transition-transform duration-300">
      <img src={logo} alt={name} className="mx-auto h-20 w-20 object-contain" />
      <p className="mt-2 font-medium text-sm">{name}</p>
    </div>
  );
};

export default BrandCard;
