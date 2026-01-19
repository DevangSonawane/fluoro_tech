import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './ui/Button';
import ParticlesBackground from './ParticlesBackground';
import GradientText from './ui/GradientText';

const slides = [
  {
    id: 1,
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Industrial%20chemical%20processing%20plant%20with%20pipes%20and%20storage%20tanks%2C%20clean%20modern%20aesthetic%2C%20high%20resolution&image_size=landscape_16_9",
    title: "Advanced Fluoropolymer Coatings",
    description: "Leading the industry with high-performance protective solutions for extreme environments.",
    cta: "Explore Products",
    link: "/products"
  },
  {
    id: 2,
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Automotive%20manufacturing%20line%20robotic%20arms%20painting%20car%20body%2C%20high%20tech%2C%20clean&image_size=landscape_16_9",
    title: "Precision Engineering",
    description: "Engineered for durability and precision in automotive and industrial applications.",
    cta: "Technical Data",
    link: "/technical-data"
  },
  {
    id: 3,
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Pharmaceutical%20laboratory%20equipment%20clean%20room%20stainless%20steel%2C%20bright%20lighting&image_size=landscape_16_9",
    title: "Unmatched Chemical Resistance",
    description: "Superior protection against over 400 corrosive chemicals and solvents.",
    cta: "Contact Us",
    link: "/contact"
  }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-gray-900">
      <ParticlesBackground />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-6 text-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
                <GradientText colors={["#FFFFFF", "#93C5FD", "#3B82F6", "#FFFFFF"]}>
                  {slides[currentIndex].title}
                </GradientText>
              </h1>
              <p className="mb-8 text-xl text-gray-200 md:text-2xl">
                {slides[currentIndex].description}
              </p>
              <Button
                to={slides[currentIndex].link}
                variant="primary"
              >
                {slides[currentIndex].cta}
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-blue-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
