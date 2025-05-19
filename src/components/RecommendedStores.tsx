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
    <div className="mb-10 ">
      <h3 className="text-xl font-bold mb-6">Recommended Stores!</h3>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-8 gap-8">
          {stores.map((store) => (
            <div
              key={store.id}
              className="h-24 w-24 rounded-full border-2 border-transparent hover:border-blue-500 p-2 bg-white hover:scale-110 transition-transform duration-300 shadow-sm hover:shadow-md flex items-center justify-center"
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
    </div>
  );
};

export default RecommendedStores;
