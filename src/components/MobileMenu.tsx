
import { Link } from "react-router-dom";
import { X, User, ShoppingBag, Heart, Home, List, Globe, MapPin, HelpCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 z-50">
      <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-lg p-4 z-50 transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={24} />
          </Button>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Link to="/profile" className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg" onClick={onClose}>
              <div className="w-10 h-10 bg-vristo-500 text-white flex items-center justify-center rounded-md">
                <User size={20} />
              </div>
              <span className="font-medium">Profile</span>
            </Link>
            
            <Link to="/orders" className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg" onClick={onClose}>
              <div className="w-10 h-10 bg-vristo-500 text-white flex items-center justify-center rounded-md">
                <ShoppingBag size={20} />
              </div>
              <span className="font-medium">My Orders</span>
            </Link>
            
            <Link to="/addresses" className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg" onClick={onClose}>
              <div className="w-10 h-10 bg-vristo-500 text-white flex items-center justify-center rounded-md">
                <MapPin size={20} />
              </div>
              <span className="font-medium">My Address</span>
            </Link>
            
            <Link to="/language" className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg" onClick={onClose}>
              <div className="w-10 h-10 bg-vristo-500 text-white flex items-center justify-center rounded-md">
                <Globe size={20} />
              </div>
              <span className="font-medium">Language</span>
            </Link>
          </div>
          
          <div className="border-t pt-4 space-y-2">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">Site Navigation</h3>
            <Link to="/" className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg" onClick={onClose}>
              <Home size={20} className="text-vristo-500" />
              <span>Home</span>
            </Link>
            
            <Link to="/categories" className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg" onClick={onClose}>
              <List size={20} className="text-vristo-500" />
              <span>Categories</span>
            </Link>
            
            <Link to="/favorites" className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg" onClick={onClose}>
              <Heart size={20} className="text-vristo-500" />
              <span>Favorites</span>
            </Link>
          </div>
          
          <div className="border-t pt-4 space-y-2">
            <Link to="/support" className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg" onClick={onClose}>
              <HelpCircle size={20} className="text-vristo-500" />
              <span>Help & Support</span>
            </Link>
            
            <Link to="/chat" className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg" onClick={onClose}>
              <MessageSquare size={20} className="text-vristo-500" />
              <span>Live Chat</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;