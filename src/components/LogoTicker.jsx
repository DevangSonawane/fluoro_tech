import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { src: '/partners/partner_1.jpeg', alt: 'Partner 1' },
  { src: '/partners/partner_2.png', alt: 'Partner 2' },
  { src: '/partners/partner_3.jpeg', alt: 'Partner 3' },
  { src: '/partners/partner_4.png', alt: 'Partner 4' },
  { src: '/partners/partner_5.jpeg', alt: 'Partner 5' },
  { src: '/partners/partner_6.png', alt: 'Partner 6' },
  { src: '/partners/partner_7.jpeg', alt: 'Partner 7' },
  { src: '/partners/partner_8.png', alt: 'Partner 8' },
  { src: '/partners/partner_9.jpeg', alt: 'Partner 9' },
  { src: '/partners/partner_10.png', alt: 'Partner 10' },
  { src: '/partners/partner_11.png', alt: 'Partner 11' },
  { src: '/partners/partner_12.png', alt: 'Partner 12' },
  { src: '/partners/partner_13.jpeg', alt: 'Partner 13' },
  { src: '/partners/partner_14.png', alt: 'Partner 14' },
];

// Duplicate the list to create a seamless loop
const tickerPartners = [...partners, ...partners];

const LogoTicker = () => {
  return (
    <div className="bg-white py-12 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
          Trusted by Industry Leaders
        </p>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex gap-16 items-center flex-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 60, // Slowed down from 30 to 60 seconds
            ease: "linear",
          }}
          style={{ width: "max-content" }}
        >
          {tickerPartners.map((partner, index) => (
            <div
              key={`${partner.src}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-20 w-auto object-contain max-w-[180px]"
              />
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Overlays for smooth fade effect at edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default LogoTicker;
