import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ProcessSection from '../components/ProcessSection';

const Services = () => {
  const services = [
    // Development Services
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and frameworks",
      icon: "🌐"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design for exceptional digital experiences",
      icon: "🎨"
    },
    // Data Science Services
    {
      title: "Dataset Cleaning",
      description: "Transform raw data into clean, structured datasets ready for analysis",
      icon: "🧹"
    },
    {
      title: "Model Training",
      description: "Build and train machine learning models tailored to your business needs",
      icon: "🤖"
    },
    {
      title: "Power BI Analysis",
      description: "Create interactive dashboards and reports for data-driven insights",
      icon: "📊"
    },
    // Additional Services
    {
      title: "Data Visualization",
      description: "Transform complex data into clear, compelling visual stories",
      icon: "📈"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions",
      icon: "☁️"
    },
    {
      title: "AI Consulting",
      description: "Strategic guidance on implementing AI solutions in your business",
      icon: "🧠"
    }
  ];

  return (
    <>
      <SEO 
        title="Our Services - VibeShift Software | Web Development, Mobile Apps, AI/ML Solutions"
        description="Comprehensive software development services including web development, mobile apps, UI/UX design, AI/ML solutions, data analytics, and cloud solutions. Professional development team ready to transform your ideas."
        keywords="web development services, mobile app development, AI ML solutions, data analytics, UI UX design, cloud solutions, software consulting, custom development"
        url="https://vibeshiftsoftware.com/services"
      />
      <div className="dotted-bg min-h-screen w-full">
        <div>
          <Header />
          <div className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto">



            <h1 className="text-5xl font-bold text-center mb-4 text-black">Our Services</h1>
            <p className="text-xl text-center text-gray-700 mb-16 font-medium">
              Comprehensive software development and data science solutions for your business
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-black text-white border-2 border-black rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer hover:bg-gray-900"
                >
                  <div className="text-4xl mb-6 transform hover:scale-110 transition-transform duration-200">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ProcessSection/>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Services;