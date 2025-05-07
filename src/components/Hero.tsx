import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface HeroItem {
  title: string;
  subtitle: string;
  image: string;
}

const heroData: HeroItem[] = [
  {
    title: "iPhone 16",
    subtitle: "The Future In Your Hands",
    image: "/public/images/pngimg.com - iphone16_PNG35.png",
  },
  {
    title: "Smart Watch",
    subtitle: "Stay Connected, Stay Smart",
    image: "/public/images/pngtree-smart-electronic-apple-watches-vector-set-png-image_5155507.png",
  },
  {
    title: "Gaming Console",
    subtitle: "Experience Next-Gen Gaming",
    image: "/public/images/pngimg.com - sony_playstation_PNG17546.png",
  },
];

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { title, subtitle, image } = heroData[activeIndex];

  return (
    <div className="bg-amber-50 rounded-lg p-8 mb-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-start">
          <AnimatePresence mode="wait">
            <motion.h1
              key={title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-3"
            >
              {title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-xl mb-6 text-gray-700"
            >
              {subtitle}
            </motion.p>
          </AnimatePresence>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button className="bg-blue-500 hover:bg-blue-600 px-8 py-6 text-white font-medium rounded-md">
              Buy Now
            </Button>
          </motion.div>
        </div>

        <div className="flex justify-center md:justify-end">
          <AnimatePresence mode="wait">
            <motion.img
              key={image}
              src={image}
              alt={title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="max-h-96 object-contain"
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          {heroData.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveIndex(i)}
              animate={{ width: activeIndex === i ? 24 : 8 }}
              transition={{ duration: 0.3 }}
              className={`h-2 rounded-full ${
                activeIndex === i ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
