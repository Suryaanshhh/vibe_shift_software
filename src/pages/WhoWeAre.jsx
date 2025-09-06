import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ProcessSection from '../components/ProcessSection';
const WhoAreWe = () => {
  return (
    <>
      <SEO 
        title="Who Are We - VibeShift Software | About Us"
        description="Learn about VibeShift Software's mission, vision, core values, team, and why we are the right partner for your business."
        keywords="about us, mission, vision, core values, software development, team"
        url="https://vibeshiftsoftware.com/who-are-we"
      />
      <div className="dotted-bg min-h-screen w-full">
        <div>
          <Header />
          <div className="pt-32 pb-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl font-bold text-center mb-4 text-black">Who Are We</h1>
              <p className="text-xl text-center text-gray-700 mb-16 font-medium">
                We are a team of innovators dedicated to creating software solutions that drive change and growth.
              </p>

              {/* Mission Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-black text-white border-2 border-black rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer hover:bg-gray-900">
                  <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    At VibeShift Software, our mission is to empower businesses with custom software solutions that enhance productivity, foster innovation, and simplify complex processes.
                  </p>
                </div>

                {/* Vision Section */}
                <div className="bg-black text-white border-2 border-black rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer hover:bg-gray-900">
                  <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Our vision is to lead the way in technological innovation by delivering exceptional software solutions that help businesses grow and adapt to changing markets.
                  </p>
                </div>
              </div>

              {/* Core Values Section */}
              <div className="bg-black text-white border-2 border-black rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer hover:bg-gray-900 mb-16">
                <h3 className="text-2xl font-bold mb-4 text-white">Our Core Values</h3>
                <ul className="text-gray-300 leading-relaxed text-lg list-disc pl-6 space-y-4">
                  <li><strong>Innovation:</strong> We embrace the latest technologies and continuously strive to stay ahead of the curve.</li>
                  <li><strong>Integrity:</strong> We maintain transparency, honesty, and accountability in everything we do.</li>
                  <li><strong>Collaboration:</strong> We work as one team with our clients to deliver solutions that exceed expectations.</li>
                  <li><strong>Excellence:</strong> We deliver high-quality, reliable, and scalable solutions that drive success.</li>
                </ul>
              </div>

              {/* Our Team Section */}
              <div className="bg-black text-white border-2 border-black rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer hover:bg-gray-900 mb-16">
                <h3 className="text-2xl font-bold mb-4 text-white text-center">Our Team</h3>
                <p className="text-gray-300 leading-relaxed text-lg text-center">
                  At VibeShift Software, our team consists of talented professionals across various domains who work collaboratively to deliver exceptional results.
                </p>
                <ul className="text-gray-300 leading-relaxed text-lg list-disc pl-6 space-y-4 mt-8">
                  <li><strong>Mobile Developer:</strong> Crafting seamless mobile experiences for both iOS and Android platforms.</li>
                  <li><strong>Full Stack Developer:</strong> Building end-to-end web solutions that are scalable and efficient.</li>
                  <li><strong>AI/ML & Data Scientist:</strong> Leveraging AI and data analytics to provide actionable insights and solutions.</li>
                  <li><strong>Marketing:</strong> Driving brand awareness and customer engagement through innovative marketing strategies.</li>
                  <li><strong>UI/UX Designer:</strong> Designing user-centric interfaces that enhance the overall user experience.</li>
                </ul>
              </div>

              {/* Why VibeShift Software Section */}
              <div className="bg-black text-white border-2 border-black rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer hover:bg-gray-900 mb-16">
                <h3 className="text-2xl font-bold mb-4 text-white">Why VibeShift Software</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  At VibeShift Software, we focus on creating custom solutions that address your unique business needs. With a dedicated team of experienced professionals, we help you navigate the complexities of technology and drive impactful results.
                </p>
              </div>

            </div>
          </div>
          <Footer />
          <ProcessSection/>
        </div>
      </div>
    </>
  );
};

export default WhoAreWe;
