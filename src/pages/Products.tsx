
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products, Product } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeFilter, setActiveFilter] = useState<string | null>(categoryParam);

  useEffect(() => {
    if (categoryParam) {
      setActiveFilter(categoryParam);
      setFilteredProducts(products.filter(product => product.category === categoryParam));
    } else {
      setActiveFilter(null);
      setFilteredProducts(products);
    }
  }, [categoryParam]);

  const handleFilterChange = (category: string | null) => {
    setActiveFilter(category);
    if (category) {
      setFilteredProducts(products.filter(product => product.category === category));
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Our Collection</h1>
          <p className="mt-2 text-lg opacity-90">
            Discover eyewear that combines style, quality, and comfort
          </p>
        </div>
      </div>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              variant={!activeFilter ? "default" : "outline"}
              onClick={() => handleFilterChange(null)}
              className={!activeFilter ? "bg-navy" : ""}
            >
              All Products
            </Button>
            <Button
              variant={activeFilter === "sunglasses" ? "default" : "outline"}
              onClick={() => handleFilterChange("sunglasses")}
              className={activeFilter === "sunglasses" ? "bg-navy" : ""}
            >
              Sunglasses
            </Button>
            <Button
              variant={activeFilter === "spectacles" ? "default" : "outline"}
              onClick={() => handleFilterChange("spectacles")}
              className={activeFilter === "spectacles" ? "bg-navy" : ""}
            >
              Spectacles
            </Button>
            
            {activeFilter && (
              <Button
                variant="ghost"
                className="gap-1 text-sm"
                onClick={() => handleFilterChange(null)}
              >
                Clear filter
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No products found.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
