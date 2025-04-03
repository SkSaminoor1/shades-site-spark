
import { useState } from "react";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Check, X } from "lucide-react";

interface ProductFormProps {
  initialProduct?: Product;
  onSave: (product: Product) => void;
  onCancel: () => void;
}

const ProductForm = ({ initialProduct, onSave, onCancel }: ProductFormProps) => {
  const [product, setProduct] = useState<Product>(
    initialProduct || {
      id: "",
      name: "",
      category: "sunglasses",
      price: 0,
      image: "/placeholder.svg",
      description: "",
      features: [""],
      inStock: true
    }
  );

  const [featureText, setFeatureText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: name === "price" ? parseFloat(value) : value });
  };

  const toggleInStock = (checked: boolean) => {
    setProduct({ ...product, inStock: checked });
  };

  const addFeature = () => {
    if (featureText.trim()) {
      setProduct({
        ...product,
        features: [...product.features, featureText.trim()]
      });
      setFeatureText("");
    }
  };

  const removeFeature = (index: number) => {
    setProduct({
      ...product,
      features: product.features.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate product data
    if (!product.name || !product.description || product.price <= 0) {
      return;
    }
    
    // Remove empty features
    const cleanProduct = {
      ...product,
      features: product.features.filter(f => f.trim() !== "")
    };
    
    onSave(cleanProduct);
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-6">
        {initialProduct ? "Edit Product" : "Add New Product"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              placeholder="Product name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <select
              id="category"
              name="category"
              value={product.category}
              onChange={handleInputChange}
              className="w-full h-10 px-3 py-2 text-base rounded-md border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm"
            >
              <option value="sunglasses">Sunglasses</option>
              <option value="spectacles">Spectacles</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="price">Price ($)</Label>
            <Input
              id="price"
              name="price"
              type="number"
              min="0"
              step="0.01"
              value={product.price}
              onChange={handleInputChange}
              placeholder="0.00"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              name="image"
              value={product.image}
              onChange={handleInputChange}
              placeholder="URL or path to image"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            placeholder="Product description..."
            rows={3}
            required
          />
        </div>
        
        <div className="space-y-4">
          <Label>Features</Label>
          <div className="space-y-2">
            {product.features.map((feature, index) => (
              feature.trim() && (
                <div key={index} className="flex items-center space-x-2">
                  <Input
                    value={feature}
                    onChange={(e) => {
                      const updatedFeatures = [...product.features];
                      updatedFeatures[index] = e.target.value;
                      setProduct({ ...product, features: updatedFeatures });
                    }}
                    className="flex-grow"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeFeature(index)}
                    className="h-8 w-8 p-0 text-red-500 border-red-200 hover:bg-red-50"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              )
            ))}
            <div className="flex items-center space-x-2">
              <Input
                value={featureText}
                onChange={(e) => setFeatureText(e.target.value)}
                placeholder="Add a new feature..."
                className="flex-grow"
              />
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={addFeature}
                className="h-8 w-8 p-0 text-green-500 border-green-200 hover:bg-green-50"
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Label htmlFor="in-stock">In Stock</Label>
          <Switch
            id="in-stock"
            checked={product.inStock}
            onCheckedChange={toggleInStock}
          />
        </div>
        
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" className="bg-navy hover:bg-navy-dark">
            {initialProduct ? "Update Product" : "Add Product"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ProductForm;
