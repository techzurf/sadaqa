import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, ArrowRight, Apple, HeartHandshake } from 'lucide-react';
import { Screen } from '../types';
import { cn } from '../utils';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export function LoginScreen({ onNavigate }: Props) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <div className="flex flex-col w-full h-full bg-slate-50 relative overflow-y-auto">
      <div className="absolute top-0 left-0 w-full h-64 bg-primary rounded-b-[3rem] -z-0">
        <div className="absolute inset-0 opacity-10 islamic-pattern"></div>
      </div>

      <div className="flex-1 px-6 pt-20 pb-8 z-10 flex flex-col">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
             <HeartHandshake className="w-10 h-10 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h1>
        <p className="text-teal-100 text-center mb-10">
          {isLogin ? 'Login to continue your charity journey' : 'Join our community of donors'}
        </p>

        <motion.div 
          className="bg-white p-6 rounded-3xl shadow-xl flex-1"
          layout
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="popLayout">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1"
                >
                  <label className="text-sm font-medium text-gray-700 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700 ml-1">Email or Phone</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter email or phone"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              {isLogin && (
                <div className="flex justify-end mt-2">
                  <button type="button" className="text-sm font-medium text-primary hover:underline">
                    Forgot Password?
                  </button>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-6 bg-secondary text-white font-semibold rounded-2xl shadow-lg shadow-amber-500/30 flex items-center justify-center active:scale-[0.98] transition-transform"
            >
              {isLogin ? 'Login' : 'Register'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </form>

          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-6">
              <div className="border-t border-gray-200 w-full absolute"></div>
              <span className="bg-white px-4 text-sm text-gray-500 z-10">Or continue with</span>
            </div>
            
            <div className="flex space-x-4">
              <button type="button" className="flex-1 py-3 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center text-gray-700 font-medium active:bg-gray-100 transition-colors">
                 <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button type="button" className="flex-1 py-3 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center text-gray-700 font-medium active:bg-gray-100 transition-colors">
                <Apple className="w-5 h-5 mr-2" />
                Apple
              </button>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              type="button" 
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary font-semibold hover:underline"
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
