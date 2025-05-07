import React, { useState } from "react";
import CategorySection from "@/components/CategorySection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import QuickAccess from "@/components/QuickAccess";
import RecommendedStores from "@/components/RecommendedStores";
import StoreSection from "@/components/StoreSection";
import BrandSection from "@/components/BrandSection"; 
import Header from "@/components/Header";
import { Flame } from "lucide-react";

const Index = () => {
  const [sections] = useState(() => [
    {
      type: "hero",
      props: {
        title: "iPhone 16",
        subtitle: "The Future In Your Hands",
        image: "/images/Apple-iPhone-16-release-date-price-and-features.jpg", 
      },
    },
    {
      type: "category",
      props: {
        categories: Array(6).fill(0).map((_, i) => ({
          id: `c${i + 1}`,
          name: `Category ${i + 1}`,
          image: "/public/logo.svg", 
        })),
      },
    },
    {
      type: "product",
      props: {
        title: "Most Popular Products",
        icon: <Flame className="w-5 h-5 text-orange-500" />,
        products: Array(5).fill(0).map((_, i) => ({
          id: `p${i + 1}`,
          name: `Product ${i + 1}`,
          image: "/images/Apple-iPhone-16-release-date-price-and-features.jpg",
          price: 75 + i * 10,
          originalPrice: 100 + i * 10,
          discount: 25,
          rating: 4,
          store: `Store ${i + 1}`,
          reviewCount: i + 1,
        })),
      },
    },
    {
      type: "store",
      props: {
        title: "Popular Stores",
        stores: Array(4).fill(0).map((_, i) => ({
          id: `s${i + 1}`,
          name: `Store ${i + 1}`,
          image: "/images/golden-crownand-laurel-logo-jql2er5hlfitk4jc-jql2er5hlfitk4jc.png", 
          rating: i,
          reviewCount: i * 2,
          itemCount: i * 10,
          address: `Street ${i}, City`,
          tagline: "Tagline",
          taglineSecondary: "Secondary",
        })),
      },
    },
    {
      type: "brand",
      props: {
        title: "Brands",
        brands: Array(5).fill(0).map((_, i) => ({
          id: `b${i + 1}`,
          name: `Brand ${i + 1}`,
          logo: i % 2 === 0
            ? "/public/images/chanel-1.jpg"
            : "/public/images/Huawei-Logo.jpg", 
        })),
      },
    },
  ]);

  const [recommendedStores] = useState(() =>
    Array(5).fill(0).map((_, index) => ({
      id: `rs${index + 1}`,
      name: `Store ${index + 1}`,
      icon: index % 2 === 0
        ? "/images/chanel-1.jpg"
        : "/images/Huawei-Logo.jpg", 
    }))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="w-full px-6 py-6 space-y-6">
  {/* Hero & RecommendedStores */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    {/* Hero = lift */}
    <div className="lg:col-span-2">
      {sections.find((s) => s.type === "hero") && (
        <div className="max-w-6xl">
          <Hero {...sections.find((s) => s.type === "hero")!.props} />
        </div>
      )}
    </div>

    {/* RecommendedStores  = right */}
    <div className="lg:col-span-1">
      <RecommendedStores stores={recommendedStores} />
    </div>
  </div>

  {/* center */}
  <div className="flex flex-col items-center space-y-6">
    {sections.map((section, idx) => {
      const centeredSections = ["category", "product", "store", "brand"];
      if (centeredSections.includes(section.type)) {
        let SectionComponent;
        switch (section.type) {
          case "category":
            SectionComponent = CategorySection;
            break;
          case "product":
            SectionComponent = ProductSection;
            break;
          case "store":
            SectionComponent = StoreSection;
            break;
          case "brand":
            SectionComponent = BrandSection;
            break;
          default:
            return null;
        }

        return (
          <div key={idx} className="w-full max-w-7xl">
            <SectionComponent {...section.props} />
          </div>
        );
      }
      return null;
    })}
  </div>
</main>



      <Footer />
      <FloatingButtons />
      <QuickAccess />
    </div>
  );
};

export default Index;
