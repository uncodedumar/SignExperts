"use client";
import React, { useEffect, useMemo, useRef, useState } from 'react';

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
] as const;

const ContactForm: React.FC = () => {
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [selectedState, setSelectedState] = useState<string>("");
  const stateButtonRef = useRef<HTMLButtonElement | null>(null);
  const stateMenuRef = useRef<HTMLDivElement | null>(null);
  const [stateMenuStyle, setStateMenuStyle] = useState<React.CSSProperties>({});

  const stateOptions = useMemo(() => Array.from(US_STATES), []);

  const updateStateMenuPosition = () => {
    const btn = stateButtonRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const padding = 8;
    const maxHeight = Math.max(240, window.innerHeight - rect.bottom - padding);

    setStateMenuStyle({
      position: "fixed",
      top: Math.min(rect.bottom + 6, window.innerHeight - 40),
      left: Math.max(padding, rect.left),
      width: rect.width,
      maxHeight,
      zIndex: 60,
    });
  };

  useEffect(() => {
    if (!isStateOpen) return;
    updateStateMenuPosition();

    const onScrollOrResize = () => updateStateMenuPosition();
    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("resize", onScrollOrResize);

    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as Node | null;
      if (!t) return;
      if (stateButtonRef.current?.contains(t)) return;
      if (stateMenuRef.current?.contains(t)) return;
      setIsStateOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsStateOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isStateOpen]);

  return (
    <div
      id="contact-form"
      className="bg-white flex justify-center px-6 py-14 md:px-12 md:py-16 lg:py-12 font-sans"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-10 items-start">
        
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
        <div className="bg-[#f0f2f5] p-8 md:p-10 rounded-[2.5rem] shadow-sm relative overflow-visible">
          {/* Decorative Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/textures/grid-me.png')]" />

          <form 
            action="https://formspree.io/f/mreonybj" 
            method="POST" 
            encType="multipart/form-data"
            className="space-y-5 relative z-10"
          >
            {/* Full Name + Contact Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              <label htmlFor="businessLocation" className="text-sm font-semibold text-gray-600 ml-1">
                Business location
              </label>
              <input
                type="text"
                id="businessLocation"
                name="businessLocation"
                placeholder="City, IL or full address"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-gray-800"
              />
            </div>

            {/* Zipcode + State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="zipcode" className="text-sm font-semibold text-gray-600 ml-1">
                  Zipcode
                </label>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  inputMode="numeric"
                  placeholder="60803"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-gray-800"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="state" className="text-sm font-semibold text-gray-600 ml-1">
                  State
                </label>
                <input type="hidden" name="state" value={selectedState} />
                <button
                  ref={stateButtonRef}
                  id="state"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={isStateOpen}
                  onClick={() => setIsStateOpen((v) => !v)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-gray-800 text-left flex items-center justify-between"
                >
                  <span className={selectedState ? "text-gray-800" : "text-gray-400"}>
                    {selectedState || "Select a state"}
                  </span>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${isStateOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {isStateOpen && (
              <div
                ref={stateMenuRef}
                style={stateMenuStyle}
                className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-auto"
                role="listbox"
                aria-label="State"
              >
                {stateOptions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    role="option"
                    aria-selected={selectedState === s}
                    onClick={() => {
                      setSelectedState(s);
                      setIsStateOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      selectedState === s ? "bg-gray-100 font-semibold text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* File Upload */}
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="designFile" className="text-sm font-semibold text-gray-600 ml-1">
                Got Any Design In Mind?
              </label>
              <input
                type="file"
                id="designFile"
                name="designFile"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-gray-800 file:mr-4 file:rounded-lg file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-200"
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
                placeholder="Describe what type of signs you want with dimensions."
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