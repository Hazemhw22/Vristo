import React, { useRef } from "react";
import { useSwipeable } from "react-swipeable";

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

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? 300 : -300,
        behavior: "smooth",
      });
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleScroll("right"),
    onSwipedRight: () => handleScroll("left"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="mb-10">
      <div className="relative">
        <div className="flex justify-center">
          <div
            {...swipeHandlers}
            ref={scrollRef}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 w-[45vw] sm:w-[40vw] md:w-[120px] flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              >
                <div className="w-[70px] h-[70px] mb-2 rounded-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-center">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
