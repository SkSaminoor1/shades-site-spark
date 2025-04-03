
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-navy to-navy-light text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              See the World in <span className="text-gold">Style</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Discover our exclusive collection of premium eyewear that combines fashion, comfort, and eye protection.
            </p>
            <div className="space-x-4 pt-4">
              <Link to="/products?category=sunglasses">
                <Button className="bg-gold text-navy hover:bg-gold-light">Shop Sunglasses</Button>
              </Link>
              <Link to="/products?category=spectacles">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">Shop Spectacles</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gold/20 rounded-full blur-3xl"></div>
              <img
                src="/placeholder.svg"
                alt="Stylish Sunglasses"
                className="relative z-10 w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
