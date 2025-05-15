import React from "react";
import Logo from "./Logo";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-50 dark:bg-gray-900 pt-10">
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-10 grid grid-cols-1 md:grid-cols-4 gap-20 max-w-[1280px] px-4 sm:px-6 lg:px-8 mx-auto">
          {/* العمود الأول: الشعار والنشرة */}
          <div className="flex flex-col space-y-4 text-gray-700 dark:text-gray-300">
            <Logo />
            <p className="text-sm">Subscribe to our newsletter to get latest updates</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-white dark:bg-gray-700 border border-blue-200 dark:border-gray-600 rounded-l-md px-1 py-2 flex-grow text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-md px-4 text-sm">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-3 mt-6">
              <a href="#" className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div className="flex flex-col space-y-4 text-gray-700 dark:text-gray-300">
            <h3 className="font-semibold text-base">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Become a Store Owner</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Become a Delivery Man</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Help & Support</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* العمود الثالث: معلومات الاتصال */}
          <div className="flex flex-col space-y-4 text-gray-700 dark:text-gray-300">
            <h3 className="font-medium mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-4">
              <div>
                <div className="flex items-center mb-2">
                  <Mail className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300" />
                  <h4 className="font-medium">Send us Mail</h4>
                </div>
                <p className="text-sm">support@vristo.com</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Phone className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300" />
                  <h4 className="font-medium">Contact Us</h4>
                </div>
                <p className="text-sm">0506667277</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300" />
                  <h4 className="font-medium">Find us Here</h4>
                </div>
                <p className="text-sm">Arad , Israel</p>
              </div>
            </div>
          </div>

          {/* العمود الرابع: إضافي */}
          <div className="flex flex-col space-y-4 text-gray-700 dark:text-gray-300">
            <h3 className="font-semibold text-base">More Information</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Return & Exchange</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* قسم الحقوق منفصل مع خلفية مختلفة */}
      <div className="bg-gray-800 dark:bg-gray-900 py-4 mt-10">
        <p className="text-center text-sm text-white">© 2025 Vristo.</p>
      </div>
    </footer>
  );
};

export default Footer;
