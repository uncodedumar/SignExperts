import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div id="contact-form" className="bg-white min-h-screen flex items-center  justify-center p-6 md:p-12 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Content */}
        <div className="space-y-8">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md border border-gray-100">
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-gray-900 tracking-tight">
              Contact us
            </h1>
            <p className="text-gray-500 text-lg max-w-md leading-relaxed">
              We are always looking for ways to improve our products and services. 
              Contact us and let us know how we can help you.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-gray-400">
            <span>sign.eexperts@gmail.com</span>
            <span>•</span>
            <span>929 392-8337</span>
            <span>•</span>
            <span>12632 S Kroll Dr, Alsip, IL 60803</span>
          </div>
          
          {/* World Map section has been removed from here */}
        </div>

        {/* Right Side: Form Card */}
        <div className="bg-[#f0f2f5] p-8 md:p-10 rounded-[2.5rem] shadow-sm relative overflow-hidden">
          {/* Decorative Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>

          <form 
            action="https://formspree.io/f/mreonybj" 
            method="POST" 
            className="space-y-5 relative z-10"
          >
            {/* Full Name */}
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="firstName" className="text-sm font-semibold text-gray-600 ml-1">
                Full name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Manu Arora"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-gray-800"
                required
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="email" className="text-sm font-semibold text-gray-600 ml-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-gray-800"
                required
              />
            </div>

            {/* Contact Number */}
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="contactNumber" className="text-sm font-semibold text-gray-600 ml-1">
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                placeholder="+1 (800) 123-4567"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-gray-800"
              />
            </div>

            {/* Business Name */}
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="businessName" className="text-sm font-semibold text-gray-600 ml-1">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                placeholder="Sign Experts "
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-gray-800"
              />
            </div>

             {/* Business Location */}
             <div className="flex flex-col space-y-1.5">
              <label htmlFor="businessName" className="text-sm font-semibold text-gray-600 ml-1">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                placeholder="Sign Experts "
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-gray-800"
              />
            </div>

            {/* Message Area */}
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="requirements" className="text-sm font-semibold text-gray-600 ml-1">
                Message
              </label>
              <textarea
                id="requirements"
                name="requirements"
                rows={4}
                placeholder="Type your message here"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-gray-800 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="bg-[#1a1a1a] text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition-all shadow-md active:scale-95"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;