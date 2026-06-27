import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, ShieldCheck, Heart, Stethoscope, BookOpen, Utensils, AlertTriangle, ArrowRight } from 'lucide-react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export function HomeScreen({ onNavigate }: Props) {
  return (
    <div className="flex flex-col w-full h-full bg-[#F8FAFC] relative pb-24 overflow-y-auto hide-scrollbar">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none islamic-pattern z-0"></div>
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 pt-6 pb-4 flex justify-between items-center z-10 sticky top-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0F766E] rounded-[12px] flex items-center justify-center shadow-md shadow-teal-900/20">
            <HeartHandshake className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-[#1F2937] tracking-tight">Zakat<span className="text-[#0F766E]">Connect</span></span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden cursor-pointer" onClick={() => onNavigate('profile')}>
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <div className="px-4 pt-4 relative z-10 flex flex-col space-y-4">
        
        {/* Profile Greeting Card */}
        <div className="bg-[#0F766E] rounded-[20px] p-5 text-white shadow-md flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <p className="text-teal-100 text-xs font-bold uppercase tracking-wider mb-1">Assalamu Alaikum,</p>
            <h2 className="text-xl font-bold">Ahmad Abdullah</h2>
          </div>
        </div>
        
        {/* Statistics Cards - Grid */}
        <div className="grid grid-cols-3 gap-3 relative z-20">
          <motion.div 
            whileTap={{ scale: 0.98 }}
            className="bg-white p-3 rounded-[16px] shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center"
          >
            <div className="w-8 h-8 bg-teal-50 rounded-lg shadow-sm flex items-center justify-center mb-2">
              <HeartHandshake className="w-4 h-4 text-[#0F766E]" />
            </div>
            <p className="text-slate-500 text-[10px] font-medium mb-1 leading-tight">Total Donations</p>
            <p className="text-[#1F2937] font-bold text-sm">₹45.5k</p>
          </motion.div>

          <motion.div 
            whileTap={{ scale: 0.98 }}
            className="bg-white p-3 rounded-[16px] shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center"
          >
            <div className="w-8 h-8 bg-amber-50 rounded-lg shadow-sm flex items-center justify-center mb-2">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
            </div>
            <p className="text-slate-500 text-[10px] font-medium mb-1 leading-tight">Families Supported</p>
            <p className="text-[#1F2937] font-bold text-sm">12</p>
          </motion.div>

          <motion.div 
            whileTap={{ scale: 0.98 }}
            className="bg-white p-3 rounded-[16px] shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center cursor-pointer"
            onClick={() => onNavigate('impact-dashboard')}
          >
            <div className="w-8 h-8 bg-blue-50 rounded-lg shadow-sm flex items-center justify-center mb-2">
              <Heart className="w-4 h-4 text-blue-500" />
            </div>
            <p className="text-slate-500 text-[10px] font-medium mb-1 leading-tight">Lives Impacted</p>
            <p className="text-[#1F2937] font-bold text-sm">48</p>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-[20px] p-5 border border-slate-100 shadow-sm flex-1">
          <h3 className="text-[#1F2937] font-bold mb-4 flex items-center justify-between">
            Quick Actions
            <span className="text-[#0F766E] text-xs font-semibold cursor-pointer">View All</span>
          </h3>
          <div className="grid grid-cols-4 gap-y-4 gap-x-2">
            {[
              { icon: HeartHandshake, label: 'Zakat', color: 'bg-teal-50 text-[#0F766E]', action: () => onNavigate('give-zakat') },
              { icon: Heart, label: 'Sadaqah', color: 'bg-rose-50 text-rose-500', action: () => onNavigate('give-zakat') },
              { icon: ShieldCheck, label: 'Sponsor', color: 'bg-amber-50 text-[#F59E0B]', action: () => onNavigate('beneficiaries') },
              { icon: AlertTriangle, label: 'Emergency', color: 'bg-red-50 text-red-500', action: () => onNavigate('request-assistance') },
              { icon: Stethoscope, label: 'Medical', color: 'bg-blue-50 text-blue-500', action: () => onNavigate('beneficiaries') },
              { icon: BookOpen, label: 'Education', color: 'bg-indigo-50 text-indigo-500', action: () => onNavigate('beneficiaries') },
              { icon: Utensils, label: 'Food', color: 'bg-orange-50 text-orange-500', action: () => onNavigate('beneficiaries') },
              { icon: ArrowRight, label: 'More', color: 'bg-slate-100 text-slate-600', action: () => {} },
            ].map((action, i) => (
              <div key={i} className="flex flex-col items-center group cursor-pointer" onClick={action.action}>
                <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center mb-2 ${action.color} shadow-sm active:scale-95 transition-transform`}>
                  <action.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium text-slate-600 text-center">{action.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Campaigns */}
        <div className="bg-[#F59E0B]/5 border border-[#F59E0B]/20 rounded-[20px] p-5 relative overflow-hidden flex-1">
          <svg className="absolute -right-4 -bottom-4 w-32 h-32 text-amber-500 opacity-10 pointer-events-none" fill="currentColor" viewBox="0 0 200 200"><path d="M100 0L130 70H200L145 115L165 190L100 150L35 190L55 115L0 70H70L100 0Z"/></svg>
          <div className="relative z-10 flex justify-between items-center mb-3">
            <h3 className="text-[#F59E0B] font-bold uppercase text-[10px] tracking-widest">Featured Campaigns</h3>
            <span className="text-[#0F766E] text-xs font-semibold cursor-pointer">See All</span>
          </div>
          
          <div className="relative z-10 space-y-3">
            <motion.div 
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-[16px] overflow-hidden shadow-sm border border-slate-100 cursor-pointer"
            >
              <div className="h-28 bg-slate-200 relative overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600&h=300" alt="Ramadan Food Drive" className="w-full h-full object-cover" />
                 <div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded-[6px] text-[#0F766E] uppercase tracking-wider">Ramadan Special</div>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-[#1F2937] text-sm mb-1">Ramadan Food Package 2026</h3>
                <p className="text-[11px] text-slate-500 mb-3 line-clamp-1">Provide a complete month of groceries for a family of 5 in need.</p>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-slate-100 rounded-full h-1.5 mr-3">
                    <div className="bg-[#0F766E] h-1.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="text-[10px] font-bold text-[#0F766E] whitespace-nowrap">65%</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-[16px] overflow-hidden shadow-sm border border-slate-100 cursor-pointer"
            >
              <div className="h-28 bg-slate-200 relative overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600&h=300" alt="Education Fund" className="w-full h-full object-cover" />
                 <div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded-[6px] text-[#F59E0B] uppercase tracking-wider">Education</div>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-[#1F2937] text-sm mb-1">Orphan Education Support</h3>
                <p className="text-[11px] text-slate-500 mb-3 line-clamp-1">Sponsor the yearly tuition and supplies for children without parents.</p>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-slate-100 rounded-full h-1.5 mr-3">
                    <div className="bg-[#F59E0B] h-1.5 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <span className="text-[10px] font-bold text-[#F59E0B] whitespace-nowrap">40%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
