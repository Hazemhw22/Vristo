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
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {visibleStores.map((store) => (
            <StoreCard key={store.id} {...store} />
          ))}
        </div>

   
      </div>
    </div>
  );
};

export default StoreSection;
