
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative bg-black text-white py-16">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-300">
              Your privacy matters to us. Learn how we collect and process your information.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="Privacy Policy Banner"
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
                ForeverBuy India Pvt. Ltd. ("we," "our," or "us") values the privacy of our website visitors and customers. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.foreverbuy.in or make a purchase from us.
              </p>
              <p className="text-gray-700 mb-4">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you register on the website, express interest in obtaining information about us or our products, or otherwise contact us. This personal information may include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Postal address</li>
                <li>Payment information</li>
                <li>Account login credentials</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Access times</li>
                <li>Pages viewed</li>
                <li>Referring website addresses</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We may use cookies, web beacons, tracking pixels, and other tracking technologies to collect information about your browsing activities on our website.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We may use the information we collect from you for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Providing, operating, and maintaining our website</li>
                <li>Processing and fulfilling your orders</li>
                <li>Communicating with you about orders, products, services, and promotions</li>
                <li>Sending you technical notices, updates, and support messages</li>
                <li>Responding to your comments, questions, and customer service requests</li>
                <li>Developing new products, services, and features</li>
                <li>Preventing fraud and protecting the security of our website</li>
                <li>Complying with legal obligations</li>
                <li>For any other purpose with your consent</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">4. Disclosure of Your Information</h2>
              <p className="text-gray-700 mb-4">
                We may share your information with third parties in the following situations:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><strong>Business Partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
                <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or in response to valid legal process.</li>
                <li><strong>Business Transfers:</strong> We may share your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
                <li><strong>With Your Consent:</strong> We may disclose your information for any other purpose with your consent.</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">5. Your Privacy Rights</h2>
              <p className="text-gray-700 mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> You can request access to your personal information.</li>
                <li><strong>Correction:</strong> You can request that we correct inaccurate or incomplete information.</li>
                <li><strong>Deletion:</strong> You can request that we delete your personal information, subject to certain exceptions.</li>
                <li><strong>Opt-out:</strong> You can opt out of receiving marketing communications from us.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so that we can delete the information.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">8. Changes to this Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700 mb-4">
                ForeverBuy India Pvt. Ltd.<br />
                123 Commerce Street<br />
                Mumbai, Maharashtra 400001<br />
                India<br /><br />
                Email: privacy@foreverbuy.in<br />
                Phone: +91 98765 43210
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

export default PrivacyPolicy;
