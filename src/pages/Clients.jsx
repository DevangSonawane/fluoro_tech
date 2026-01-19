import React from 'react';
import clientsData from '../data/clients.json';
import { FadeIn } from '../components/animations/FadeIn';
import { SlideUp } from '../components/animations/SlideUp';

const Clients = () => {
  // Optimize rendering by using simple standard HTML/CSS for the list instead of complex animations for every single item
  // Only animate the main containers
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">
              Our Valued Clients
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-300">
              We are proud to serve industry leaders across various sectors, delivering quality and reliability.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          {Object.entries(clientsData).map(([category, clients], index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-slate-50/50 px-8 py-6 border-b border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {category}
                </h2>
              </div>
              <div className="p-8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-8">
                  {clients.map((client, idx) => (
                    <li key={idx} className="flex items-center text-slate-600 font-medium hover:text-blue-600 transition-colors group cursor-default">
                      <span className="w-2 h-2 bg-slate-300 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></span>
                      {client}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
