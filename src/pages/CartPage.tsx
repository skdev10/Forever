
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { CartItem, Product } from '../types';
import { useToast } from '@/hooks/use-toast';

// Mock products data
const products: Product[] = [
  {
    id: '1',
    name: 'Classic Leather Backpack',
    description: 'A versatile and stylish backpack made with premium leather.',
    price: 4999,
    salePrice: 3999,
    images: ['https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'backpacks',
    tags: ['leather', 'backpack', 'casual'],
    rating: 4.5,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Minimalist Wallet',
    description: 'Slim and functional wallet that fits perfectly in your pocket.',
    price: 1999,
    images: ['https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'wallets',
    tags: ['wallet', 'minimalist', 'leather'],
    rating: 4.8,
    inStock: true,
    featured: true
  }
];

// Mock cart items - in a real app, this would be stored in state management or localStorage
const initialCartItems: CartItem[] = [
  {
    productId: '1',
    quantity: 1,
    product: products[0]
  },
  {
    productId: '2',
    quantity: 2,
    product: products[1]
  }
];

const CartPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login');
      return;
    }
    
    setIsLoggedIn(true);
    // In a real app, fetch cart items from API or localStorage
    setCartItems(initialCartItems);
  }, [navigate]);

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.product.salePrice || item.product.price;
      return total + (price * item.quantity);
    }, 0);
  };

  // Fixed shipping cost
  const shippingCost = 99;
  
  // Calculate total
  const subtotal = calculateSubtotal();
  const total = subtotal + shippingCost;

  if (!isLoggedIn) {
    return <div className="min-h-screen flex items-center justify-center">Redirecting to login...</div>;
  }
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center py-16">
          <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cartItems.map((item) => {
                      const price = item.product.salePrice || item.product.price;
                      const totalPrice = price * item.quantity;
                      
                      return (
                        <tr key={item.productId}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded">
                                <img
                                  src={item.product.images[0]}
                                  alt={item.product.name}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className="ml-4">
                                <Link to={`/product/${item.productId}`} className="text-sm font-medium text-gray-900 hover:text-gold">
                                  {item.product.name}
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {item.product.salePrice ? (
                                <>
                                  <span>₹{item.product.salePrice}</span>
                                  <span className="ml-2 text-gray-500 line-through text-xs">₹{item.product.price}</span>
                                </>
                              ) : (
                                <span>₹{item.product.price}</span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <button 
                                onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                                className="border border-gray-300 px-2 py-1 text-sm"
                              >
                                -
                              </button>
                              <span className="border-t border-b border-gray-300 px-4 py-1 text-sm">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                className="border border-gray-300 px-2 py-1 text-sm"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ₹{totalPrice}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                            <button
                              onClick={() => removeItem(item.productId)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="h-5 w-5" />
                              <span className="sr-only">Remove</span>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">₹{shippingCost}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">₹{total}</span>
                  </div>
                </div>
                
                <button 
                  className="w-full mt-6 bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors"
                  onClick={() => navigate('/checkout')}
                >
                  Proceed to Checkout
                </button>
                
                <div className="mt-4 text-center">
                  <Link to="/categories" className="text-sm text-gold hover:underline">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
