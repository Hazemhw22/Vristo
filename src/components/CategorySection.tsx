import React, { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

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

  // التمرير لليمين
  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // التمرير لليسار (إلى البداية)
  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-10">
      <div className="relative">
        <div className="flex justify-center">
          <div
            className="flex pb-4 gap-4  p-2 overflow-hidden"
            ref={scrollRef}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 w-[11%] min-w-[100px]" // Show exactly 8 items
              >
                <div className="flex flex-col items-center transition duration-300 ease-in-out hover:ring-2 hover:ring-purple-500 hover:ring-offset-2 rounded-md cursor-pointer">
                  <div className="w-15 h-15 mb-2">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <span className="text-xs text-center">{category.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* زر السحب لليسار (العودة للبداية) */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={handleScrollLeft}
            className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full shadow cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        </div>

        {/* زر السحب لليمين */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={handleScrollRight}
            className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full shadow cursor-pointer"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
