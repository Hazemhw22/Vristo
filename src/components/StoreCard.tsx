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
  backgroundColor?: string; // لون الخلفية العلوية (اختياري)
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
  backgroundColor = "bg-pink-50", // الافتراضي
}) => {
  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden shadow border border-gray-200">
      {/* العنوان والعبارات */}
      <div className={`p-4 ${backgroundColor}`}>
        <div className="flex items-center justify-between">
          <img src={image} alt={name} className="h-24 object-contain" />
          <div className="text-right">
            <div className="text-base font-semibold text-gray-800">{tagline}</div>
            {taglineSecondary && (
              <div className="text-sm font-medium text-gray-600">
                {taglineSecondary}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* التفاصيل */}
      <div className="bg-white p-4">
        <div className="flex items-center mb-1">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2 text-sm font-semibold text-green-700">
            {name[0]}
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-800">{name}</h3>
            <p className="text-xs text-gray-500 truncate">{address}</p>
          </div>
        </div>

        {/* التقييم وعدد العناصر */}
        <div className="flex items-center text-sm text-gray-600 mt-2">
          <div className="flex items-center mr-4">
            <span className="text-green-600 font-bold">{rating.toFixed(1)}</span>
            <span className="ml-1 text-gray-400">({reviewCount})</span>
          </div>
          <div className="text-green-600 font-medium">{itemCount} items</div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
