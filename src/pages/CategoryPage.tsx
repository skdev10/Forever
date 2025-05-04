import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from '../components/products/ProductCard';
import { Product, Category } from '../types';

// Extended categories data matching the Categories page
const categories: Category[] = [
  {
    id: '1',
    name: 'Backpacks',
    image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    slug: 'backpacks'
  },
  {
    id: '2',
    name: 'Wallets',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    slug: 'wallets'
  },
  {
    id: '3',
    name: 'Handbags',
    image: 'https://images.unsplash.com/photo-1598532213005-067bc5255327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    slug: 'handbags'
  },
  {
    id: '4',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1611923134239-b9be5816e23c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    slug: 'accessories'
  },
  {
    id: '5',
    name: 'Watches',
    image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    slug: 'watches'
  },
  {
    id: '6',
    name: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    slug: 'jewelry'
  },
  {
    id: '7',
    name: 'Travel Bags',
    image: 'https://images.unsplash.com/photo-1565619632666-377a281965fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    slug: 'travel-bags'
  },
  {
    id: '8',
    name: 'Belts',
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    slug: 'belts'
  }
];

// Extended products with at least 10 per category
const allProducts: Product[] = [
  // Backpacks (10 products)
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
    id: '101',
    name: 'Urban Explorer Backpack',
    description: 'Perfect for city adventures with multiple compartments.',
    price: 3499,
    images: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'backpacks',
    tags: ['urban', 'travel', 'casual'],
    rating: 4.3,
    inStock: true,
    featured: false
  },
  {
    id: '102',
    name: 'Waterproof Hiking Backpack',
    description: 'Durable waterproof backpack for outdoor adventures.',
    price: 5999,
    salePrice: 4999,
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'backpacks',
    tags: ['hiking', 'outdoor', 'waterproof'],
    rating: 4.7,
    inStock: true,
    featured: true
  },
  {
    id: '103',
    name: 'Minimalist Canvas Backpack',
    description: 'Lightweight canvas backpack with simple elegant design.',
    price: 2999,
    images: ['https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'backpacks',
    tags: ['canvas', 'minimalist', 'casual'],
    rating: 4.2,
    inStock: true,
    featured: false
  },
  {
    id: '104',
    name: 'Anti-theft Laptop Backpack',
    description: 'Secure backpack with anti-theft features for your laptop.',
    price: 4499,
    images: ['https://images.unsplash.com/photo-1578237957425-89e18249f5f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'backpacks',
    tags: ['laptop', 'anti-theft', 'business'],
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: '105',
    name: 'Vintage School Backpack',
    description: 'Classic school design with modern functionality.',
    price: 2499,
    salePrice: 1999,
    images: ['https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'backpacks',
    tags: ['vintage', 'school', 'casual'],
    rating: 4.0,
    inStock: true,
    featured: false
  },
  {
    id: '106',
    name: 'Gym Sport Backpack',
    description: 'Spacious backpack designed for gym and sports equipment.',
    price: 3299,
    images: ['https://images.unsplash.com/photo-1662019669237-5873774e8058?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'backpacks',
    tags: ['sports', 'gym', 'functional'],
    rating: 4.4,
    inStock: true,
    featured: false
  },
  {
    id: '107',
    name: 'Kids Cartoon Backpack',
    description: 'Fun and colorful backpack for children with cartoon designs.',
    price: 1999,
    images: ['https://images.unsplash.com/photo-1617713244418-0289bfe2f4ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'backpacks',
    tags: ['kids', 'cartoon', 'colorful'],
    rating: 4.6,
    inStock: true,
    featured: false
  },
  {
    id: '108',
    name: 'Premium Leather Rucksack',
    description: 'Handcrafted premium leather rucksack with vintage appeal.',
    price: 7999,
    salePrice: 6999,
    images: ['https://images.unsplash.com/photo-1559321484-f4c1355ec49b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'backpacks',
    tags: ['premium', 'leather', 'rucksack'],
    rating: 4.9,
    inStock: true,
    featured: true
  },
  {
    id: '109',
    name: 'Tech Organizer Backpack',
    description: 'Modern backpack with dedicated compartments for all your tech.',
    price: 5499,
    images: ['https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'backpacks',
    tags: ['tech', 'organizer', 'modern'],
    rating: 4.7,
    inStock: true,
    featured: false
  },
  
  // Wallets (10 products)
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
    id: '201',
    name: 'Bifold Leather Wallet',
    description: 'Classic bifold design with premium leather.',
    price: 2499,
    images: ['https://images.unsplash.com/photo-1611689102192-1f6e0e52df0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'wallets',
    tags: ['bifold', 'leather', 'classic'],
    rating: 4.5,
    inStock: true,
    featured: false
  },
  {
    id: '202',
    name: 'RFID Blocking Wallet',
    description: 'Secure wallet with RFID blocking technology.',
    price: 2799,
    salePrice: 2299,
    images: ['https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'wallets',
    tags: ['rfid', 'secure', 'modern'],
    rating: 4.7,
    inStock: true,
    featured: true
  },
  {
    id: '203',
    name: 'Zip Around Wallet',
    description: 'Wallet with zipper closure for maximum security.',
    price: 1899,
    images: ['https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'wallets',
    tags: ['zipper', 'wallet', 'secure'],
    rating: 4.3,
    inStock: true,
    featured: false
  },
  {
    id: '204',
    name: 'Carbon Fiber Wallet',
    description: 'Ultralight and sleek wallet made of carbon fiber.',
    price: 3299,
    images: ['https://images.unsplash.com/photo-1606503825008-909a67e63c3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'wallets',
    tags: ['carbon fiber', 'ultralight', 'modern'],
    rating: 4.9,
    inStock: true,
    featured: true
  },
  {
    id: '205',
    name: 'Vintage Coin Purse',
    description: 'Traditional coin purse with vintage design.',
    price: 1299,
    salePrice: 999,
    images: ['https://images.unsplash.com/photo-1606503903477-2c0041c1dbdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'wallets',
    tags: ['coin', 'vintage', 'purse'],
    rating: 4.1,
    inStock: true,
    featured: false
  },
  {
    id: '206',
    name: 'Long Wallet Clutch',
    description: 'Elegant long wallet that doubles as a clutch.',
    price: 2699,
    images: ['https://images.unsplash.com/photo-1584870858951-a92232d31c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'wallets',
    tags: ['long wallet', 'clutch', 'elegant'],
    rating: 4.5,
    inStock: true,
    featured: false
  },
  {
    id: '207',
    name: 'Phone Wallet Case',
    description: 'Wallet case that holds your phone and cards.',
    price: 1799,
    images: ['https://images.unsplash.com/photo-1604075953449-0cce53a30ff3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'wallets',
    tags: ['phone', 'case', 'functional'],
    rating: 4.4,
    inStock: true,
    featured: false
  },
  {
    id: '208',
    name: 'Money Clip Wallet',
    description: 'Slim wallet with integrated money clip.',
    price: 1499,
    images: ['https://images.unsplash.com/photo-1567016506335-04503da5dd7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'wallets',
    tags: ['money clip', 'slim', 'minimal'],
    rating: 4.6,
    inStock: true,
    featured: false
  },
  {
    id: '209',
    name: 'Handcrafted Leather Wallet',
    description: 'Artisan handcrafted wallet made from full-grain leather.',
    price: 4999,
    salePrice: 3999,
    images: ['https://images.unsplash.com/photo-1543286386-713b493ce211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'wallets',
    tags: ['handcrafted', 'artisan', 'premium'],
    rating: 4.9,
    inStock: true,
    featured: true
  },
  
  // Handbags (10 products)
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
    id: '301',
    name: 'Luxury Crossbody Bag',
    description: 'Stylish crossbody bag with chain strap.',
    price: 6499,
    images: ['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'handbags',
    tags: ['crossbody', 'luxury', 'chain'],
    rating: 4.7,
    inStock: true,
    featured: true
  },
  {
    id: '302',
    name: 'Mini Shoulder Bag',
    description: 'Compact shoulder bag for essentials only.',
    price: 3999,
    salePrice: 2999,
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'handbags',
    tags: ['mini', 'shoulder', 'compact'],
    rating: 4.4,
    inStock: true,
    featured: false
  },
  {
    id: '303',
    name: 'Structured Satchel',
    description: 'Classic structured satchel with top handles.',
    price: 7999,
    images: ['https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'handbags',
    tags: ['satchel', 'structured', 'classic'],
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: '304',
    name: 'Bucket Bag',
    description: 'Trendy bucket bag with drawstring closure.',
    price: 4999,
    images: ['https://images.unsplash.com/photo-1596149615493-f0739de31c2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'handbags',
    tags: ['bucket', 'trendy', 'drawstring'],
    rating: 4.2,
    inStock: true,
    featured: false
  },
  {
    id: '305',
    name: 'Quilted Chain Bag',
    description: 'Elegant quilted bag with chain strap.',
    price: 8999,
    salePrice: 7499,
    images: ['https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'handbags',
    tags: ['quilted', 'chain', 'elegant'],
    rating: 4.9,
    inStock: true,
    featured: true
  },
  {
    id: '306',
    name: 'Canvas Tote',
    description: 'Casual canvas tote for everyday use.',
    price: 2499,
    images: ['https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'handbags',
    tags: ['canvas', 'tote', 'casual'],
    rating: 4.0,
    inStock: true,
    featured: false
  },
  {
    id: '307',
    name: 'Hobo Bag',
    description: 'Slouchy hobo bag with comfortable shoulder strap.',
    price: 5499,
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'handbags',
    tags: ['hobo', 'slouchy', 'comfortable'],
    rating: 4.3,
    inStock: true,
    featured: false
  },
  {
    id: '308',
    name: 'Clutch Evening Bag',
    description: 'Elegant clutch for evening occasions.',
    price: 3999,
    images: ['https://images.unsplash.com/photo-1566150902887-9679ecc155ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'handbags',
    tags: ['clutch', 'evening', 'elegant'],
    rating: 4.6,
    inStock: true,
    featured: false
  },
  {
    id: '309',
    name: 'Woven Straw Bag',
    description: 'Natural woven straw bag for summer outings.',
    price: 3299,
    salePrice: 2799,
    images: ['https://images.unsplash.com/photo-1550014730-66b3e7621100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'handbags',
    tags: ['straw', 'summer', 'natural'],
    rating: 4.5,
    inStock: true,
    featured: true
  },

  // Additional 7 products for other categories (accessories, watches, jewelry, travel bags, belts)
  // Accessories (10 products)
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
    id: '401',
    name: 'Designer Sunglasses',
    description: 'Stylish UV protection sunglasses.',
    price: 3999,
    images: ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'accessories',
    tags: ['sunglasses', 'designer', 'uv protection'],
    rating: 4.7,
    inStock: true,
    featured: true
  },
  {
    id: '402',
    name: 'Silk Scarf',
    description: 'Luxurious silk scarf with elegant pattern.',
    price: 2499,
    salePrice: 1999,
    images: ['https://images.unsplash.com/photo-1552874869-5c39ec9288dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'accessories',
    tags: ['scarf', 'silk', 'pattern'],
    rating: 4.5,
    inStock: true,
    featured: false
  },
  {
    id: '403',
    name: 'Leather Keychain',
    description: 'Handcrafted leather keychain with brass details.',
    price: 999,
    images: ['https://images.unsplash.com/photo-1622043351723-3700e2173c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'accessories',
    tags: ['keychain', 'leather', 'handcrafted'],
    rating: 4.3,
    inStock: true,
    featured: false
  },
  {
    id: '404',
    name: 'Laptop Sleeve',
    description: 'Protective sleeve for laptops up to 15 inches.',
    price: 1899,
    images: ['https://images.unsplash.com/photo-1574871786514-46e1680e6aee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'accessories',
    tags: ['laptop', 'sleeve', 'protection'],
    rating: 4.0,
    inStock: true,
    featured: false
  },
  {
    id: '405',
    name: 'Travel Organizer',
    description: 'Compact organizer for all your travel essentials.',
    price: 1499,
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'accessories',
    tags: ['travel', 'organizer', 'compact'],
    rating: 4.2,
    inStock: true,
    featured: false
  },
  {
    id: '406',
    name: 'Tech Pouch',
    description: 'Organized storage for cables, chargers, and small tech items.',
    price: 1799,
    salePrice: 1499,
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'accessories',
    tags: ['tech', 'pouch', 'organization'],
    rating: 4.6,
    inStock: true,
    featured: true
  },
  {
    id: '407',
    name: 'Passport Holder',
    description: 'Stylish holder for passport and travel documents.',
    price: 1299,
    images: ['https://images.unsplash.com/photo-1556483006-d6142704afc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'accessories',
    tags: ['passport', 'travel', 'document'],
    rating: 4.3,
    inStock: true,
    featured: false
  },
  {
    id: '408',
    name: 'Wireless Earbuds Case',
    description: 'Protective case for wireless earbuds.',
    price: 999,
    images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'accessories',
    tags: ['earbuds', 'case', 'protective'],
    rating: 4.1,
    inStock: true,
    featured: false
  },
  {
    id: '409',
    name: 'Luggage Tag',
    description: 'Distinctive tag to identify your luggage easily.',
    price: 799,
    images: ['https://images.unsplash.com/photo-1576626444167-343a58bf9ae1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'accessories',
    tags: ['luggage', 'tag', 'travel'],
    rating: 4.0,
    inStock: true,
    featured: false
  },
  
  // Watches (10 products)
  {
    id: '5',
    name: 'Classic Analog Watch',
    description: 'Elegant timepiece with leather strap.',
    price: 7999,
    images: ['https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'watches',
    tags: ['analog', 'classic', 'leather'],
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: '501',
    name: 'Digital Sports Watch',
    description: 'Rugged watch with multiple functions for athletes.',
    price: 3999,
    images: ['https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'watches',
    tags: ['digital', 'sports', 'functions'],
    rating: 4.6,
    inStock: true,
    featured: false
  },
  {
    id: '502',
    name: 'Minimalist Watch',
    description: 'Clean design with slim profile.',
    price: 5999,
    salePrice: 4999,
    images: ['https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'watches',
    tags: ['minimalist', 'slim', 'modern'],
    rating: 4.7,
    inStock: true,
    featured: true
  },
  {
    id: '503',
    name: 'Automatic Mechanical Watch',
    description: 'Sophisticated mechanical movement visible through display case back.',
    price: 12999,
    images: ['https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'watches',
    tags: ['automatic', 'mechanical', 'luxury'],
    rating: 4.9,
    inStock: true,
    featured: true
  },
  {
    id: '504',
    name: 'Smart Watch',
    description: 'Connected timepiece with health tracking features.',
    price: 9999,
    images: ['https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'watches',
    tags: ['smart', 'digital', 'health'],
    rating: 4.5,
    inStock: true,
    featured: false
  },
  {
    id: '505',
    name: 'Chronograph Watch',
    description: 'Precision timing with multiple dials.',
    price: 8999,
    salePrice: 7499,
    images: ['https://images.unsplash.com/photo-1548359638-e51353ca6d34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'watches',
    tags: ['chronograph', 'precision', 'multifunctional'],
    rating: 4.7,
    inStock: true,
    featured: false
  },
  {
    id: '506',
    name: 'Dress Watch',
    description: 'Elegant watch for formal occasions.',
    price: 6499,
    images: ['https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'watches',
    tags: ['dress', 'formal', 'elegant'],
    rating: 4.8,
    inStock: true,
    featured: false
  },
  {
    id: '507',
    name: 'Dive Watch',
    description: 'Water-resistant watch for underwater adventures.',
    price: 10999,
    images: ['https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'watches',
    tags: ['dive', 'water-resistant', 'adventure'],
    rating: 4.6,
    inStock: true,
    featured: true
  },
  {
    id: '508',
    name: 'Pilot Watch',
    description: 'Aviator-inspired design with clear legibility.',
    price: 7999,
    images: ['https://images.unsplash.com/photo-1589923188651-268a9765eb58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'watches',
    tags: ['pilot', 'aviation', 'legible'],
    rating: 4.4,
    inStock: true,
    featured: false
  },
  {
    id: '509',
    name: 'Skeleton Watch',
    description: 'Transparent design showcasing intricate inner workings.',
    price: 11999,
    salePrice: 9999,
    images: ['https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'watches',
    tags: ['skeleton', 'transparent', 'mechanical'],
    rating: 4.9,
    inStock: true,
    featured: true
  },
  
  // Jewelry (10 products)
  {
    id: '6',
    name: 'Diamond Pendant Necklace',
    description: 'Elegant pendant with genuine diamond.',
    price: 14999,
    images: ['https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'jewelry',
    tags: ['diamond', 'pendant', 'elegant'],
    rating: 4.9,
    inStock: true,
    featured: true
  },
  {
    id: '601',
    name: 'Gold Hoop Earrings',
    description: 'Classic gold hoops for everyday wear.',
    price: 3999,
    images: ['https://images.unsplash.com/photo-1588444837495-c6b8dd8269ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'jewelry',
    tags: ['gold', 'earrings', 'classic'],
    rating: 4.6,
    inStock: true,
    featured: false
  },
  {
    id: '602',
    name: 'Silver Bracelet',
    description: 'Delicate sterling silver bracelet with charm.',
    price: 2999,
    salePrice: 2499,
    images: ['https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'jewelry',
    tags: ['silver', 'bracelet', 'charm'],
    rating: 4.7,
    inStock: true,
    featured: true
  },
  {
    id: '603',
    name: 'Gemstone Ring',
    description: 'Statement ring with vibrant gemstone.',
    price: 5999,
    images: ['https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'jewelry',
    tags: ['gemstone', 'ring', 'statement'],
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: '604',
    name: 'Pearl Stud Earrings',
    description: 'Timeless freshwater pearl studs.',
    price: 2499,
    images: ['https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'jewelry',
    tags: ['pearl', 'studs', 'timeless'],
    rating: 4.5,
    inStock: true,
    featured: false
  },
  {
    id: '605',
    name: 'Layered Necklace Set',
    description: 'Set of three necklaces for layered look.',
    price: 4999,
    salePrice: 3999,
    images: ['https://images.unsplash.com/photo-1611085583191-a3b181a88552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'jewelry',
    tags: ['layered', 'necklace', 'set'],
    rating: 4.7,
    inStock: true,
    featured: true
  },
  {
    id: '606',
    name: 'Cuff Bangle',
    description: 'Modern open cuff bangle in gold tone.',
    price: 1999,
    images: ['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'jewelry',
    tags: ['cuff', 'bangle', 'modern'],
    rating: 4.3,
    inStock: true,
    featured: false
  },
  {
    id: '607',
    name: 'Birthstone Pendant',
    description: 'Personalized pendant with your birthstone.',
    price: 3499,
    images: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'jewelry',
    tags: ['birthstone', 'pendant', 'personalized'],
    rating: 4.6,
    inStock: true,
    featured: false
  },
  {
    id: '608',
    name: 'Tennis Bracelet',
    description: 'Classic line bracelet with cubic zirconia.',
    price: 6999,
    images: ['https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'jewelry',
    tags: ['tennis', 'bracelet', 'cubic zirconia'],
    rating: 4.8,
    inStock: true,
    featured: false
  },
  {
    id: '609',
    name: 'Anklet Chain',
    description: 'Delicate chain anklet with small charms.',
    price: 1499,
    salePrice: 1299,
    images: ['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'jewelry',
    tags: ['anklet', 'chain', 'charms'],
    rating: 4.4,
    inStock: true,
    featured: false
  },
  
  // Travel Bags (10 products)
  {
    id: '7',
    name: 'Weekender Travel Bag',
    description: 'Perfect size for short trips with multiple compartments.',
    price: 8999,
    images: ['https://images.unsplash.com/photo-1565619632666-377a281965fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'travel-bags',
    tags: ['weekender', 'short trips', 'compartments'],
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: '701',
    name: 'Rolling Suitcase',
    description: 'Durable hard-shell suitcase with spinner wheels.',
    price: 12999,
    images: ['https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'travel-bags',
    tags: ['suitcase', 'hard-shell', 'wheels'],
    rating: 4.7,
    inStock: true,
    featured: true
  },
  {
    id: '702',
    name: 'Duffel Bag',
    description: 'Spacious and versatile for gym or travel use.',
    price: 5999,
    salePrice: 4999,
    images: ['https://images.unsplash.com/photo-1539937477633-cd3e89b8b69f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'travel-bags',
    tags: ['duffel', 'gym', 'spacious'],
    rating: 4.6,
    inStock: true,
    featured: false
  },
  {
    id: '703',
    name: 'Carry-On Backpack',
    description: 'Designed to fit under airplane seats with laptop compartment.',
    price: 7499,
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'travel-bags',
    tags: ['carry-on', 'airline', 'laptop'],
    rating: 4.9,
    inStock: true,
    featured: true
  },
  {
    id: '704',
    name: 'Garment Bag',
    description: 'Keeps suits and dresses wrinkle-free during travel.',
    price: 6999,
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'travel-bags',
    tags: ['garment', 'suit', 'wrinkle-free'],
    rating: 4.5,
    inStock: true,
    featured: false
  },
  {
    id: '705',
    name: 'Toiletry Kit',
    description: 'Water-resistant bag for organizing personal care items.',
    price: 1999,
    salePrice: 1699,
    images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'travel-bags',
    tags: ['toiletry', 'water-resistant', 'organization'],
    rating: 4.3,
    inStock: true,
    featured: false
  },
  {
    id: '706',
    name: 'Packing Cubes Set',
    description: 'Set of different sized cubes to organize suitcase contents.',
    price: 2499,
    images: ['https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'travel-bags',
    tags: ['packing', 'organization', 'cubes'],
    rating: 4.8,
    inStock: true,
    featured: false
  },
  {
    id: '707',
    name: 'Lightweight Daypack',
    description: 'Foldable daypack for day trips while traveling.',
    price: 1799,
    images: ['https://images.unsplash.com/photo-1541267732407-8f77a449dee7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'travel-bags',
    tags: ['daypack', 'foldable', 'lightweight'],
    rating: 4.4,
    inStock: true,
    featured: false
  },
  {
    id: '708',
    name: 'Trekking Backpack',
    description: 'Large capacity backpack for extended trips and hiking.',
    price: 13999,
    images: ['https://images.unsplash.com/photo-1491331606314-1d15535360fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'],
    category: 'travel-bags',
    tags: ['trekking', 'capacity', 'hiking'],
    rating: 4.9,
    inStock: true,
    featured: false
  },
];
  
const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Assuming you have an API or local data to fetch products based on category slug
    const fetchCategoryProducts = async () => {
      // Fetching products based on category slug
      const filteredCategory = categories.find(cat => cat.slug === slug);
      if (filteredCategory) {
        // Mock fetching products for the selected category
        setCategoryProducts([
          // Mock products data, replace with real fetch
          { id: '1', name: 'Backpack 1', category: filteredCategory.name, image: filteredCategory.image },
          { id: '2', name: 'Backpack 2', category: filteredCategory.name, image: filteredCategory.image }
        ]);
      }
    };

    fetchCategoryProducts();
  }, [slug]);

  return (
    <div>
      <Navbar />
      <h1>{slug} Products</h1>
      <div className="product-list">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;