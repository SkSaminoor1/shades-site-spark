
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminProducts from "@/components/admin/AdminProducts";
import AdminOrders from "@/components/admin/AdminOrders";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  // For a real application, you would implement proper authentication here
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();
  
  // Simple admin authentication simulation
  // In a real app, you would use a proper auth system
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">Admin Access Required</h1>
            <p className="text-gray-600 mb-6 text-center">
              You need to be authenticated to access the admin panel.
            </p>
            <div className="flex justify-center">
              <Button 
                onClick={() => setIsAuthenticated(true)} 
                className="bg-navy hover:bg-navy-dark"
              >
                Login as Admin
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="mt-2 text-lg opacity-90">
            Manage your products and orders
          </p>
        </div>
      </div>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs defaultValue="products">
            <TabsList className="mb-8">
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
            </TabsList>
            <TabsContent value="products">
              <AdminProducts />
            </TabsContent>
            <TabsContent value="orders">
              <AdminOrders />
            </TabsContent>
          </Tabs>
          
          <div className="mt-8">
            <Button 
              variant="outline" 
              onClick={() => navigate("/")}
              className="text-gray-600"
            >
              Back to Website
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
