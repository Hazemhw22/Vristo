import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import StoreCard from "./StoreCard";

interface Store {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  itemCount: number;
  address: string;
  tagline: string;
  taglineSecondary?: string;
}

interface StoreSectionProps {
  title: string;
  stores: Store[];
}

const itemsPerPage = 3;

const StoreSection: React.FC<StoreSectionProps> = ({ title, stores }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + itemsPerPage < stores.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleStores = stores.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">{title}</h2>
        <a href="#" className="text-blue-600 text-sm font-medium flex items-center">
          See All
        </a>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleStores.map((store) => (
            <StoreCard key={store.id} {...store} />
          ))}
        </div>

        {startIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        )}

        {startIndex + itemsPerPage < stores.length && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default StoreSection;
