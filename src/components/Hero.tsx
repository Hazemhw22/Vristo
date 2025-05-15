import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

interface HeroItem {
  title: string;
  subtitle: string;
  image: string;
  bgColor: string;
  darkBgColor: string;
}

const heroData: HeroItem[] = [
  {
    title: "iPhone 16",
    subtitle: "The Future In Your Hands",
    image: "/public/images/pngimg.com - iphone16_PNG35.png",
    bgColor: "bg-amber-50",
    darkBgColor: "dark:bg-amber-900",
  },
  {
    title: "Smart Watch",
    subtitle: "Stay Connected, Stay Smart",
    image: "/public/images/pngtree-smart-electronic-apple-watches-vector-set-png-image_5155507.png",
    bgColor: "bg-blue-50",
    darkBgColor: "dark:bg-blue-900",
  },
  {
    title: "Gaming Console",
    subtitle: "Experience Next-Gen Gaming",
    image: "/public/images/pngimg.com - sony_playstation_PNG17546.png",
    bgColor: "bg-purple-50",
    darkBgColor: "dark:bg-purple-900",
  },
];

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { title, subtitle, image, bgColor, darkBgColor } = heroData[activeIndex];

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % heroData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + heroData.length) % heroData.length);
  };

  return (
    <motion.div
      className={`rounded-lg p-8 mb-8 overflow-hidden transition-colors duration-500 ${bgColor} ${darkBgColor}`}
      key={bgColor}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div {...swipeHandlers} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-start text-gray-900 dark:text-gray-100">
          <AnimatePresence mode="wait">
            <motion.h1
              key={title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            >
              {title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={subtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="text-lg sm:text-xl mb-6 text-gray-700 dark:text-gray-300"
            >
              {subtitle}
            </motion.p>
          </AnimatePresence>

          <Button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 px-8 py-4 text-white font-medium rounded-md">
            Buy Now
          </Button>
        </div>

        <div className="flex justify-center md:justify-end">
          <AnimatePresence mode="wait">
            <motion.img
              key={image}
              src={image}
              alt={title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="h-64 sm:h-80 md:h-96 w-auto object-contain"
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
                activeIndex === i ? "bg-blue-500 dark:bg-blue-400" : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
