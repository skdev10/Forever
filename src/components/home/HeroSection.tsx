
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50">
      {/* Main Hero Section */}
      <div className="container-custom py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Premium Quality Accessories</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
              Handcrafted with premium materials for the modern individual. Elevate your style with our exclusive collection.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link to="/shop" className="btn-primary">
                Shop Now
              </Link>
              <Link to="/categories" className="btn-secondary">
                Browse Collections
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://foreverbuy.in/assets/hero_img-DOCOb6wn.png"
              alt="Premium Leather Bag"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-md rounded-lg hidden md:block">
              <p className="text-sm font-medium">New Collection</p>
              <p className="text-gold font-bold">25% OFF</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories Banner */}
      <div className="bg-black text-white py-16 mt-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Luxury Collection</h2>
              <p className="text-gray-300 mb-6">
                Discover our exclusive luxury collection featuring handcrafted items made with the finest materials.
              </p>
              <Link to="/category/watches" className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition-colors inline-block">
                Explore Now
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                  alt="Luxury Watch"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                  alt="Diamond Jewelry" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offer Banner */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-gold text-black rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">Special Sale</h2>
                <p className="text-black/80 mb-6 text-lg">
                  Up to 50% off on selected items. Limited time offer.
                </p>
                <Link to="/shop" className="bg-black text-white px-6 py-3 inline-block font-medium hover:bg-gray-900 transition-colors max-w-fit">
                  Shop the Sale
                </Link>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://cdn.pixabay.com/photo/2024/03/26/11/57/woman-8656653_1280.jpg"
                  alt="Special Offer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-5 right-5 bg-white text-black rounded-full h-20 w-20 flex items-center justify-center text-center font-bold">
                  <div>
                    <div className="text-lg leading-none">50%</div>
                    <div className="text-sm">OFF</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
