import { Button } from "@/components/ui/button";

const SaleSection = ({ title, subtitle, image, buttonText }) => {
  return (
    <div className="bg-blue-100 rounded-2xl flex flex-col lg:flex-row items-center justify-between p-6">
      <div className="space-y-3 max-w-lg">
        {/* تكبير الخطوط وتقريب العناصر */}
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="text-xl text-gray-700 mt-4 py-4 px3">{subtitle}</p>
        <Button className="mt-4 transition-transform transform hover:scale-105 duration-300">
          {buttonText}
        </Button>
      </div>
      <div className="mt-4 lg:mt-0 relative w-full max-w-xs">
        {/* إضافة صورة كخلفية */}
        <div 
          className="absolute inset-0 bg-blue-100 rounded-lg"
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <img
          src={image}
          alt="Gift Banner"
          width={400}
          height={250}
          className="rounded-lg opacity-0"
        />
      </div>
    </div>
  );
};

export default SaleSection;
