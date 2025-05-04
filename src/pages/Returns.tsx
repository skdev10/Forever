
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Returns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative bg-black text-white py-16">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Returns & Exchanges</h1>
            <p className="text-lg text-gray-300">
              Our hassle-free policy for returns and exchanges.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="Returns Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <main className="flex-grow py-16 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Return Policy Overview</h2>
              <p className="text-gray-700 mb-4">
                We want you to be completely satisfied with your purchase. If for any reason you're not happy with your order, you can return eligible items within 30 days of delivery for a full refund or exchange.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Return Eligibility</h2>
              <h3 className="text-xl font-semibold mt-6 mb-2">Items eligible for return:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Unused, unworn items in original condition</li>
                <li>Items with all original tags and packaging</li>
                <li>Items returned within 30 days of delivery</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">Items not eligible for return:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Items marked as "Final Sale" or "Non-Returnable"</li>
                <li>Personalized or custom-made items</li>
                <li>Items showing signs of wear or use</li>
                <li>Gift cards</li>
                <li>Intimate items for hygiene reasons</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Return Process</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-4 text-gray-700">
                <li>
                  <strong>Initiate a Return:</strong> Log into your account, go to "My Orders" and select the order containing the item(s) you wish to return. Click on "Return Items" and follow the instructions. Alternatively, you can contact our customer service team.
                </li>
                <li>
                  <strong>Packaging:</strong> Pack the item(s) securely in their original packaging or a similar sturdy box. Include the original tags, accessories, and any free gifts that came with the purchase.
                </li>
                <li>
                  <strong>Return Label:</strong> Print the return shipping label provided in your return confirmation email. Attach it securely to your package.
                </li>
                <li>
                  <strong>Ship:</strong> Drop off your package at the nearest authorized shipping location. We recommend keeping the receipt until your return is processed.
                </li>
                <li>
                  <strong>Processing:</strong> Once we receive your return, our team will inspect the item(s) and process your refund or exchange within 5-7 business days.
                </li>
              </ol>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Exchanges</h2>
              <p className="text-gray-700 mb-4">
                If you would like to exchange an item for a different size or color, please follow the same process as returns and specify your exchange preference. If the exchange item is available, we will process the exchange once we receive your original item. If the exchange item is unavailable, we will issue a refund.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Refunds</h2>
              <p className="text-gray-700 mb-4">
                Refunds will be issued to the original payment method used for the purchase. Please allow 7-10 business days for the refund to appear in your account after processing.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><strong>Credit/Debit Cards:</strong> 3-5 business days after processing</li>
                <li><strong>UPI/Net Banking:</strong> 3-7 business days after processing</li>
                <li><strong>Store Credit:</strong> Immediately available after processing</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Original shipping charges are non-refundable unless the return is due to our error or a defective product.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Damaged or Defective Items</h2>
              <p className="text-gray-700 mb-4">
                If you receive a damaged or defective item, please contact our customer service team within 48 hours of delivery. We may request photographs of the damage for verification. Once verified, we will arrange for a replacement or issue a full refund including shipping charges.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">International Returns</h2>
              <p className="text-gray-700 mb-4">
                International customers are responsible for return shipping costs, duties, and taxes. Please contact our customer service team for specific instructions regarding international returns.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our returns and exchanges policy, please contact our customer service team at returns@foreverbuy.in or call us at +91 98765 43210.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Returns;
