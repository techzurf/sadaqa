import React from 'react';
import { ArrowLeft, User, FileText, Settings, HelpCircle, LogOut, Download, ChevronRight } from 'lucide-react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export function ProfileScreen({ onNavigate }: Props) {
  return (
    <div className="flex flex-col w-full h-full bg-[#F8FAFC] relative pb-24 overflow-y-auto hide-scrollbar">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none islamic-pattern z-0"></div>

      <div className="bg-white border-b border-slate-200 px-4 pt-6 pb-4 relative z-10 sticky top-0">
        <div className="flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="p-2 -ml-2 text-gray-500 hover:text-gray-900 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold text-[#1F2937]">Profile</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="px-4 pt-4 relative z-10">
        <div className="bg-white rounded-[20px] p-5 shadow-sm border border-slate-100 flex items-center mb-4">
          <div className="w-16 h-16 bg-slate-200 rounded-full overflow-hidden mr-4 border-2 border-white shadow-sm">
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Ahmad Abdullah</h2>
            <p className="text-sm font-medium text-gray-500">ahmad@example.com</p>
            <div className="mt-2 bg-amber-100 text-[#F59E0B] text-[10px] uppercase tracking-wide font-bold px-2 py-1 rounded-[6px] inline-block">
              Premium Donor
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-[20px] shadow-sm border border-slate-100 overflow-hidden">
            {[
              { icon: User, label: 'Personal Information' },
              { icon: FileText, label: 'Donation History' },
              { icon: Download, label: 'Tax Receipts (80G)' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border-b border-slate-50 last:border-0 cursor-pointer hover:bg-slate-50">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mr-4">
                    <item.icon className="w-5 h-5 text-[#0F766E]" />
                  </div>
                  <span className="font-semibold text-sm text-gray-900">{item.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[20px] shadow-sm border border-slate-100 overflow-hidden">
            {[
              { icon: Settings, label: 'Settings' },
              { icon: HelpCircle, label: 'Help & Support' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border-b border-slate-50 last:border-0 cursor-pointer hover:bg-slate-50">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                    <item.icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <span className="font-semibold text-sm text-gray-900">{item.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => onNavigate('login')}
            className="w-full bg-red-50 text-red-600 font-bold py-4 rounded-[16px] flex items-center justify-center shadow-sm active:scale-[0.98] transition-transform"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
