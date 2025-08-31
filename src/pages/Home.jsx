import React from 'react';
import Header from '../components/Header';
import TaglineSection from '../components/TaglineSection';
import TechStripe from '../components/TechStripe';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

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
            <TaglineSection />
            <TechStripe />
            <HeroSection />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;