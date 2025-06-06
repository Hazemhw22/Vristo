"use client"

import { useState, useEffect } from "react"
import CategorySection from "@/components/CategorySection"
import FloatingButtons from "@/components/FloatingButtons"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import ProductSection from "@/components/ProductSection"
import MobileNavigation from "@/components/MobileNavigation"
import RecommendedStores from "@/components/RecommendedStores"
import StoreSection from "@/components/StoreSection"
import BrandSection from "@/components/BrandSection"
import Header from "@/components/Header"
import SaleSection from "@/components/SaleSection"
import SideCart from "@/components/SideCart" // ✅ جديد
import { Flame } from 'lucide-react'

const Index = () => {
  const [cartItems, setCartItems] = useState([])

  const onAddToCart = (product) => {
    setCartItems((prev) => {
      // Check if product already exists in cart
      const existingProductIndex = prev.findIndex((item) => item.id === product.id)

      if (existingProductIndex >= 0) {
        // Update quantity if product exists
        const updatedCart = [...prev]
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: product.quantity || updatedCart[existingProductIndex].quantity,
        }
        return updatedCart
      } else {
        // Add new product if it doesn't exist
        return [...prev, { ...product, quantity: product.quantity || 1 }]
      }
    })
  }

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const [showCart, setShowCart] = useState(false) // ✅ التحكم في عرض السلة
  const [isMobile, setIsMobile] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    return () => window.removeEventListener("resize", handleResize)
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

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
        categories: Array(8)
          .fill(0)
          .map((_, i) => ({
            id: `c${i + 1}`,
            name: `Category ${i + 1}`,
            image: "/public/images/KFC_logo.svg.png",
          })),
      },
    },
    {
      type: "product",
      props: {
        title: "Most Popular Products",
        icon: <Flame className="w-5 h-5 text-orange-500" />,
        products: Array(9)
          .fill(0)
          .map((_, i) => ({
            id: `p${i + 1}`,
            name: `Product ${i + 1}`,
            image: "/public/images/pngimg.com - iphone16_PNG35.png",
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
        stores: Array(6)
          .fill(0)
          .map((_, i) => ({
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
        brands: Array(10)
          .fill(0)
          .map((_, i) => ({
            id: `b${i + 1}`,
            name: `Brand ${i + 1}`,
            logo: i % 2 === 0 ? "/public/images/chanel-1.jpg" : "/public/images/Huawei-Logo.jpg",
          })),
      },
    },
    {
      type: "sale",
      props: {
        title: "When Words aren't Enough",
        subtitle: "Say It with Gifts!",
        image: "/public/images/pngtree-portrait-of-pretty-girl-holding-gift-box-in-hands-png-image_13968885.png",
        buttonText: "Shop Now",
      },
    },
  ])

  const [recommendedStores] = useState(() =>
    Array(12)
      .fill(0)
      .map((_, index) => ({
        id: `rs${index + 1}`,
        name: `Store ${index + 1}`,
        icon: index % 2 === 0 ? "/images/chanel-1.jpg" : "/images/Huawei-Logo.jpg",
      })),
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-sans">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <main className="justify-center px-4 sm:px-6 md:px-8 lg:px-12 pb-16 md:pb-0 py-8 space-y-12">
        <div className="max-w-7xl mx-auto">
          {sections.find((s) => s.type === "hero") && <Hero {...sections.find((s) => s.type === "hero")!.props} />}
        </div>

        <div className="max-w-7xl mx-auto">
          {sections.find((s) => s.type === "category") && (
            <CategorySection {...sections.find((s) => s.type === "category")!.props} />
          )}
        </div>

        <div className="max-w-7xl mx-auto">
          <RecommendedStores stores={recommendedStores} />
        </div>

        <div className="flex flex-col items-center space-y-16">
          {sections.map((section, idx) => {
            const centeredSections = ["product", "store", "brand", "sale"]
            if (centeredSections.includes(section.type)) {
              let SectionComponent
              switch (section.type) {
                case "product":
                  SectionComponent = ProductSection
                  break
                case "store":
                  SectionComponent = StoreSection
                  break
                case "brand":
                  SectionComponent = BrandSection
                  break
                case "sale":
                  SectionComponent = SaleSection
                  break
                default:
                  return null
              }

              return (
                <div key={idx} className="w-full max-w-7xl">
                  <SectionComponent {...section.props} onAddToCart={onAddToCart} />
                </div>
              )
            }
            return null
          })}
        </div>
      </main>

      <Footer />

      {!isMobile && (
        <FloatingButtons
          onCartClick={() => setShowCart(true)} // تم تعديل هذا السطر ليستخدم showCart
          cartCount={cartItems.length}
        />
      )}

      <SideCart
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
      />

      <MobileNavigation />
    </div>
  )
}

export default Index
