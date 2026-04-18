import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="w-max-70% mx-auto p-8 font-['Lexend',_sans-serif]">
        <h1 className="text-7xl font-bold text-center mb-16 tracking-tight text-black">
          Get in touch to set up an intro call
        </h1>

        <form 
          action="https://formspree.io/f/mreonybj" 
          method="POST" 
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            
            {/* First Name */}
            <div className="flex flex-col group">
              <label 
                htmlFor="firstName" 
                className="text-sm font-semibold mb-2 text-black transition-all duration-300 group-focus-within:translate-x-1 group-focus-within:text-blue-600"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="border-b-2 border-black focus:outline-none py-1 bg-transparent text-black focus:border-blue-600 transition-colors"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col group">
              <label 
                htmlFor="lastName" 
                className="text-sm font-semibold mb-2 text-black transition-all duration-300 group-focus-within:translate-x-1 group-focus-within:text-blue-600"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="border-b-2 border-black focus:outline-none py-1 bg-transparent text-black focus:border-blue-600 transition-colors"
              />
            </div>

            {/* Business Name */}
            <div className="flex flex-col md:col-span-2 group">
              <label 
                htmlFor="businessName" 
                className="text-sm font-semibold mb-2 text-black transition-all duration-300 group-focus-within:translate-x-1 group-focus-within:text-blue-600"
              >
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                className="border-b-2 border-black focus:outline-none py-1 bg-transparent text-black focus:border-blue-600 transition-colors"
              />
            </div>

            {/* Contact Number */}
            <div className="flex flex-col group">
              <label 
                htmlFor="contactNumber" 
                className="text-sm font-semibold mb-2 text-black transition-all duration-300 group-focus-within:translate-x-1 group-focus-within:text-blue-600"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                className="border-b-2 border-black focus:outline-none py-1 bg-transparent text-black focus:border-blue-600 transition-colors"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col group">
              <label 
                htmlFor="email" 
                className="text-sm font-semibold mb-2 text-black transition-all duration-300 group-focus-within:translate-x-1 group-focus-within:text-blue-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border-b-2 border-black focus:outline-none py-1 bg-transparent text-black focus:border-blue-600 transition-colors"
              />
            </div>

            {/* Business Address */}
            <div className="flex flex-col md:col-span-1 group">
              <label 
                htmlFor="businessAddress" 
                className="text-sm font-semibold mb-2 text-black transition-all duration-300 group-focus-within:translate-x-1 group-focus-within:text-blue-600"
              >
                Business Address
              </label>
              <input
                type="text"
                id="businessAddress"
                name="businessAddress"
                className="border-b-2 border-black focus:outline-none py-1 bg-transparent text-black focus:border-blue-600 transition-colors"
              />
            </div>

            {/* Zip and State Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col group">
                <label 
                  htmlFor="zipCode" 
                  className="text-sm font-semibold mb-2 text-center text-black transition-all duration-300 group-focus-within:scale-105 group-focus-within:text-blue-600"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  className="border-b-2 border-black focus:outline-none py-1 bg-transparent text-black focus:border-blue-600 transition-colors"
                />
              </div>
              <div className="flex flex-col group">
                <label 
                  htmlFor="state" 
                  className="text-sm font-semibold mb-2 text-center text-black transition-all duration-300 group-focus-within:scale-105 group-focus-within:text-blue-600"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="border-b-2 border-black focus:outline-none py-1 bg-transparent text-black focus:border-blue-600 transition-colors"
                />
              </div>
            </div>

            {/* Product Type (Dropdown) */}
            <div className="flex flex-col group">
              <label 
                htmlFor="productType" 
                className="text-sm font-semibold mb-2 text-black transition-all duration-300 group-focus-within:translate-x-1 group-focus-within:text-blue-600"
              >
                Product Type (eg. Window Signs)
              </label>
              <div className="relative">
                <select
                  id="productType"
                  name="productType"
                  className="w-full border-b-2 border-black focus:outline-none py-1 bg-transparent appearance-none text-black focus:border-blue-600 transition-colors"
                >
                  <option value="window-signs">Window Signs</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-0 bottom-2 pointer-events-none text-black">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-end">
              <label className="w-full border-2 border-black py-4 text-center cursor-pointer bg-[#d1d1d1] hover:bg-black hover:text-white transition-all duration-300 font-medium text-black">
                Upload Files
                <input type="file" name="attachment" className="hidden" />
              </label>
            </div>

            {/* Requirements Textarea */}
            <div className="flex flex-col md:col-span-2 group">
              <label 
                htmlFor="requirements" 
                className="text-sm font-semibold mb-2 text-black transition-all duration-300 group-focus-within:translate-x-1 group-focus-within:text-blue-600"
              >
                Please Use This Area To Provide Any Other Information About Your Requirements
              </label>
              <textarea
                id="requirements"
                name="requirements"
                rows={1}
                className="border-b-2 border-black focus:outline-none py-1 bg-transparent resize-none overflow-hidden text-black focus:border-blue-600 transition-colors"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="w-full md:w-64 border-2 border-black py-3 px-8 bg-[#d1d1d1] hover:bg-black hover:text-white transition-all duration-300 font-semibold text-lg text-black"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;