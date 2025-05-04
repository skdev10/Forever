import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, ArrowLeft, Star } from 'lucide-react';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Product } from '../types';
import { useToast } from '@/hooks/use-toast';
import Swal from 'sweetalert2';

// Mock data for products - same as in CategoryPage
const products: Product[] = [
  {
    id: '1',
    name: 'Classic Leather Backpack',
    description: 'A versatile and stylish backpack made with premium leather. Perfect for daily use, this backpack features multiple compartments for organized storage, padded straps for comfort, and durable construction that will last for years. The elegant design makes it suitable for both casual and professional settings.',
    price: 4999,
    salePrice: 3999,
    images: [
      'https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1622560480605-2684d6df9eb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'backpacks',
    tags: ['leather', 'backpack', 'casual'],
    rating: 4.5,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Minimalist Wallet',
    description: 'Slim and functional wallet that fits perfectly in your pocket. Made with genuine leather, this minimalist wallet holds all your essential cards and cash without the bulk. Its sleek design and premium construction make it a perfect accessory for the modern individual.',
    price: 1999,
    images: ['https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'wallets',
    tags: ['wallet', 'minimalist', 'leather'],
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Designer Tote Bag',
    description: 'Elegant tote bag perfect for work or casual outings.',
    price: 5999,
    images: ['https://plus.unsplash.com/premium_photo-1672829371769-bcff266023a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D'],
    category: 'handbags',
    tags: ['tote', 'work', 'elegant'],
    rating: 4.3,
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Premium Card Holder',
    description: 'Sleek card holder with multiple compartments.',
    price: 1299,
    images: ['https://i.pinimg.com/736x/ca/78/0a/ca780a000b612dba309f2fd561dd364a.jpg'],
    category: 'accessories',
    tags: ['card holder', 'business'],
    rating: 4.9,
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Travel Duffel Bag',
    description: 'Spacious duffel bag perfect for weekend getaways.',
    price: 6999,
    salePrice: 5999,
    images: ['https://images.unsplash.com/photo-1565619632666-377a281965fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'travel-bags',
    tags: ['travel', 'duffel', 'weekend'],
    rating: 4.7,
    inStock: true,
    featured: true
  },
  {
    id: '6',
    name: 'Luxury Watch',
    description: 'Elegant timepiece with premium craftsmanship.',
    price: 14999,
    images: ['https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'watches',
    tags: ['watch', 'luxury', 'accessory'],
    rating: 4.9,
    inStock: true,
    featured: true
  },
  {
    id: '7',
    name: 'Diamond Earrings',
    description: 'Stunning diamond earrings for special occasions.',
    price: 24999,
    images: ['https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'jewelry',
    tags: ['earrings', 'diamond', 'luxury'],
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: '8',
    name: 'Leather Belt',
    description: 'Premium leather belt with elegant buckle.',
    price: 2499,
    images: ['https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'belts',
    tags: ['belt', 'leather', 'accessory'],
    rating: 4.7,
    inStock: true,
    featured: false
  }
];

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    // Find the product with the matching id
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.images[0]);
    }
    
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, [id]);

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      Swal.fire({
        title: 'Sign in Required',
        text: 'Please sign in to add items to your shopping cart.',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#000000',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sign In Now',
        cancelButtonText: 'Continue Shopping'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
      return;
    }
    
    // Add to cart logic would go here for logged in users
    toast({
      title: "Added to cart",
      description: product ? `${product.name} has been added to your cart` : "Product added to cart",
    });
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">The product you're looking for doesn't exist.</p>
            <button 
              onClick={() => navigate('/')}
              className="btn-primary"
            >
              Return to Home
            </button>
          </div>
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
          {/* Breadcrumb */}
          <div className="mb-6">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-black"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
                <img 
                  src={selectedImage} 
                  alt={product.name} 
                  className="w-full h-full object-contain object-center"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button 
                      key={index}
                      className={`aspect-square rounded border-2 overflow-hidden ${
                        selectedImage === image ? 'border-black' : 'border-transparent'
                      }`}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              {/* Price */}
              <div className="flex items-center mb-4">
                {product.salePrice ? (
                  <>
                    <p className="text-2xl font-medium mr-3">₹{product.salePrice}</p>
                    <p className="text-lg text-gray-500 line-through">₹{product.price}</p>
                    <span className="ml-3 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                      {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
                    </span>
                  </>
                ) : (
                  <p className="text-2xl font-medium">₹{product.price}</p>
                )}
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4"
                      fill={i < Math.floor(product.rating || 0) ? "currentColor" : "none"}
                      strokeWidth={i < Math.floor(product.rating || 0) ? 0 : 2}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">{product.rating} out of 5</span>
              </div>
              
              {/* Description */}
              <p className="text-gray-700 mb-8">{product.description}</p>
              
              {/* Quantity Selection */}
              <div className="mb-6">
                <p className="font-medium mb-2">Quantity</p>
                <div className="flex items-center">
                  <button 
                    onClick={decreaseQuantity}
                    className="border border-gray-300 px-3 py-1"
                  >
                    -
                  </button>
                  <span className="border-t border-b border-gray-300 px-4 py-1">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="border border-gray-300 px-3 py-1"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-black text-white py-3 flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
                
                <div className="flex space-x-3">
                  <button className="flex-1 border border-gray-300 py-3 flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <Heart className="h-5 w-5 mr-2" />
                    Wishlist
                  </button>
                  <button className="flex-1 border border-gray-300 py-3 flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <Share2 className="h-5 w-5 mr-2" />
                    Share
                  </button>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="mt-8 border-t pt-6">
                <h3 className="font-semibold mb-3">Product Details</h3>
                <ul className="space-y-1 text-gray-700">
                  <li><span className="font-medium">Category:</span> {product.category}</li>
                  {product.tags && (
                    <li><span className="font-medium">Tags:</span> {product.tags.join(', ')}</li>
                  )}
                  <li><span className="font-medium">Availability:</span> {product.inStock ? 'In Stock' : 'Out of Stock'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
