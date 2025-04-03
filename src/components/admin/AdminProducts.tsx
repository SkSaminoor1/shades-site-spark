
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { products, Product } from "@/lib/data";
import { Plus, Edit, Trash2 } from "lucide-react";
import ProductForm from "./ProductForm";

const AdminProducts = () => {
  const [showForm, setShowForm] = useState(false);
  const [productsList, setProductsList] = useState<Product[]>(products);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleAddProduct = (product: Product) => {
    // Generate a new ID for the product
    const newProduct = { ...product, id: Date.now().toString() };
    setProductsList([...productsList, newProduct]);
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleEditProduct = (product: Product) => {
    setProductsList(productsList.map(p => p.id === product.id ? product : p));
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id: string) => {
    setProductsList(productsList.filter(p => p.id !== id));
  };

  const startEditProduct = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Products Management</h2>
        <Button 
          onClick={() => {
            setEditingProduct(null);
            setShowForm(true);
          }}
          className="bg-navy hover:bg-navy-dark gap-2"
        >
          <Plus className="h-4 w-4" />
          Add New Product
        </Button>
      </div>

      {showForm ? (
        <ProductForm 
          onSave={editingProduct ? handleEditProduct : handleAddProduct}
          onCancel={() => {
            setShowForm(false);
            setEditingProduct(null);
          }}
          initialProduct={editingProduct || undefined}
        />
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productsList.length > 0 ? (
                productsList.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => startEditProduct(product)}
                          className="h-8 w-8 p-0"
                        >
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleDeleteProduct(product.id)}
                          className="h-8 w-8 p-0 text-red-500 border-red-200 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10 text-gray-500">
                    No products found. Add your first product!
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </Card>
  );
};

export default AdminProducts;
