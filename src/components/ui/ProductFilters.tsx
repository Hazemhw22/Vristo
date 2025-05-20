import React from "react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@radix-ui/react-select";
import { Input } from "@/components/ui/input";

const ProductFilters = () => {
  return (
    <aside className="w-full md:w-64 bg-white dark:bg-gray-800 p-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm space-y-4">
      <h3 className="font-semibold text-lg mb-2">Filters</h3>

      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <Select>
          <SelectTrigger className="w-full border rounded-md p-2 dark:bg-gray-700 dark:border-gray-600">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Brand</label>
        <Input
          className="w-full dark:bg-gray-700 dark:border-gray-600"
          placeholder="Search Brand"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Price Range</label>
        <input type="range" className="w-full" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Rating</label>
        <Select>
          <SelectTrigger className="w-full border rounded-md p-2 dark:bg-gray-700 dark:border-gray-600">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="4up">4 stars & up</SelectItem>
            <SelectItem value="3up">3 stars & up</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Availability</label>
        <Select>
          <SelectTrigger className="w-full border rounded-md p-2 dark:bg-gray-700 dark:border-gray-600">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="in">In Stock</SelectItem>
            <SelectItem value="out">Out of Stock</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </aside>
  );
};

export default ProductFilters;
