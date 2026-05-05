import React from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-end pr-10 lg:pr-24">
      {/* Background Google Map */}
      <div className="absolute inset-0 z-0">
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.360062537935!2d-87.74831321649258!3d41.66265580480328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e39fa1dbd33ab%3A0x20184affe873b8e4!2sSign%20Experts!5e1!3m2!1sen!2s!4v1777144819553!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sign Experts Alsip location on Google Maps"
        ></iframe>


      </div>

      {/* Information Card overlay */}
      <div className="relative z-10 w-full max-w-md bg-white p-8 md:p-12 shadow-2xl rounded-sm">
        <h2 className="text-[#1a3a5a] text-3xl font-bold mb-8">
          We always welcome our patients
        </h2>

        <div className="space-y-6">
          {/* Phone */}
          <div className="flex items-start gap-4">
            <Phone className="w-5 h-5 text-[#1a3a5a] mt-1 shrink-0" />
            <p className="text-gray-600 font-medium">929 392-8337</p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 border-t pt-6 border-gray-100">
            <MapPin className="w-5 h-5 text-red-500 mt-1 shrink-0" />
            <p className="text-gray-600 leading-relaxed">
            12632 S Kroll Dr, Alsip, IL 60803
            </p>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 border-t pt-6 border-gray-100">
            <Mail className="w-5 h-5 text-[#1a3a5a] mt-1 shrink-0" />
            <p className="text-gray-600">sign.eexperts@gmail.com</p>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4 border-t pt-6 border-gray-100">
            <Clock className="w-5 h-5 text-[#1a3a5a] mt-1 shrink-0" />
            <div className="text-sm text-gray-600 space-y-2">
              <p><span className="font-semibold text-gray-800">Monday - Friday:</span> 10 AM - 7 PM</p>
              <p><span className="font-semibold text-gray-800">Saturday:</span> 9 AM - 6 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;