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
        <div className="sub-tagline-container">
          <span className="transform-icon">◆</span>
          <p className="sub-tagline">That Transform Ideas Into Reality</p>
          <span className="transform-icon">◆</span>
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;