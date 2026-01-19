import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, Layers, ArrowRight, Beaker, Users, CheckCircle } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import LogoTicker from '../components/LogoTicker';
import { FadeIn } from '../components/animations/FadeIn';
import { SlideUp } from '../components/animations/SlideUp';
import Button from '../components/ui/Button';
import Counter from '../components/ui/Counter';
import SpotlightCard from '../components/ui/SpotlightCard';
import TextReveal from '../components/ui/TextReveal';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSlider />

      {/* Client Logo Ticker */}
      <LogoTicker />

      {/* Stats Section */}
      <div className="bg-slate-900 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <FadeIn delay={0.1} className="p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <Beaker className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                <Counter value={450} suffix="+" />
              </div>
              <div className="text-slate-400 font-medium">Chemicals Resistant</div>
            </FadeIn>
            <FadeIn delay={0.2} className="p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                <Counter value={100} suffix="+" />
              </div>
              <div className="text-slate-400 font-medium">Satisfied Clients</div>
            </FadeIn>
            <FadeIn delay={0.3} className="p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <Layers className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                <Counter value={4} />
              </div>
              <div className="text-slate-400 font-medium">Core Technologies</div>
            </FadeIn>
            <FadeIn delay={0.4} className="p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                <Counter value={100} suffix="%" />
              </div>
              <div className="text-slate-400 font-medium">Quality Assurance</div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <div className="mt-2 flex justify-center">
              <TextReveal>
                <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Engineering Excellence
                </h2>
              </TextReveal>
            </div>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
              We deliver industrial-grade solutions tailored to the most demanding environments, ensuring longevity and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SpotlightCard className="p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Superior Protection</h3>
              <p className="text-slate-600 leading-relaxed">
                Our coatings provide unmatched resistance to corrosion, chemicals, and extreme temperatures, significantly extending the lifespan of your critical equipment.
              </p>
            </SpotlightCard>
            
            <SpotlightCard className="p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <Layers className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Versatile Applications</h3>
              <p className="text-slate-600 leading-relaxed">
                From pharmaceutical vessels to chemical storage tanks, our diverse range of polymers (ETFE, PFA, Halar) suits every industrial requirement.
              </p>
            </SpotlightCard>
            
            <SpotlightCard className="p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <Activity className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Proven Performance</h3>
              <p className="text-slate-600 leading-relaxed">
                Trusted by leading companies in Pharma, Chemical, and Engineering sectors. We deliver consistent quality and reliability in every project.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="px-6 py-12 md:p-16 text-center md:text-left md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Ready to protect your assets?
                </h2>
                <p className="mt-4 text-lg text-blue-100 max-w-2xl">
                  Get a comprehensive quote for your coating needs. Our experts are ready to assist you with technical specifications and application details.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:ml-8 flex-shrink-0">
                <Button
                  to="/contact"
                  variant="secondary"
                  icon={ArrowRight}
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Home;
