
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, Search, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Shop', link: '/shop' },
    { name: 'Categories', link: '/categories' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center px-4">
          <div className="w-full max-w-3xl">
            <div className="flex items-center border-b border-gray-300">
              <Search className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search for products"
                className="flex-grow px-4 py-3 outline-none text-lg"
                autoFocus
              />
              <button onClick={toggleSearch}>
                <X className="h-6 w-6 text-gray-700 hover:text-black" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 relative">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="p-1">
              <Menu className="h-6 w-6" />
            </button>
          </div>
          
          {/* Logo */}
          <div className="flex-1 lg:flex-grow-0 text-center lg:text-left">
            <Link to="/" className="text-2xl font-bold">FOREVERBUY</Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.link} 
                className="text-sm font-medium hover:text-gold transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleSearch} className="p-1">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/account" className="p-1">
              <User className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="p-1 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gold text-xs w-4 h-4 rounded-full flex items-center justify-center text-white">0</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md z-40 animate-fadeIn">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.link} 
                  className="text-sm font-medium py-2 hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
