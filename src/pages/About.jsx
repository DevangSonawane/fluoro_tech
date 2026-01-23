import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Award, History, Target } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { SlideUp } from '../components/animations/SlideUp';
import Button from '../components/ui/Button';
import SpotlightCard from '../components/ui/SpotlightCard';
import GradientText from '../components/ui/GradientText';

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight font-display">
              <GradientText colors={["#FFFFFF", "#93c5fd", "#3b82f6", "#FFFFFF"]}>
                About Fluoro Tech
              </GradientText>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-300">
              Pioneering excellence in industrial coating solutions since 2001.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Leadership Section */}
        <div className="mb-24">
          <SlideUp className="glass-panel rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <img 
                  src="/owner.png" 
                  alt="Mr. Yuwaraj Sonawane" 
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent lg:hidden"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white lg:hidden">
                  <h2 className="text-3xl font-bold">Mr. Yuwaraj Sonawane</h2>
                  <p className="text-blue-300 font-medium text-lg">Founder & Proprietor</p>
                </div>
              </div>
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="hidden lg:block mb-6">
                  <h2 className="text-4xl font-bold text-slate-900">Mr. Yuwaraj Sonawane</h2>
                  <p className="text-blue-600 font-medium text-xl mt-2">Founder & Proprietor</p>
                </div>
                
                <div className="prose prose-lg text-slate-600 mb-8">
                  <p className="mb-4">
                    With over two decades of expertise in the industrial coatings sector, Mr. Yuwaraj Sonawane has established Fluoro Tech Engineering Works as a trusted name in corrosion protection and chemical resistance solutions.
                  </p>
                  <p className="mb-4">
                    Founded in 2001, his vision was to provide world-class fluoropolymer coating services that meet the rigorous demands of the pharmaceutical, chemical, and engineering industries. Under his leadership, the company has grown from a specialized workshop to a premier service provider known for quality and reliability.
                  </p>
                  <p>
                    "Our mission is not just to coat surfaces, but to extend the life of critical assets and ensure the safety and efficiency of industrial operations through innovation and excellence."
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.linkedin.com/company/fluoro-tech-engineering-works/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-full font-medium hover:bg-[#006097] transition-colors shadow-lg shadow-blue-900/20"
                  >
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>

        {/* Company Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <SlideUp delay={0.2} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <History className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our History</h3>
            <p className="text-slate-600">
              Established in 2001 in Thane, Maharashtra, we have steadily grown our capabilities and expertise, serving hundreds of satisfied clients across India.
            </p>
          </SlideUp>
          
          <SlideUp delay={0.3} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-600">
              To deliver superior protective coating solutions that enhance equipment longevity, performance, and safety in harsh industrial environments.
            </p>
          </SlideUp>

          <SlideUp delay={0.4} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Promise</h3>
            <p className="text-slate-600">
              We utilize only high-grade materials like Teflon PFA, Halar, and ETFE, ensuring every project meets the highest industry standards.
            </p>
          </SlideUp>
        </div>
      </div>
    </div>
  );
};

export default About;
