
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminProducts from "@/components/admin/AdminProducts";
import AdminOrders from "@/components/admin/AdminOrders";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const loginSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

// In a real app, these would be stored securely and validated on a server
// This is just for demonstration purposes
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "password123";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    if (values.username === ADMIN_USERNAME && values.password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast.success("Login successful");
    } else {
      toast.error("Invalid username or password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter admin username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter admin password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-navy hover:bg-navy-dark"
                  >
                    Login
                  </Button>
                </div>
                
                <div className="text-center mt-4">
                  <Button 
                    variant="link" 
                    onClick={() => navigate("/")}
                    className="text-gray-600"
                  >
                    Back to Website
                  </Button>
                </div>
              </form>
            </Form>
            
            {/* For demo purposes only - Would be removed in production */}
            <div className="mt-8 p-4 bg-gray-50 rounded border border-gray-100 text-sm text-gray-600">
              <p className="font-medium text-gray-700">Demo Credentials:</p>
              <p>Username: {ADMIN_USERNAME}</p>
              <p>Password: {ADMIN_PASSWORD}</p>
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
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
              </TabsList>
              <Button 
                variant="outline" 
                onClick={() => setIsAuthenticated(false)}
                className="text-gray-600"
              >
                Logout
              </Button>
            </div>
            
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
