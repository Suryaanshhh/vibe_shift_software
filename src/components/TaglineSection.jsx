import './TaglineSection.css';

const TaglineSection = () => {
  return (
    <section className="tagline-section">
      <div className="tagline-content">
        <h1 className="main-tagline">
          <div className="tagline-row">
            <span className="tagline-icon shift-icon">⚡</span>
            <p>Shift Smarter</p>
          </div>
          <div className="tagline-row">
            <span className="tagline-icon build-icon">⚙</span>
            <p>Build Faster</p>
          </div>
        </h1>
      </div>
    </section>
  );
};

export default TaglineSection;