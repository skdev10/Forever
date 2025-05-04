
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
}

const Blog = () => {
  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "How to Care for Your Leather Products",
      excerpt: "Learn the essential tips and tricks for maintaining the quality and extending the life of your leather accessories.",
      date: "May 1, 2025",
      author: "Priya Sharma",
      category: "Product Care",
      image: "https://images.unsplash.com/photo-1579394224950-964e88d07fdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      slug: "how-to-care-for-leather-products"
    },
    {
      id: "2",
      title: "Top 10 Travel Essentials for 2025",
      excerpt: "Discover the must-have travel accessories that will make your journeys more comfortable, organized, and stylish.",
      date: "April 24, 2025",
      author: "Arjun Singh",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1581553680321-4fffae59fcfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      slug: "top-10-travel-essentials-2025"
    },
    {
      id: "3",
      title: "The Art of Minimalist Accessories",
      excerpt: "Explore how minimalist accessories can elevate your style while keeping things simple and elegant.",
      date: "April 18, 2025",
      author: "Meera Kapoor",
      category: "Style",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      slug: "art-of-minimalist-accessories"
    },
    {
      id: "4",
      title: "Sustainable Fashion: The Future of Accessories",
      excerpt: "Discover how sustainable practices are reshaping the accessories industry and how you can make eco-friendly choices.",
      date: "April 10, 2025",
      author: "Rohit Sharma",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      slug: "sustainable-fashion-future-accessories"
    },
    {
      id: "5",
      title: "The Perfect Gift Guide for Every Occasion",
      excerpt: "Find the perfect gift for your loved ones with our comprehensive guide for birthdays, anniversaries, and special celebrations.",
      date: "April 2, 2025",
      author: "Priya Sharma",
      category: "Gift Ideas",
      image: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      slug: "perfect-gift-guide-every-occasion"
    },
    {
      id: "6",
      title: "Behind the Scenes: How Our Products Are Made",
      excerpt: "Take a glimpse into our workshop and discover the craftsmanship that goes into creating each ForeverBuy product.",
      date: "March 28, 2025",
      author: "Arjun Singh",
      category: "Craftsmanship",
      image: "https://images.unsplash.com/photo-1635430650581-a06174aafa83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      slug: "behind-scenes-how-products-made"
    }
  ];
  
  // Categories for filter
  const categories = [
    "All",
    "Product Care",
    "Travel",
    "Style",
    "Sustainability",
    "Gift Ideas",
    "Craftsmanship"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative bg-black text-white py-16">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ForeverBuy Blog</h1>
            <p className="text-lg text-gray-300">
              Discover tips, trends, and stories about our products and the world of accessories.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="Blog Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <main className="flex-grow py-16 bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex space-x-4 min-w-max pb-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                    index === 0
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Featured Post */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-xl">
              <Link to={`/blog/${blogPosts[0].slug}`} className="block">
                <div className="aspect-[2/1] overflow-hidden">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 md:p-10 flex flex-col justify-end">
                  <span className="text-white bg-gold px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-2">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-200 mb-4 max-w-2xl">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-white/80 text-sm">
                    <span>{blogPosts[0].author}</span>
                    <span className="mx-2">•</span>
                    <span>{blogPosts[0].date}</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Blog Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm ml-auto">{post.date}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="block">
                    <h3 className="text-xl font-bold mb-2 hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>By {post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <div className="flex space-x-1">
              <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-gray-500">
                Previous
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md bg-black text-white">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-gray-500">
                Next
              </button>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="mt-16 bg-gray-50 p-8 md:p-12 rounded-xl">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Get the latest articles, product updates, and exclusive offers delivered right to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
