
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">About VisionVogue</h1>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                We're dedicated to providing stylish, high-quality eyewear at affordable prices.
              </p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  VisionVogue was founded with a simple mission: to make high-quality eyewear accessible to everyone. We believe that everyone deserves to see clearly and look good doing it.
                </p>
                <p className="text-gray-600 mb-4">
                  Our journey began when our founder struggled to find stylish yet affordable eyewear. That's when the idea for VisionVogue was born – a brand that combines fashion, quality, and affordability.
                </p>
                <p className="text-gray-600">
                  Today, we offer a wide range of sunglasses and spectacles that cater to different styles, preferences, and needs. We're proud to have helped thousands of customers find their perfect pair.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img src="/placeholder.svg" alt="Our Story" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on quality. All our products are made using premium materials and undergo rigorous testing to ensure they meet our high standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a2.5 2.5 0 015 0v6a2.5 2.5 0 010 5h-5a2.5 2.5 0 010-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Affordability</h3>
                <p className="text-gray-600">
                  We believe that quality eyewear should be accessible to everyone. That's why we work hard to offer our products at fair, affordable prices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We strive to provide excellent service and products that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect Pair?</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Browse our collection of stylish sunglasses and spectacles to find the perfect match for your style and needs.
            </p>
            <Link to="/products">
              <Button className="bg-navy hover:bg-navy-dark">Shop Now</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
