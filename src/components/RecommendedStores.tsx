import React from "react";

interface RecommendedStore {
  id: string;
  name: string;
  icon: string;
}

interface RecommendedStoresProps {
  stores: RecommendedStore[];
}

const RecommendedStores: React.FC<RecommendedStoresProps> = ({ stores }) => {
  return (
    <div className="bg-blue-50 rounded-lg p-4 mb-6">
      <h3 className="text-lg font-medium mb-4">Recommended Stores!</h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {stores.map((store) => (
         <div
         key={store.id}
         className="h-16 w-16 rounded-full border-2 border-transparent hover:border-blue-500 p-1 bg-white hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md flex items-center justify-center"
       >
         <img
           src={store.icon}
           alt={store.name}
           className="h-full w-full object-contain rounded-full"
         />
       </div>
       
        ))}
      </div>
    </div>
  );
};

export default RecommendedStores;
