import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'Cipla', domain: 'cipla.com' },
  { name: 'Dr. Reddy\'s', domain: 'drreddys.com' },
  { name: 'Sun Pharma', domain: 'sunpharma.com' },
  { name: 'Lupin', domain: 'lupin.com' },
  { name: 'Biocon', domain: 'biocon.com' },
  { name: 'GSK', domain: 'gsk.com' },
  { name: 'L&T', domain: 'larsentoubro.com' },
  { name: 'UPL', domain: 'upl-ltd.com' },
  { name: 'Alembic', domain: 'alembicpharmaceuticals.com' },
  { name: 'IPCA', domain: 'ipca.com' },
  { name: 'Atul', domain: 'atul.co.in' },
  { name: 'Deepak Nitrite', domain: 'godeepak.com' },
];

// Duplicate the list to create a seamless loop
const tickerClients = [...clients, ...clients];

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
          {tickerClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={`https://logo.clearbit.com/${client.domain}?size=128`}
                alt={`${client.name} Logo`}
                className="h-16 w-auto object-contain max-w-[180px]"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=random&color=fff&size=128`;
                }}
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
