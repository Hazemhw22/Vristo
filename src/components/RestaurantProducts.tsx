import React from "react";

interface RestaurantProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  restaurant: string;
}

interface Props {
  products: RestaurantProduct[];
}

const RestaurantProducts: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">🍽️ Featured Restaurant Meals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
              <p className="text-sm text-gray-500">by {product.restaurant}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xl font-bold text-green-600">${product.price}</p>
                <button
                  onClick={() => {}}
                  className="bg-orange-500 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-orange-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantProducts;
