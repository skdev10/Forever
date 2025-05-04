
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Product, Order } from "@/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

// Mock data
const mockProducts: Product[] = [
  {
    id: "prod-1",
    name: "Premium Watch",
    description: "Luxury watch with premium materials",
    price: 2499,
    images: ["https://placehold.co/300x300?text=Watch"],
    category: "watches",
    inStock: true,
    featured: true
  },
  {
    id: "prod-2",
    name: "Silver Bracelet",
    description: "Elegant silver bracelet",
    price: 1999,
    images: ["https://placehold.co/300x300?text=Bracelet"],
    category: "bracelets",
    inStock: true,
    featured: false
  }
];

const mockOrders: Order[] = [
  {
    id: "ord-1",
    userId: "user-1",
    items: [
      {
        productId: "prod-1",
        quantity: 1,
        product: mockProducts[0]
      }
    ],
    status: "delivered",
    totalAmount: 2499,
    shippingAddress: {
      fullName: "John Doe",
      addressLine1: "123 Main St",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      country: "India",
      phone: "+91 98765 43210"
    },
    paymentMethod: "Card",
    createdAt: "2025-04-28",
    updatedAt: "2025-04-29"
  },
  {
    id: "ord-2",
    userId: "user-2",
    items: [
      {
        productId: "prod-2",
        quantity: 1,
        product: mockProducts[1]
      }
    ],
    status: "processing",
    totalAmount: 1999,
    shippingAddress: {
      fullName: "Jane Smith",
      addressLine1: "456 Park Ave",
      city: "Delhi",
      state: "Delhi",
      postalCode: "110001",
      country: "India",
      phone: "+91 98765 43211"
    },
    paymentMethod: "UPI",
    createdAt: "2025-05-01",
    updatedAt: "2025-05-01"
  }
];

