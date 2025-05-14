import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import Link from "next/link";

const banners = [
  {
    id: 1,
    image: "/images/banner-1.jpg",
    title: "Super Sale 50% Off",
    subtitle: "Hurry before it's gone!",
    link: "/sale",
  },
  {
    id: 2,
    image: "/images/banner-2.jpg",
    title: "New Arrivals",
    subtitle: "Discover fresh styles and trends",
    link: "/new-arrivals",
  },
  {
    id: 3,
    image: "/images/banner-3.jpg",
    title: "Free Shipping",
    subtitle: "On orders over $99",
    link: "/shipping",
  },
];

const AdCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-60 md:h-72 overflow-hidden rounded-xl shadow-lg my-8"
      {...swipeHandlers}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="min-w-full relative">
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-60 md:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-6 md:px-12 text-white">
              <h2 className="text-xl md:text-2xl font-bold">{banner.title}</h2>
              <p className="text-sm md:text-base mb-3">{banner.subtitle}</p>
              <Link
                href={banner.link}
                className="inline-block bg-white text-black text-sm font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
      >
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdCarousel;
