import React from 'react';

const BannerSection = ({ 
  imageSrc = "/path/to/your/banner-image.jpg", 
  alt = "VibeShift Software Brand Banner",
  height = "h-64 md:h-80 lg:h-96",
  overlay = false,
  overlayOpacity = "bg-black/20"
}) => {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Banner Container */}
      <div className={`w-full ${height} relative`}>
        {/* Banner Image */}
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          loading="eager"
        />
        
        {/* Optional Overlay */}
        {overlay && (
          <div className={`absolute inset-0 ${overlayOpacity}`}></div>
        )}
        
        {/* Optional Content Overlay - Uncomment if you want to add text over the banner */}
        {/*
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              VibeShift Software
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Transform Ideas Into Reality
            </p>
          </div>
        </div>
        */}
      </div>
      
      {/* Decorative Border */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </section>
  );
};

export default BannerSection;