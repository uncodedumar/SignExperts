import React from 'react';
import { Search, PenTool, Settings, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    title: 'Consultancy',
    description: 'We take the time to explore your brand and understand how we can develop it manually.',
    icon: <Search className="w-8 h-8 text-white" />,
  },
  {
    title: 'The Branding',
    description: 'We understand how important your brand is and that’s why our team of designers work.',
    icon: <PenTool className="w-8 h-8 text-white" />,
  },
  {
    title: 'Manufacturing',
    description: 'Transparency & communication are key to staying on track. We completely follow.',
    icon: <Settings className="w-8 h-8 text-white" />,
  },
  {
    title: 'Installation',
    description: 'We take pride in our production capabilities and invest heavily in our factory.',
    icon: <CheckCircle className="w-8 h-8 text-white" />,
  },
];

const WorkProcess = () => {
  return (
    <section className="bg-[#101b55] text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="md:w-1/2">
            <span className="uppercase tracking-widest text-sm font-semibold text-gray-300">
              How We Achieve
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Our Work Process
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-300 text-lg leading-relaxed">
              Created for impact and awareness, billboard signs can be a showstopper for your business. 
              In an increasingly digital world, here is how we make it happen.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {processSteps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Icon Container */}
              <div className="relative mb-8 inline-block">
                <div className="w-20 h-20 border border-gray-500 flex items-center justify-center relative bg-[#101b55] z-10">
                  {step.icon}
                  {/* Step Number Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-[#ffb92d] text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    
                  </div>
                </div>
                
                {/* Connecting Line (Only visible on Large screens for non-last items) */}
                {index !== processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-[calc(100%+3rem)] h-[1px] bg-gray-600 -translate-y-1/2 z-0">
                     <div className="absolute right-0 -top-1 border-t border-r border-gray-600 w-2 h-2 rotate-45"></div>
                  </div>
                )}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;