import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface Category {
  id: string;
  name: string;
  image: string;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-10">
      <div className="flex overflow-x-auto pb-4 scrollbar-hide gap-4" ref={scrollRef}>
      {categories.map((category) => (
  <div key={category.id} className="flex-shrink-0 w-24">
    <div className="flex flex-col items-center transition duration-300 ease-in-out hover:ring-2 hover:ring-purple-500 hover:ring-offset-2 rounded-md">
      <div className="w-16 h-16 mb-2">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <span className="text-xs text-center">{category.name}</span>
    </div>
  </div>
))}


      </div>
      <div className="flex justify-end mt-2">
        <button
          onClick={handleScroll}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CategorySection;
