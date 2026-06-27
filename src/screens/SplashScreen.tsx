import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { HeartHandshake } from 'lucide-react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export function SplashScreen({ onNavigate }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNavigate('onboarding');
    }, 2500);
    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-primary to-teal-900 text-white p-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 islamic-pattern"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center z-10"
      >
        <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mb-6 shadow-xl border border-white/30">
          <HeartHandshake className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Zakat Connect</h1>
        <p className="text-teal-100 font-medium text-center opacity-90 tracking-wide">
          Connecting Donors with Those in Need
        </p>
      </motion.div>
    </div>
  );
}
