
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AuthAlertProps {
  onClose: () => void;
  onLogin: () => void;
}

const AuthAlert = ({ onClose, onLogin }: AuthAlertProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-hide after 5 seconds
    const timer = setTimeout(() => {
      handleClose();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for animation to complete
  };
  
  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleClose}
    >
      <div 
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 transform transition-transform duration-300"
        style={{ 
          transform: isVisible ? 'translateY(0)' : 'translateY(-20px)' 
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the modal
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">Sign in Required</h3>
          <button 
            onClick={handleClose}
            className="text-gray-500 hover:text-black transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-600 mb-2">
            Please sign in to add items to your shopping cart.
          </p>
          <p className="text-gray-600">
            Don't have an account yet? Create one in just a few steps.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/login"
            className="btn-primary flex-1 text-center"
            onClick={onLogin}
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="btn-secondary flex-1 text-center"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthAlert;
