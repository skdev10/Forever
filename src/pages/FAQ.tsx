
import { useState } from 'react';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);
  
  const faqItems: FAQItem[] = [
    {
      question: "How do I track my order?",
      answer: "Once your order has been shipped, you'll receive a confirmation email with a tracking number. You can use this number on our website or the courier's website to track the progress of your delivery.",
      category: "orders"
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of delivery. Items must be in original condition with tags attached. Please visit our Returns & Exchanges page for more details on how to initiate a return.",
      category: "returns"
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping times and fees vary depending on the destination. You can see the shipping options during checkout.",
      category: "shipping"
    },
    {
      question: "How long does shipping take?",
      answer: "For domestic orders within India, standard shipping takes 3-5 business days. Express shipping options are available for 1-2 business days delivery. International shipping typically takes 7-14 business days depending on the destination.",
      category: "shipping"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, UPI, Net Banking, and Cash on Delivery (for select locations in India).",
      category: "payment"
    },
    {
      question: "Are your products authentic?",
      answer: "Yes, all our products are 100% authentic. We source directly from manufacturers or authorized distributors and provide a guarantee of authenticity with every purchase.",
      category: "products"
    },
    {
      question: "How do I care for my leather products?",
      answer: "For leather products, we recommend regular cleaning with a soft cloth, occasional conditioning with a leather-specific conditioner, and storing in a cool, dry place when not in use. Avoid exposure to direct sunlight and water.",
      category: "products"
    },
    {
      question: "Do you offer a warranty?",
      answer: "Yes, all our products come with a 1-year warranty against manufacturing defects. Premium collections may have extended warranty periods. The warranty does not cover damage due to normal wear and tear or improper use.",
      category: "products"
    },
    {
      question: "Can I cancel my order?",
      answer: "Orders can be cancelled within 24 hours of placement if they have not been shipped. Please contact our customer service team immediately if you need to cancel an order.",
      category: "orders"
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes, we offer premium gift wrapping services for an additional fee. You can select this option during checkout and even include a personalized message for the recipient.",
      category: "orders"
    },
    {
      question: "How do I create an account?",
      answer: "You can create an account by clicking on the 'Account' icon in the top navigation bar and selecting 'Register'. You'll need to provide your email address and create a password. You can also register during the checkout process.",
      category: "account"
    },
    {
      question: "What are the benefits of creating an account?",
      answer: "With an account, you can track orders, save favorite products, speed up checkout with saved shipping and payment information, and access exclusive offers and early access to sales.",
      category: "account"
    }
  ];
  
  const categories = [
    { id: "all", name: "All Questions" },
    { id: "orders", name: "Orders" },
    { id: "shipping", name: "Shipping" },
    { id: "returns", name: "Returns" },
    { id: "payment", name: "Payment" },
    { id: "products", name: "Products" },
    { id: "account", name: "Account" }
  ];
  
  const filteredFAQs = activeCategory === "all" 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  const toggleQuestion = (index: number) => {
    setActiveQuestionId(activeQuestionId === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative bg-black text-white py-16">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-300">
              Find answers to common questions about our products and services.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="FAQ Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <main className="flex-grow py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Category Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h2 className="text-xl font-bold mb-6">Topics</h2>
                <nav>
                  <ul className="space-y-2">
                    {categories.map(category => (
                      <li key={category.id}>
                        <button
                          onClick={() => setActiveCategory(category.id)}
                          className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                            activeCategory === category.id
                              ? "bg-black text-white"
                              : "hover:bg-gray-200"
                          }`}
                        >
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            
            {/* FAQ Content */}
            <div className="md:w-3/4">
              <h2 className="text-2xl font-bold mb-6">
                {categories.find(cat => cat.id === activeCategory)?.name}
              </h2>
              
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="flex justify-between items-center w-full p-4 text-left font-medium hover:bg-gray-50"
                    >
                      <span>{faq.question}</span>
                      <svg
                        className={`w-5 h-5 transition-transform ${
                          activeQuestionId === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    
                    {activeQuestionId === index && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {filteredFAQs.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-gray-600">No FAQs found for this category.</p>
                </div>
              )}
              
              {/* Still Have Questions */}
              <div className="mt-12 bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">Still Have Questions?</h3>
                <p className="text-gray-600 mb-4">
                  Can't find what you're looking for? Please contact our customer support team.
                </p>
                <a href="/contact" className="btn-primary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
