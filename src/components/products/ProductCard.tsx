
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../../types';
import { useToast } from '@/hooks/use-toast';
import Swal from 'sweetalert2';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
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
      description: `${product.name} has been added to your cart`,
    });
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
          {product.salePrice && (
            <span className="absolute top-2 left-2 bg-gold px-2 py-1 text-xs font-semibold text-black">
              SALE
            </span>
          )}
        </div>
        
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <div className="flex items-center mt-1">
            {product.salePrice ? (
              <>
                <p className="text-sm font-medium text-gray-900 mr-2">₹{product.salePrice}</p>
                <p className="text-sm font-medium text-gray-500 line-through">₹{product.price}</p>
              </>
            ) : (
              <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
            )}
          </div>
        </div>
      </Link>
      
      {/* Quick actions - Now outside the Link component to prevent nesting issues */}
      <div 
        className={`absolute bottom-12 left-0 right-0 flex justify-center space-x-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={handleAddToCart}
          className="bg-white text-black p-2 rounded-full shadow hover:bg-black hover:text-white transition-colors"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Add to cart</span>
        </button>
        <button
          onClick={handleQuickView}
          className="bg-white text-black p-2 rounded-full shadow hover:bg-black hover:text-white transition-colors"
        >
          <Eye className="h-5 w-5" />
          <span className="sr-only">Quick view</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
