import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us - VibeShift Software | Get In Touch For Your Next Project"
        description="Contact VibeShift Software for your custom software development needs. We specialize in web development, mobile apps, AI/ML solutions, and data analytics. Get a free consultation today."
        keywords="contact software development, hire developers, custom software consultation, web development contact, mobile app development inquiry"
        url="https://vibeshiftsoftware.com/contact"
      />
      <div className="dotted-bg min-h-screen w-full">
        <div>
          <Header />
          <div className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-4 text-black">Contact Us</h1>
            <p className="text-xl text-center text-gray-700 mb-16 font-medium">
              Get in touch with us for your next project
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Email Card */}
              <div className="bg-black text-white border-2 border-black rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer hover:bg-gray-900">
                <div className="text-4xl mb-6 transform hover:scale-110 transition-transform duration-200">
                  📧
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Email Us
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Send us an email and we'll get back to you within 24 hours
                </p>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                  <p className="text-white font-mono text-sm sm:text-lg break-all">
                    vibeshiftsoftware@gmail.com
                  </p>
                 
                </div>
              </div>

              {/* Google Form Card */}
              <div className="bg-black text-white border-2 border-black rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer hover:bg-gray-900">
                <div className="text-4xl mb-6 transform hover:scale-110 transition-transform duration-200">
                  📝
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Quick Form
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Fill out our quick contact form to get started
                </p>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                  <a
                    href="https://docs.google.com/forms/d/1N0ipA_rQWdoS0lLBxcaGnv_iO4I17H9Ij6HjllSZ1K8/viewform?pli=1&pli=1&edit_requested=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 block text-center"
                  >
                    Open Contact Form
                  </a>
                  <p className="text-gray-400 text-sm mt-2 text-center">
                    Opens in new tab
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;