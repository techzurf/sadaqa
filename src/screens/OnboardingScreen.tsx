import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Heart, LineChart, ArrowRight } from 'lucide-react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const slides = [
  {
    title: 'Give Zakat with Confidence',
    description: 'Verified beneficiaries and 100% transparent distribution.',
    icon: ShieldCheck,
  },
  {
    title: 'Support Families Directly',
    description: 'Sponsor food, education, and medical needs for those who need it most.',
    icon: Heart,
  },
  {
    title: 'Track Your Impact',
    description: 'View your donation history and see the real impact of your contributions.',
    icon: LineChart,
  },
];

export function OnboardingScreen({ onNavigate }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      onNavigate('login');
    }
  };

  return (
    <div className="flex flex-col w-full h-full bg-white relative">
      <div className="flex-1 relative flex flex-col justify-center items-center p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center max-w-sm w-full"
          >
            <div className="w-32 h-32 bg-teal-50 rounded-full flex items-center justify-center mb-10 shadow-inner">
              {React.createElement(slides[currentSlide].icon, {
                className: "w-16 h-16 text-primary",
                strokeWidth: 1.5,
              })}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{slides[currentSlide].title}</h2>
            <p className="text-gray-500 mb-8">{slides[currentSlide].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-6 pb-12 flex flex-col items-center w-full">
        <div className="flex space-x-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-gray-200'
              }`}
            />
          ))}
        </div>

        <div className="flex w-full gap-4">
          {currentSlide < slides.length - 1 ? (
            <button
              onClick={() => onNavigate('login')}
              className="flex-1 py-4 font-semibold text-gray-500 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              Skip
            </button>
          ) : null}
          <button
            onClick={nextSlide}
            className={`flex items-center justify-center py-4 font-semibold text-white bg-primary rounded-2xl shadow-lg shadow-teal-900/20 active:scale-[0.98] transition-transform ${
              currentSlide < slides.length - 1 ? 'flex-[2]' : 'w-full'
            }`}
          >
            {currentSlide < slides.length - 1 ? 'Next' : 'Get Started'}
            {currentSlide < slides.length - 1 && <ArrowRight className="ml-2 w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
