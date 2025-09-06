import React from 'react';
import './TaglineSection.css';
import logo from '../assets/dummylogo.png'
const TaglineSection = () => {
  return (
    <section className="tagline-section">
      {/* Floating Tech Icons */}
      <div className="floating-icons">
        <div className="floating-icon icon-1">💻</div>
        <div className="floating-icon icon-2">🚀</div>
        <div className="floating-icon icon-3">⭐</div>
        <div className="floating-icon icon-4">💡</div>
        <div className="floating-icon icon-5">🔧</div>
        <div className="floating-icon icon-6">📱</div>
        <div className="floating-icon icon-7">🎯</div>
        <div className="floating-icon icon-8">✨</div>
      </div>

      <div className="tagline-container">
        {/* Logo Section */}
     

        {/* Tagline Content */}
        <div className="tagline-content">
          <h1 className="main-tagline">
            <div className="tagline-row">
              <div className="icon-wrapper">
                <span className="tagline-icon shift-icon">⚡</span>
                <div className="icon-ripple"></div>
              </div>
              <p className="tagline-text">Shift Smarter</p>
            </div>
            <div className="tagline-row">
              <div className="icon-wrapper">
                <span className="tagline-icon build-icon">⚙️</span>
                <div className="icon-ripple"></div>
              </div>
              <p className="tagline-text">Build Faster</p>
            </div>
          </h1>
          
          <div className="tagline-subtitle">
            <div className="gradient-line"></div>
            <p>Empowering innovation through intelligent solutions</p>
            <div className="gradient-line"></div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="bg-grid"></div>
      <div className="bg-gradient"></div>
    </section>
  );
};

export default TaglineSection;