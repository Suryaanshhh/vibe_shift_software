import React from 'react';
import Header from '../components/Header';
import TaglineSection from '../components/TaglineSection';
import TechStripe from '../components/TechStripe';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ProcessSection from '../components/ProcessSection';
import BannerSection from '../components/Banner';
import bannerLogo from '../assets/imageBanner.png'
import WorkCarousel from '../components/WorkCarousel';
const Home = () => {
  return (
    <>
      <SEO 
        title="VibeShift Software - Transform Ideas Into Reality | Custom Software Development"
        description="Professional software development company specializing in web applications, mobile apps, AI/ML solutions, and data analytics. We build digital experiences that transform your ideas into reality."
        keywords="software development, web development, mobile apps, AI, machine learning, data analytics, UI/UX design, React, Node.js, Python, custom software, digital transformation"
        url="https://vibeshiftsoftware.com"
      />
      <div className="dotted-bg min-h-screen w-full">
        <div>
          <Header />
          <div className="space-y-0 -space-y-8">
          {/* <BannerSection 
              imageSrc={bannerLogo}
              alt="VibeShift Software Brand Banner"
              height="h-72 md:h-96 lg:h-[500px]"
              overlay={false}
            /> */}
            <TaglineSection/>
            <TechStripe />
            {/* <HeroSection /> */}
            <WorkCarousel/>
          </div>
          <ProcessSection/>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;