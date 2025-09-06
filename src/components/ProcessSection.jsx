import React from 'react';

const ProcessSection = () => {
  const steps = [
    'Discover',
    'Design', 
    'Develop',
    'Test',
    'Deploy',
    'Support'
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          How We Turn Ideas Into Reality
        </h2>
        <p className="text-lg text-black mb-12 max-w-3xl mx-auto">
          Each of our products follows our proven 6-step agile process
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="w-18 h-18  md:w-24 md:h-24 bg-black text-white rounded-full flex items-center justify-center font-semibold text-xs md:text-sm mb-2">
                  {step}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block w-8 h-0.5 bg-black mx-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;