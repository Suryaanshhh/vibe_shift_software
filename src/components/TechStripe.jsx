import LogoLoop from './TechstackLoop';
import './TechStripe.css';

const TechStripe = () => {
  const techStack = [
    { node: <span className="tech-item">React</span>, ariaLabel: "React" },
    { node: <span className="tech-item">JavaScript</span>, ariaLabel: "JavaScript" },
    { node: <span className="tech-item">Node.js</span>, ariaLabel: "Node.js" },
    { node: <span className="tech-item">Python</span>, ariaLabel: "Python" },
    { node: <span className="tech-item">TypeScript</span>, ariaLabel: "TypeScript" },
    { node: <span className="tech-item">Next.js</span>, ariaLabel: "Next.js" },
    { node: <span className="tech-item">MongoDB</span>, ariaLabel: "MongoDB" },
    { node: <span className="tech-item">PostgreSQL</span>, ariaLabel: "PostgreSQL" },
    { node: <span className="tech-item">AWS</span>, ariaLabel: "AWS" },
    { node: <span className="tech-item">Docker</span>, ariaLabel: "Docker" },
    { node: <span className="tech-item">GraphQL</span>, ariaLabel: "GraphQL" },
    { node: <span className="tech-item">Redis</span>, ariaLabel: "Redis" },
    { node: <span className="tech-item">Data Cleaning</span>, ariaLabel: "Data Cleaning" },
    { node: <span className="tech-item">Flutter</span>, ariaLabel: "Flutter" },
    { node: <span className="tech-item">Machine Learning</span>, ariaLabel: "Machine Learning" },
    { node: <span className="tech-item">AI</span>, ariaLabel: "AI" },
    { node: <span className="tech-item">Power BI</span>, ariaLabel: "Power BI" },
  ];

  return (
    <section className="tech-stripe">
      <div className="tech-stripe-content">
        <LogoLoop
          logos={techStack}
          speed={60}
          direction="left"
          logoHeight={32}
          gap={48}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutColor="#000"
          ariaLabel="Technology stack"
          className="tech-loop"
        />
      </div>
    </section>
  );
};

export default TechStripe;