const mockUsers: User[] = [
  {
    id: "user-1",
    name: "John Doe",
    email: "john@example.com",
    role: "user"
  },
  {
    id: "user-2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user"
  },
  {
    id: "admin-1",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin"
  }
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<"orders" | "products" | "users" | "settings">("orders");
  
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [users, setUsers] = useState<User[]>(mockUsers);
  
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    
    if (!storedUser) {
      navigate("/login");
      return;
    }
    
    try {
      const parsedUser = JSON.parse(storedUser) as User;
      if (parsedUser.role !== "admin") {
        toast({
          title: "Access denied",
          description: "You don't have permission to access this area",
          variant: "destructive"
        });
        navigate("/login");
        return;
      }
      setUser(parsedUser);
    } catch (error) {
      console.error("Error parsing user data", error);
      navigate("/login");
    }
  }, [navigate, toast]);

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsProductDialogOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      if (editingProduct.id) {
        // Update existing product
        setProducts(products.map(p => p.id === editingProduct.id ? editingProduct : p));
        toast({
          title: "Product updated",
          description: `${editingProduct.name} has been updated successfully.`
        });
      } else {
        // Add new product
        const newProduct = {
          ...editingProduct,
          id: `prod-${Math.floor(Math.random() * 1000)}`,
          inStock: true
        };
        setProducts([...products, newProduct]);
        toast({
          title: "Product added",
          description: `${newProduct.name} has been added successfully.`
        });
      }
      setIsProductDialogOpen(false);
      setEditingProduct(null);
    }
  };

  const handleDeleteProduct = (product: Product) => {
    if (window.confirm(`Are you sure you want to delete ${product.name}?`)) {
      setProducts(products.filter(p => p.id !== product.id));
      toast({
        title: "Product deleted",
        description: `${product.name} has been deleted successfully.`
      });
    }
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status, updatedAt: new Date().toISOString().split('T')[0] } : order
    ));
    toast({
      title: "Order status updated",
      description: `Order #${orderId} is now ${status}.`
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return (
          <div>
            <h2 className="text-xl font-medium mb-6">Manage Orders</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
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
                    <TableCell>{order.shippingAddress.fullName}</TableCell>
                    <TableCell>{order.createdAt}</TableCell>
                    <TableCell>
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value as Order['status'])}
                        className="border rounded px-2 py-1"
                      >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </TableCell>
                    <TableCell>₹{order.totalAmount.toFixed(2)}</TableCell>
                    <TableCell>
                      <button
                        className="text-gold hover:underline mr-2"
                        onClick={() => alert(`View details for order ${order.id}`)}
                      >
                        View
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );
      
      case "products":
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">Manage Products</h2>
              <button 
                className="btn-primary"
                onClick={() => {
                  setEditingProduct({
                    id: '',
                    name: '',
                    description: '',
                    price: 0,
                    images: [''],
                    category: '',
                    inStock: true,
                    featured: false
                  });
                  setIsProductDialogOpen(true);
                }}
              >
                Add New Product
              </button>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>In Stock</TableHead>
                  <TableHead>Featured</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>₹{product.price.toFixed(2)}</TableCell>
                    <TableCell>
                      {product.inStock ? (
                        <span className="text-green-600">Yes</span>
                      ) : (
                        <span className="text-red-600">No</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {product.featured ? (
                        <span className="text-green-600">Yes</span>
                      ) : (
                        <span>No</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <button
                        className="text-gold hover:underline mr-2"
                        onClick={() => handleEditProduct(product)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-600 hover:underline"
                        onClick={() => handleDeleteProduct(product)}
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <Dialog open={isProductDialogOpen} onOpenChange={setIsProductDialogOpen}>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>
                    {editingProduct && editingProduct.id ? 'Edit Product' : 'Add New Product'}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSaveProduct} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Product Name</label>
                    <Input
                      value={editingProduct?.name || ''}
                      onChange={(e) => setEditingProduct(prev => prev ? {...prev, name: e.target.value} : prev)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <Input
                      value={editingProduct?.description || ''}
                      onChange={(e) => setEditingProduct(prev => prev ? {...prev, description: e.target.value} : prev)}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Price</label>
                      <Input
                        type="number"
                        value={editingProduct?.price || 0}
                        onChange={(e) => setEditingProduct(prev => prev ? {...prev, price: Number(e.target.value)} : prev)}
                        min="0"
                        step="0.01"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Category</label>
                      <Input
                        value={editingProduct?.category || ''}
                        onChange={(e) => setEditingProduct(prev => prev ? {...prev, category: e.target.value} : prev)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Image URL</label>
                    <Input
                      value={editingProduct?.images[0] || ''}
                      onChange={(e) => setEditingProduct(prev => prev ? {...prev, images: [e.target.value]} : prev)}
                      required
                    />
                  </div>
                  
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={editingProduct?.inStock || false}
                        onChange={(e) => setEditingProduct(prev => prev ? {...prev, inStock: e.target.checked} : prev)}
                        className="mr-2"
                      />
                      In Stock
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={editingProduct?.featured || false}
                        onChange={(e) => setEditingProduct(prev => prev ? {...prev, featured: e.target.checked} : prev)}
                        className="mr-2"
                      />
                      Featured
                    </label>
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setIsProductDialogOpen(false)}
                      className="btn-secondary"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn-primary"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        );
        
      case "users":
        return (
          <div>
            <h2 className="text-xl font-medium mb-6">Manage Users</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <span className={`capitalize inline-block px-2 py-1 rounded text-xs font-medium ${
                        user.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
                      }`}>
                        {user.role}
                      </span>
                    </TableCell>
                    <TableCell>
                      <button
                        className="text-gold hover:underline mr-2"
                        onClick={() => alert(`Edit user ${user.name}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-600 hover:underline"
                        onClick={() => alert(`Delete user ${user.name}`)}
                        disabled={user.role === "admin"}
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );

      case "settings":
        return (
          <div>
            <h2 className="text-xl font-medium mb-6">Website Settings</h2>
            
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h3 className="text-lg font-medium mb-4">Homepage Settings</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Hero Title</label>
                <Input defaultValue="Shop Premium & Luxury Products" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Hero Description</label>
                <Input defaultValue="Discover our collection of premium watches, jewelry & more" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Hero Button Text</label>
                <Input defaultValue="Shop Now" />
              </div>
              
              <button className="btn-primary">Save Changes</button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-4">Store Settings</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Store Name</label>
                <Input defaultValue="Forever Buy" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Contact Email</label>
                <Input defaultValue="support@foreverbuy.in" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Contact Phone</label>
                <Input defaultValue="+91 98765 43210" />
              </div>
              
              <button className="btn-primary">Save Changes</button>
            </div>
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
      onTabChange={(tab) => setActiveTab(tab as "orders" | "products" | "users" | "settings")}
      tabs={[
        { id: "orders", label: "Orders" },
        { id: "products", label: "Products" },
        { id: "users", label: "Users" },
        { id: "settings", label: "Settings" },
      ]}
      renderContent={renderContent}
    />
  );
};

export default AdminDashboard;
