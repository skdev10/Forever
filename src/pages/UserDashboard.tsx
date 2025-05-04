
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "@/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DashboardLayout from "@/components/layout/DashboardLayout";

interface Order {
  id: string;
  date: string;
  status: "pending" | "processing" | "shipped" | "delivered";
  total: number;
  items: { name: string; quantity: number; price: number }[];
}

const UserDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<"orders" | "profile" | "address">("orders");
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    
    if (!storedUser) {
      navigate("/login");
      return;
    }
    
    try {
      const parsedUser = JSON.parse(storedUser) as User;
      if (parsedUser.role === "admin") {
        navigate("/admin");
        return;
      }
      setUser(parsedUser);
      
      // Mock orders data
      setOrders([
        {
          id: "ORD-001",
          date: "2025-04-28",
          status: "delivered",
          total: 2499,
          items: [
            { name: "Premium Watch", quantity: 1, price: 2499 }
          ]
        },
        {
          id: "ORD-002",
          date: "2025-05-01",
          status: "processing",
          total: 3999,
          items: [
            { name: "Silver Bracelet", quantity: 1, price: 1999 },
            { name: "Gold Earrings", quantity: 1, price: 2000 }
          ]
        }
      ]);
    } catch (error) {
      console.error("Error parsing user data", error);
      navigate("/login");
    }
  }, [navigate]);

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return (
          <div>
            {selectedOrder ? (
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium">Order #{selectedOrder.id}</h2>
                  <button 
                    className="text-gold hover:underline"
                    onClick={() => setSelectedOrder(null)}
                  >
                    Back to Orders
                  </button>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-600">
                    <strong>Date:</strong> {selectedOrder.date}
                  </p>
                  <p className="text-gray-600">
                    <strong>Status:</strong>{" "}
                    <span className={`font-medium ${
                      selectedOrder.status === "delivered" ? "text-green-600" : 
                      selectedOrder.status === "shipped" ? "text-blue-600" : 
                      selectedOrder.status === "processing" ? "text-orange-600" : 
                      "text-gray-600"
                    }`}>
                      {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                    </span>
                  </p>
                  <p className="text-gray-600">
                    <strong>Total:</strong> ₹{selectedOrder.total.toFixed(2)}
                  </p>
                </div>
                
                <h3 className="text-lg font-medium mb-3">Items</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedOrder.items.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>₹{item.price.toFixed(2)}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>₹{(item.price * item.quantity).toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-medium mb-6">My Orders</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                            order.status === "delivered" ? "bg-green-100 text-green-800" : 
                            order.status === "shipped" ? "bg-blue-100 text-blue-800" : 
                            order.status === "processing" ? "bg-yellow-100 text-yellow-800" : 
                            "bg-gray-100 text-gray-800"
                          }`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell>₹{order.total.toFixed(2)}</TableCell>
                        <TableCell>
                          <button
                            onClick={() => handleOrderClick(order)}
                            className="text-gold hover:underline"
                          >
                            View Details
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        );
      
      case "profile":
        return (
          <div>
            <h2 className="text-xl font-medium mb-6">My Profile</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input 
                    type="text" 
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                    value={user?.name || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                    value={user?.email || ""}
                    readOnly
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <button className="btn-primary">Update Profile</button>
              </div>
            </div>
          </div>
        );
        
      case "address":
        return (
          <div>
            <h2 className="text-xl font-medium mb-6">My Addresses</h2>
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Home Address</h3>
                <div className="flex space-x-2">
                  <button className="text-gold hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </div>
              </div>
              <p className="text-gray-600">John Doe</p>
              <p className="text-gray-600">123 Main St, Apt 4B</p>
              <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
              <p className="text-gray-600">India</p>
              <p className="text-gray-600">Phone: +91 98765 43210</p>
            </div>
            
            <button className="btn-secondary">
              Add New Address
            </button>
          </div>
        );
    
      default:
        return null;
    }
  };

  if (!user) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <DashboardLayout 
      user={user}
      activeTab={activeTab}
      onTabChange={(tab) => setActiveTab(tab as "orders" | "profile" | "address")}
      tabs={[
        { id: "orders", label: "My Orders" },
        { id: "profile", label: "My Profile" },
        { id: "address", label: "My Addresses" },
      ]}
      renderContent={renderContent}
    />
  );
};

export default UserDashboard;
