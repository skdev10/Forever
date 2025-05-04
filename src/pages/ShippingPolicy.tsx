
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative bg-black text-white py-16">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shipping Policy</h1>
            <p className="text-lg text-gray-300">
              Everything you need to know about our shipping process.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1568857262463-e8b62a340df1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="Shipping Policy Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <main className="flex-grow py-16 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Domestic Shipping</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">Shipping Methods & Timeframes</h3>
              <p className="text-gray-700 mb-4">
                We offer the following shipping options for orders within India:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><strong>Standard Shipping:</strong> 3-5 business days (₹99 or Free for orders above ₹1999)</li>
                <li><strong>Express Shipping:</strong> 1-2 business days (₹199)</li>
                <li><strong>Same Day Delivery:</strong> Available only in select metro cities for orders placed before 12 PM (₹299)</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">Order Processing</h3>
              <p className="text-gray-700 mb-4">
                All orders are processed within 24-48 hours of being placed. Orders placed after 2 PM IST may be processed the following business day. We do not process or ship orders on weekends or public holidays.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">Free Shipping Policy</h3>
              <p className="text-gray-700 mb-4">
                We offer free standard shipping on all domestic orders over ₹1999. The free shipping option will automatically apply at checkout when your order subtotal exceeds this amount.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">International Shipping</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">Countries We Ship To</h3>
              <p className="text-gray-700 mb-4">
                We currently ship to over 50 countries worldwide. The full list of countries is available during the checkout process.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">International Shipping Methods & Timeframes</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><strong>Standard International:</strong> 7-14 business days (₹1499)</li>
                <li><strong>Express International:</strong> 3-5 business days (₹2499)</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">Customs, Duties, and Taxes</h3>
              <p className="text-gray-700 mb-4">
                International customers may be subject to customs fees, duties, and taxes, which are levied once a shipment reaches your country. These additional charges are the responsibility of the customer and are not included in our shipping rates.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Tracking Your Order</h2>
              <p className="text-gray-700 mb-4">
                Once your order has been shipped, you will receive a shipping confirmation email with a tracking number. You can use this number to track your package on our website under "Order Tracking" or directly on the courier's website.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Shipping Restrictions</h2>
              <p className="text-gray-700 mb-4">
                Some products cannot be shipped to certain locations due to local regulations. If we are unable to ship your order to your specified address, we will notify you and process a refund for the restricted items.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Delivery Issues</h2>
              <h3 className="text-xl font-semibold mt-6 mb-2">Lost or Damaged Packages</h3>
              <p className="text-gray-700 mb-4">
                If your package appears to be lost or damaged during transit, please contact our customer service team within 48 hours of the expected delivery date. We will work with the shipping carrier to resolve the issue.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">Incorrect Shipping Information</h3>
              <p className="text-gray-700 mb-4">
                Please ensure that your shipping address is entered correctly at checkout. We are not responsible for undeliverable packages due to incorrect shipping information. Address changes cannot be made once an order has been placed.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our shipping policy, please contact our customer service team at shipping@foreverbuy.in or call us at +91 98765 43210.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShippingPolicy;
