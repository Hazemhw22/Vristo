import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface Brand {
  id: string;
  name: string;
  logo: string;
}

interface BrandSectionProps {
  title: string;
  brands: Brand[];
}

const itemsPerPage = 8;

const BrandSection: React.FC<BrandSectionProps> = ({ title, brands }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + itemsPerPage < brands.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleBrands = brands.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="mb-6 sm:mb-8 lg:mb-10 px-2 sm:px-0">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
        <a
          href="#"
          className="text-blue-600 text-sm font-medium flex items-center hover:underline"
        >
          See All
        </a>
      </div>

      <div className="relative">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"> 
          {visibleBrands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-lg shadow-sm p-3 sm:p-4 flex items-center justify-center h-20 sm:h-24 hover:border-2 hover:border-blue-500 transition-all duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-10 sm:max-h-12 object-contain"
              />
            </div>
          ))}
        </div>

    
        
      </div>
    </div>
  );
};

export default BrandSection;
