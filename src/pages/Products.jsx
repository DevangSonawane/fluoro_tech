import React, { useState, useRef, useEffect } from 'react';
import products from '../data/products.json';
import { Check, ArrowRight, Shield, Zap, Thermometer, Layers } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { FadeIn } from '../components/animations/FadeIn';

const ProductSection = ({ product, index, setActiveProduct }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveProduct(index);
    }
  }, [isInView, index, setActiveProduct]);

  return (
    <div 
      ref={ref} 
      className={`min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-40'}`}
    >
      <div className="max-w-xl">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase mb-6">
          0{index + 1} — Product Series
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
          {product.name}
        </h2>
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          {product.description}
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 mb-8">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Shield className="w-4 h-4" /> Key Features
          </h3>
          <ul className="space-y-4">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-green-600" />
                </span>
                <span className="text-slate-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4" /> Ideal Applications
          </h3>
          <div className="flex flex-wrap gap-3">
            {product.applications.map((app, idx) => (
              <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
                {app}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header - Just a title to start */}
      <div className="bg-slate-900 pt-32 pb-16 px-6 text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Perfection</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Discover our range of advanced fluoropolymer coatings, meticulously crafted for extreme industrial performance.
          </p>
        </FadeIn>
      </div>

      <div className="relative flex flex-col md:flex-row">
        {/* Left Scrollable Content */}
        <div className="w-full md:w-1/2 z-10 relative">
          {products.map((product, index) => (
            <ProductSection 
              key={product.id} 
              product={product} 
              index={index} 
              setActiveProduct={setActiveProduct} 
            />
          ))}
          {/* Spacer at bottom */}
          <div className="h-[20vh]"></div>
        </div>

        {/* Right Sticky Image Container */}
        <div className="hidden md:block w-1/2 h-screen sticky top-0 right-0 bg-slate-900 overflow-hidden">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                activeProduct === index 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : activeProduct > index 
                    ? 'opacity-0 scale-95 -translate-y-10' 
                    : 'opacity-0 scale-105 translate-y-10'
              }`}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              
              {/* Image */}
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />

              {/* Decorative Elements on Image */}
              <div className="absolute bottom-12 left-12 z-20">
                <div className="flex items-center gap-4 text-white/80 mb-2">
                  <Thermometer className="w-5 h-5" />
                  <span className="text-sm font-mono tracking-widest uppercase">Thermal Resistance</span>
                </div>
                <div className="h-px w-24 bg-white/30 mb-4"></div>
                <h3 className="text-3xl font-bold text-white">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
          
          {/* Progress Bar */}
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/10 z-30 flex flex-col">
            <div 
              className="bg-blue-500 w-full transition-all duration-500"
              style={{ height: `${((activeProduct + 1) / products.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Mobile Image Fallback (Optional, or handled by hiding the sticky section on mobile) */}
      {/* The current layout handles mobile by just stacking the text sections. 
          To make mobile better, we could inject the image inside the ProductSection for mobile only. */}
    </div>
  );
};

export default Products;
