
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Sun className="h-8 w-8 text-navy" />
              <span className="ml-2 text-xl font-bold text-navy">VisionVogue</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-navy font-medium">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-navy font-medium">All Products</Link>
            <Link to="/products?category=sunglasses" className="text-gray-700 hover:text-navy font-medium">Sunglasses</Link>
            <Link to="/products?category=spectacles" className="text-gray-700 hover:text-navy font-medium">Spectacles</Link>
            <Link to="/about" className="text-gray-700 hover:text-navy font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-navy font-medium">Contact</Link>
            <Link to="/admin" className="text-navy hover:text-navy-dark font-medium">Admin</Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="p-4 flex justify-between items-center border-b">
            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Sun className="h-8 w-8 text-navy" />
              <span className="ml-2 text-xl font-bold text-navy">VisionVogue</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="p-4 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-navy font-medium py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/products" className="block text-gray-700 hover:text-navy font-medium py-2" onClick={() => setIsOpen(false)}>All Products</Link>
            <Link to="/products?category=sunglasses" className="block text-gray-700 hover:text-navy font-medium py-2" onClick={() => setIsOpen(false)}>Sunglasses</Link>
            <Link to="/products?category=spectacles" className="block text-gray-700 hover:text-navy font-medium py-2" onClick={() => setIsOpen(false)}>Spectacles</Link>
            <Link to="/about" className="block text-gray-700 hover:text-navy font-medium py-2" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-navy font-medium py-2" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/admin" className="block text-gray-700 hover:text-navy font-medium py-2" onClick={() => setIsOpen(false)}>Admin</Link>
            <div className="flex items-center space-x-4 pt-4 border-t">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Link to="/cart" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
