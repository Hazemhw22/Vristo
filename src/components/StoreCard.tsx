import React from "react";

interface StoreCardProps {
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

const StoreCard: React.FC<StoreCardProps> = ({
  id,
  name,
  image,
  rating,
  reviewCount,
  itemCount,
  address,
  tagline,
  taglineSecondary,
}) => {
  return (
    <div className="relative rounded-lg overflow-hidden h-60 border border-transparent hover:border-blue-500 transition-all duration-300 shadow hover:shadow-lg">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/80 to-pink-50/80"></div>
        <div className="absolute inset-0 flex items-center p-6">
          <div className="flex w-full">
            <div className="flex items-center justify-center w-24 h-24 bg-white rounded-full overflow-hidden border-4 border-white transition duration-300">
              <img src={image} alt={name} className="h-16 object-contain" />
            </div>

            <div className="ml-4 flex-1">
              <h3 className="text-xl font-bold mb-1">{name}</h3>
              <p className="text-gray-700 text-sm mb-1">{address}</p>
              <div className="flex items-center text-sm mb-3">
                <div className="flex items-center mr-4">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <span
                        key={index}
                        className={`${
                          index < Math.floor(rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  <span className="ml-1 text-gray-600">({reviewCount})</span>
                </div>
                <div className="text-gray-600">{itemCount} items</div>
              </div>

              <div className="mt-2 text-red-600 text-lg font-medium">
                {tagline}
              </div>
              {taglineSecondary && (
                <div className="text-red-600 font-medium">
                  {taglineSecondary}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
