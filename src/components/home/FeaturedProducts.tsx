
import { Product } from '../../types';
import ProductCard from '../products/ProductCard';

// Sample data - in a real app this would come from an API or database
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
  },
  {
    id: '3',
    name: 'Designer Tote Bag',
    description: 'Elegant tote bag perfect for work or casual outings.',
    price: 5999,
    images: ['https://images.unsplash.com/photo-1598532213005-067bc5255327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
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
    images: ['https://images.unsplash.com/photo-1587038782461-b55c7c238d94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
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
    category: 'bags',
    tags: ['travel', 'duffel', 'weekend'],
    rating: 4.7,
    inStock: true,
    featured: true
  },
  {
    id: '6',
    name: 'Messenger Bag',
    description: 'Stylish and practical messenger bag for everyday use.',
    price: 3999,
    images: ['https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'bags',
    tags: ['messenger', 'casual', 'everyday'],
    rating: 4.6,
    inStock: true,
    featured: true
  },
  {
    id: '7',
    name: 'Leather Belt',
    description: 'High-quality leather belt with a classic buckle.',
    price: 1499,
    images: ['https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'accessories',
    tags: ['belt', 'leather', 'formal'],
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: '8',
    name: 'Laptop Sleeve',
    description: 'Protective and stylish sleeve for your laptop.',
    price: 2499,
    salePrice: 1999,
    images: ['https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'accessories',
    tags: ['laptop', 'tech', 'protection'],
    rating: 4.5,
    inStock: true,
    featured: true
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products, each crafted with exceptional quality and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
