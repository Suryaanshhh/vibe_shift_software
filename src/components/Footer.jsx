import './Footer.css';
import logo from '../assets/dummylogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-header">
              <img src={logo} alt="VibeShift Logo" className="footer-logo" />
              <h3 className="footer-title">VibeShiftSoftwares</h3>
            </div>
            <p className="footer-description">
              Building digital experiences that transform ideas into reality. 
              We create innovative solutions for modern businesses.
            </p>
          </div>

          {/* Links Section */}
          <div className="footer-links-section">
            <div className="footer-column">
              <h4 className="footer-subtitle">Services</h4>
              <ul className="footer-links">
                <li><a  className="footer-link">Web Development</a></li>
                <li><a  className="footer-link">Mobile Apps</a></li>
                <li><a  className="footer-link">UI/UX Design</a></li>
                <li><a  className="footer-link">AI & Machine Learning</a></li>
                <li><a  className="footer-link">Data Analytics</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-subtitle">Contact</h4>
              <div className="footer-contact">
                <p className="contact-item">
                  <span className="contact-label">Email</span>
                  <a href="mailto:hello@vibeshiftsoftwares.com" className="contact-link">
                  vibeshiftsoftware@gmail.com
                  </a>
                </p>
                <p className="contact-item">
                  <span className="contact-label">Let's Build Together</span>
                  <span className="contact-text">Ready to transform your ideas?</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 VibeShiftSoftwares. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;