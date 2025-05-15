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
  backgroundColor?: string;
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
  backgroundColor = "bg-pink-50", // يمكن تخصيصها
}) => {
  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden shadow border border-gray-200 dark:border-gray-700 dark:shadow-md">
      {/* العنوان والعبارات */}
      <div className={`${backgroundColor} p-4 dark:bg-gray-800`}>
        <div className="flex items-center justify-between">
          <img src={image} alt={name} className="h-24 object-contain" />
          <div className="text-right">
            <div className="text-base font-semibold text-gray-800 dark:text-gray-100">{tagline}</div>
            {taglineSecondary && (
              <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {taglineSecondary}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* التفاصيل */}
      <div className="bg-white dark:bg-gray-900 p-4">
        <div className="flex items-center mb-1">
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
            {name[0]}
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100">{name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{address}</p>
          </div>
        </div>

        {/* التقييم وعدد العناصر */}
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mt-2">
          <div className="flex items-center mr-4">
            <span className="text-blue-600 dark:text-blue-400 font-bold">{rating.toFixed(1)}</span>
            <span className="ml-1 text-gray-400 dark:text-gray-500">({reviewCount})</span>
          </div>
          <div className="text-blue-600 dark:text-blue-400 font-medium">{itemCount} items</div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
