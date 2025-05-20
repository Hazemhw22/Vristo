// components/ProductFilters.tsx
import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Star } from "lucide-react";

interface SelectItem {
  value: string;
  label: string;
}

const CustomSelect: React.FC<{
  placeholder: string;
  items: SelectItem[];
  onValueChange?: (value: string) => void;
}> = ({ placeholder, items, onValueChange }) => {
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Select.Root onValueChange={onValueChange}>
      <Select.Trigger className="w-full border rounded-md p-2 flex justify-between items-center dark:bg-gray-700 dark:border-gray-600 text-sm">
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-md z-50" position="popper">
          <div className="p-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full mb-2 p-1 rounded border text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>
          <Select.Viewport className="p-1">
            {filteredItems.map((item) => (
              <Select.Item
                key={item.value}
                value={item.value}
                className="p-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              >
                <Select.ItemText>{item.label}</Select.ItemText>
              </Select.Item>
            ))}
            {filteredItems.length === 0 && (
              <div className="px-2 pb-2 text-sm text-gray-500 dark:text-gray-400">No results found</div>
            )}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const ProductFilters: React.FC<{
  onBrandChange: (val: string) => void;
  onRatingChange: (val: number) => void;
}> = ({ onBrandChange, onRatingChange }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  const [price, setPrice] = useState(500);

  const handleStarClick = (stars: number) => {
    setSelectedStars(stars);
    onRatingChange(stars);
  };

  return (
    <aside className="w-full md:w-64 bg-white dark:bg-gray-800 p-4 border border-gray-300 dark:border-gray-700 rounded-md shadow space-y-4">
      <h3 className="font-semibold text-lg mb-2">Filters</h3>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <CustomSelect
          placeholder="All"
          items={[
            { value: "electronics", label: "Electronics" },
            { value: "accessories", label: "Accessories" },
            { value: "fashion", label: "Fashion" },
          ]}
        />
      </div>

      {/* Brand */}
      <div>
        <label className="block text-sm font-medium mb-1">Brand</label>
        <CustomSelect
          placeholder="Select Brand"
          items={[
            { value: "Apple", label: "Apple" },
            { value: "Samsung", label: "Samsung" },
            { value: "Sony", label: "Sony" },
            { value: "Dell", label: "Dell" },
          ]}
          onValueChange={onBrandChange}
        />
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium mb-1">Price Range</label>
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
          <span>$0</span>
          <span>${price}</span>
          <span>$1000</span>
        </div>
        <input
          type="range"
          min={0}
          max={1000}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Rating */}
      <div>
        <label className="block text-sm font-medium mb-1">Rating</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={20}
              onClick={() => handleStarClick(star)}
              className={`cursor-pointer ${star <= selectedStars ? "text-yellow-400" : "text-gray-400"}`}
              fill={star <= selectedStars ? "#facc15" : "none"}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ProductFilters;
