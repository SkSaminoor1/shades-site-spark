
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, ShoppingCart } from "lucide-react";

// Define Order type
interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  customerName: string;
  email: string;
  date: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  total: number;
  items: OrderItem[];
}

// Sample orders data
const sampleOrders: Order[] = [
  {
    id: "ORD-001",
    customerName: "John Smith",
    email: "john@example.com",
    date: "2025-03-30",
    status: "pending",
    total: 149.98,
    items: [
      { productId: "1", name: "Aviator Classic", price: 79.99, quantity: 1 },
      { productId: "5", name: "Cat Eye", price: 119.99, quantity: 1 }
    ]
  },
  {
    id: "ORD-002",
    customerName: "Sarah Jones",
    email: "sarah@example.com",
    date: "2025-03-28",
    status: "processing",
    total: 89.99,
    items: [
      { productId: "2", name: "Wayfarer Style", price: 89.99, quantity: 1 }
    ]
  },
  {
    id: "ORD-003",
    customerName: "Michael Brown",
    email: "michael@example.com",
    date: "2025-03-25",
    status: "completed",
    total: 209.97,
    items: [
      { productId: "3", name: "Round Metal", price: 69.99, quantity: 3 }
    ]
  }
];

const AdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>(sampleOrders);
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const getStatusBadgeColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status } : order
    ));
  };

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Orders Management</h2>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <>
                  <TableRow key={order.id} className="cursor-pointer" onClick={() => toggleOrderDetails(order.id)}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      {order.customerName}
                      <div className="text-xs text-gray-500">{order.email}</div>
                    </TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>${order.total.toFixed(2)}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {order.status !== 'completed' && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              updateOrderStatus(order.id, 'completed');
                            }}
                            className="h-8 w-8 p-0 text-green-500 border-green-200 hover:bg-green-50"
                          >
                            <Check className="h-4 w-4" />
                            <span className="sr-only">Complete</span>
                          </Button>
                        )}
                        {order.status !== 'cancelled' && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              updateOrderStatus(order.id, 'cancelled');
                            }}
                            className="h-8 w-8 p-0 text-red-500 border-red-200 hover:bg-red-50"
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Cancel</span>
                          </Button>
                        )}
                        {order.status === 'pending' && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              updateOrderStatus(order.id, 'processing');
                            }}
                            className="h-8 p-2 text-blue-500 border-blue-200 hover:bg-blue-50"
                          >
                            Process
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                  {expandedOrder === order.id && (
                    <TableRow>
                      <TableCell colSpan={6} className="p-0">
                        <div className="bg-gray-50 p-4">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <ShoppingCart className="h-4 w-4" /> 
                            Order Items
                          </h4>
                          <div className="overflow-x-auto">
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Product</TableHead>
                                  <TableHead>Price</TableHead>
                                  <TableHead>Quantity</TableHead>
                                  <TableHead>Subtotal</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {order.items.map((item, index) => (
                                  <TableRow key={index}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>${item.price.toFixed(2)}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
                                  </TableRow>
                                ))}
                                <TableRow>
                                  <TableCell colSpan={3} className="text-right font-bold">
                                    Total:
                                  </TableCell>
                                  <TableCell className="font-bold">
                                    ${order.total.toFixed(2)}
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-gray-500">
                  No orders found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default AdminOrders;
