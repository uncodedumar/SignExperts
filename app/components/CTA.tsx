import React from 'react';

const GetAQuoteCTA = () => {
  return (
    /* Changed className to include bg-white */
    <section className="w-full flex justify-center py-10 bg-white">
      <div className="w-[90%] bg-[#080E33] rounded-[20px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-start">
          <h2 className="text-[#FFC107] text-4xl md:text-5xl font-medium tracking-tight">
            Get a Quote
          </h2>
          
          <div className="flex items-center gap-3 mt-2 w-full">
            <span className="text-white text-sm md:text-base font-light whitespace-nowrap">
Get your sign done by us             </span>
            {/* The horizontal decorative line */}
            <div className="h-[1px] bg-gray-500 w-24 md:w-32 hidden sm:block"></div>
          </div>
        </div>

        {/* Right Side: Button */}
        <button className="bg-[#FFC107] hover:bg-[#e5ac00] transition-colors duration-200 text-[#080E33] px-8 py-3 rounded-lg text-lg md:text-xl font-medium">
          Join Sign Experts
        </button>

      </div>
    </section>
  );
};

export default GetAQuoteCTA;