import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Code, Palette } from 'lucide-react';
import jktaLogo from '../assets/jkta.png'
import kunnuDairyLogo from '../assets/kunnuDairy.png'
import satyalok from '../assets/satyalok.png'
import satyalokDonation from '../assets/satyalokDonation.png'
import gigLogo from '../assets/gigforce.jfif'
import encoderLogo from '../assets/encoder.png'
const WorkCarousel = ({ 
  title = "Our Portfolio",
  subtitle = "Crafted with precision, delivered with excellence"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  const touchStartRef = useRef(null);

  // Sample work data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "JKTA-PORTAL",
      category: "Web Application",
      description: "Modern web application with automation",
      image: jktaLogo,
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://www.jkta.in", // Added protocol
      featured: true
    },
    {
      id: 3,
      title: "Satyalok Ngo",
      category: "web application",
      description: "Portal for certificate generation",
      image: satyalok,
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://www.satyalok.in", // Added protocol
      featured: true
    },
    {
      id: 4,
      title: "Donation Portal",
      category: "Enterprise Software",
      description: "Fully automated donation portal with reciept generation",
      image: satyalokDonation,
      technologies: ["React", "Node.js", "MongoDB", "Flutter"],
      link: "https://donate.satyalok.in", // Added protocol
      featured: false
    },
    {
      id: 5,
      title: "Kunu Dairy",
      category: "FMCG-Cart",
      description: "E-commerce platform for dairy products",
      image: kunnuDairyLogo,
      technologies: ["React", "Express", "MySQL"],
      link: "https://www.kunudairy.com", // Added protocol
      featured: true
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  // Navigation functions
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStartRef.current - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartRef.current = null;
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-black bg-clip-text text-transparent mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-900 font-bold max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/80 backdrop-blur-sm border border-white/50">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
                    {/* Image Side */}
                    <div className="relative overflow-hidden group bg-gray-50 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          ⭐ Featured
                        </div>
                      )}

                      {/* Overlay Icons */}
                      <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-12 flex flex-col justify-center bg-gradient-to-br from-white via-slate-50 to-gray-100">
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Palette className="w-5 h-5 text-black" />
                          <span className="text-sm font-semibold text-black uppercase tracking-wider">
                            {project.category}
                          </span>
                        </div>
                        
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                          {project.title}
                        </h3>
                        
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-blue-200/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div>
                      <a
                            href={project.link}
                            target="_blank" // This opens the link in a new tab
                            rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                        >
                          View Project
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-20 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-200" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-20 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-200" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
            <div
              className="h-full bg-black transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCarousel;