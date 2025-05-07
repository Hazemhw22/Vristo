import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-50 py-10">
      <div className="container mx-auto px-4">
        {/* تقسيم الفوتر إلى 4 أعمدة متساوية */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* العمود الأول: الشعار والنشرة الإخبارية */}
          <div className="flex flex-col space-y-4">
            <Logo />
            <p className="my-4 text-sm">
              Subscribe to our newsletter to get latest updates
            </p>
            
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-white border border-gray-200 rounded-l-md px-4 py-2 flex-grow"
              />
              <Button className="bg-blue-500 hover:bg-blue-600 rounded-l-none">
                Subscribe
              </Button>
            </div>
            
            {/* أيقونات الوسائط الاجتماعية */}
            <div className="flex space-x-3 mt-6">
              <a href="#" className="bg-blue-500 p-2 rounded-full text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-500 p-2 rounded-full text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-500 p-2 rounded-full text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-500 p-2 rounded-full text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-500 p-2 rounded-full text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* العمود الثاني: روابط سريعة */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-blue-500">Become a Store Owner</a></li>
              <li><a href="#" className="text-sm hover:text-blue-500">Become a Delivery Man</a></li>
              <li><a href="#" className="text-sm hover:text-blue-500">Help & Support</a></li>
              <li><a href="#" className="text-sm hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-blue-500">Terms & Conditions</a></li>
            </ul>
          </div>
          
          {/* العمود الثالث: الاتصال بنا */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-medium mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-4">
              <div>
                <div className="flex items-center mb-2">
                  <Mail className="h-5 w-5 mr-2" />
                  <h4 className="font-medium">Send us Mail</h4>
                </div>
                <p className="text-sm">support@vristo.com</p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <Phone className="h-5 w-5 mr-2" />
                  <h4 className="font-medium">Contact Us</h4>
                </div>
                <p className="text-sm">0506667277</p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  <h4 className="font-medium">Find us Here</h4>
                </div>
                <p className="text-sm">Arad , Israel</p>
              </div>
            </div>
          </div>
          
          {/* العمود الرابع (اختياري ويمكن تركه فارغًا إذا أردت) */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-medium mb-4">More Information</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-blue-500">FAQs</a></li>
              <li><a href="#" className="text-sm hover:text-blue-500">Shipping Policy</a></li>
              <li><a href="#" className="text-sm hover:text-blue-500">Return & Exchange</a></li>
            </ul>
          </div>
        </div>
        
        {/* الخط الفاصل في الأسفل */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-sm">© 2025 Vristo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
