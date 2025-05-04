
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative bg-black text-white py-16">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-lg text-gray-300">
              Please read these terms carefully before using our website.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="Terms Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <main className="flex-grow py-16 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                These Terms and Conditions govern your use of the ForeverBuy website and services operated by ForeverBuy India Pvt. Ltd. By accessing or using our website at www.foreverbuy.in, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access the website.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">2. Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4">
                Other than the content you own, under these Terms, ForeverBuy and/or its licensors own all the intellectual property rights and materials contained in this website. You are granted a limited license to view the material contained on this website for personal, non-commercial use only.
              </p>
              <p className="text-gray-700 mb-4">
                You are specifically prohibited from:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Using this website for any purpose that is unlawful or prohibited by these Terms</li>
                <li>Republishing material from this website in any medium without permission</li>
                <li>Selling, renting, or sub-licensing material from the website</li>
                <li>Reproducing, duplicating, or copying material from the website</li>
                <li>Redistributing content from ForeverBuy (unless specifically authorized)</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">3. User Account</h2>
              <p className="text-gray-700 mb-4">
                If you create an account on our website, you are responsible for maintaining the security of your account and for all activities that occur under the account. You must immediately notify ForeverBuy of any unauthorized uses of your account or any other breaches of security. ForeverBuy will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">4. Product Information</h2>
              <p className="text-gray-700 mb-4">
                We strive to provide accurate product descriptions and images. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free. If a product offered by ForeverBuy is not as described, your sole remedy is to return it in unused condition.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">5. Pricing and Payment</h2>
              <p className="text-gray-700 mb-4">
                All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless otherwise stated. We reserve the right to modify prices at any time without prior notice. Payment must be made at the time of purchase through the payment methods provided on our website.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">6. Shipping and Delivery</h2>
              <p className="text-gray-700 mb-4">
                ForeverBuy will make every effort to ship products within the timeframe specified at checkout. However, we are not responsible for delays caused by circumstances beyond our control. Please refer to our Shipping Policy for detailed information.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">7. Returns and Refunds</h2>
              <p className="text-gray-700 mb-4">
                Returns and refunds are subject to our Returns & Exchanges Policy, which forms part of these Terms and Conditions.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">8. User Comments and Feedback</h2>
              <p className="text-gray-700 mb-4">
                Users may post comments, reviews, and other content as long as the content is not illegal, obscene, threatening, defamatory, invasive of privacy, infringing of intellectual property rights, or otherwise injurious to third parties. ForeverBuy reserves the right to remove or edit such content at its discretion.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                In no event shall ForeverBuy, its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of or inability to access or use the website.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                ForeverBuy reserves the right to modify or replace these Terms at any time. It is your responsibility to check our Terms periodically for changes. Your continued use of the website following the posting of any changes to the Terms constitutes acceptance of those changes.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms, please contact us at legal@foreverbuy.in or at our registered office:
              </p>
              <p className="text-gray-700 mb-4">
                ForeverBuy India Pvt. Ltd.<br />
                123 Commerce Street<br />
                Mumbai, Maharashtra 400001<br />
                India
              </p>
            </section>
            
            <section className="mb-10">
              <p className="text-gray-700 mb-4 italic">
                Last updated: May 1, 2025
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsConditions;
