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
    <div className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">{title}</h2>
        <a href="#" className="text-blue-600 text-sm font-medium flex items-center hover:underline">
          See All
        </a>
      </div>

      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
          {visibleBrands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center h-24 hover:border-4 hover:border-blue-500 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {startIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        )}

        {startIndex + itemsPerPage < brands.length && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default BrandSection;
