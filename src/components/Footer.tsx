
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Sun } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Sun className="h-8 w-8 text-gold" />
              <span className="ml-2 text-xl font-bold">VisionVogue</span>
            </div>
            <p className="text-gray-300 mb-4">
              Premium eyewear for every style and occasion. Quality sunglasses and spectacles at affordable prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-gold">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=sunglasses" className="text-gray-300 hover:text-gold">Sunglasses</Link>
              </li>
              <li>
                <Link to="/products?category=spectacles" className="text-gray-300 hover:text-gold">Spectacles</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-2 mt-0.5" />
                <span className="text-gray-300">123 Eyewear St, Fashion City</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-2" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-2" />
                <span className="text-gray-300">info@visionvogue.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} VisionVogue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
