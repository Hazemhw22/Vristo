import { Button } from "@/components/ui/button";

const SaleSection = ({ title, subtitle, image, buttonText }) => {
  return (
    <div className="bg-blue-100 rounded-2xl flex flex-col lg:flex-row items-center justify-between p-6 relative overflow-visible">
      <div className="space-y-3 max-w-lg z-10">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="text-xl text-gray-700 mt-2 py-4 px3">{subtitle}</p>
        <Button className="mt-4 transition-transform transform hover:scale-105 duration-300">
          {buttonText}
        </Button>
      </div>

      <div className="relative w-full max-w-xs h-[300px] lg:h-[350px] flex justify-center z-10">
        <img
          src={image}
          alt="Gift Banner"
          className="absolute bottom-[-23px] w-[350px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default SaleSection;
