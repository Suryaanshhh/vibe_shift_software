import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ProcessSection from '../components/ProcessSection';
import jktaLogo from '../assets/jkta.png'
import kunnuDairyLogo from '../assets/kunnuDairy.png'
import satyalok from '../assets/satyalok.png'
import satyalokDonation from '../assets/satyalokDonation.png'
import gigLogo from '../assets/gigforce.jfif'
import encoderLogo from '../assets/encoder.png'

const SuccessStories = () => {
  const successStories = [
    {
      projectName: "JKTA Portal",
      challenge: "Built a scalable portal syncing coaches and students.",
      solution: "Developed a automated solution from payment gateway to cerificate generation.",
      impact: "More registration because of automation.",
      image: jktaLogo, // Add image URL here
      
    },
    {
      projectName: "Kunnu Dairy",
      challenge: "Designe a e-commerce cart for dairy products",
      solution: "Optimised frontend using react js.",
      impact: "User engagement increased by 30%, because of fast loading due to react.",
      image: kunnuDairyLogo, // Add image URL here
      // Add live project link here
    },
    {
      projectName: "Satyalok Ngo",
      challenge: "Created an portal for operation of NGO.",
      solution: "Integrated payment gateway and user authentication",
      impact: "Authentication secures the platform, making it trust worthy.",
      image: satyalok, // Add image URL here
      // Add live project link here
    },
    {
      projectName: "Gig Force",
      challenge: "A mobile app for freelancers.",
      solution: "Built a secure, scalable platform where freelancer can find work.",
      impact: "Achieved 90% uptime and no crash status",
      image: gigLogo, // Add image URL here
      // Add live project link here
    },
    {
      projectName: "Encoder",
      challenge: "Implemented a encoder for personalised data.",
      solution: "Developed an encoder to train models.",
      impact: "Reduced response times by 50%.",
      image: encoderLogo, // Add image URL here
       // Add live project link here
    },
    {
      projectName: "Donation Platform",
      challenge: "Built a donation platform for transparency.",
      solution: "Built a secure platform that autogenerates reciept on donation.",
      impact: "Improved transparency in social work",
      image: satyalokDonation, // Add image URL here
       // Add live project link here
    }
  ];

  return (
    <>
      <SEO 
        title="Our Success Stories - VibeShift Software | Real-life Impact and Results"
        description="Discover how VibeShift Software's solutions have helped clients achieve significant growth and success in various industries, from AI tools to cloud solutions."
        keywords="success stories, client case studies, web development, mobile apps, AI solutions, data analytics, cloud migration"
        url="https://vibeshiftsoftware.com/success-stories"
      />
      <div className="dotted-bg min-h-screen w-full">
        <div>
          <Header />
          <div className="pt-32 pb-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl font-bold text-center mb-4 text-black">Our Success Stories</h1>
              <p className="text-xl text-center text-gray-700 mb-16 font-medium">
                Real-world examples of how our solutions have transformed businesses
              </p>

              {/* Cards Container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {successStories.map((story, index) => (
                  <div
                    key={index}
                    className="bg-black text-white border-2 border-black rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer hover:bg-gray-900 w-full h-[420px] flex flex-col"
                  >
                    {/* Project Image */}
                    <div className="w-full h-40 mb-4 flex-shrink-0 bg-white rounded-lg p-1">
                      <img
                        src={story.image}
                        alt={story.projectName}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="flex-grow flex flex-col">
                      <h3 className="text-lg font-bold mb-3 text-white">
                        {story.projectName}
                      </h3>

                      {/* Challenge */}
                      <div className="text-sm text-gray-300 mb-2">
                        <strong>Challenge:</strong> {story.challenge}
                      </div>

                      {/* Solution */}
                      <div className="text-sm text-gray-300 mb-2">
                        <strong>Solution:</strong> {story.solution}
                      </div>

                      {/* Impact */}
                      <div className="text-sm text-gray-300 mb-3">
                        <strong>Impact:</strong> {story.impact}
                      </div>

                 
                    </div>
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

export default SuccessStories;