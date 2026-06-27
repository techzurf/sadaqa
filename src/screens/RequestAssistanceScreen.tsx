import React, { useState } from 'react';
import { ArrowLeft, Upload, FileText, Camera } from 'lucide-react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export function RequestAssistanceScreen({ onNavigate }: Props) {
  const [category, setCategory] = useState('');

  return (
    <div className="flex flex-col w-full h-full bg-[#F8FAFC] relative pb-24 overflow-y-auto">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none islamic-pattern z-0"></div>

      <div className="bg-white px-4 pt-6 pb-4 flex items-center justify-between sticky top-0 z-20 shadow-sm border-b border-slate-200">
        <button onClick={() => onNavigate('home')} className="p-2 -ml-2 text-gray-500 hover:text-gray-900 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold text-[#1F2937]">Request Assistance</h1>
        <div className="w-10"></div>
      </div>

      <div className="p-4 space-y-4 relative z-10">
        <div>
          <label className="text-sm font-semibold text-gray-700 mb-2 block">Assistance Category</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-[16px] py-4 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent font-medium text-gray-900 shadow-sm"
          >
            <option value="" disabled>Select a category...</option>
            <option value="financial">Financial Support</option>
            <option value="food">Food Support</option>
            <option value="medical">Medical Support</option>
            <option value="education">Education Support</option>
            <option value="housing">Housing Support</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700 mb-2 block">Need Description</label>
          <textarea 
            rows={4}
            placeholder="Please describe your situation in detail..."
            className="w-full bg-white border border-slate-200 rounded-[16px] py-4 px-4 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent text-gray-900 shadow-sm resize-none"
          ></textarea>
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700 mb-2 block">Required Amount (₹)</label>
          <input 
            type="number"
            placeholder="E.g. 5000"
            className="w-full bg-white border border-slate-200 rounded-[16px] py-4 px-4 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent text-gray-900 shadow-sm"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700 mb-2 block">Supporting Documents</label>
          <div className="grid grid-cols-2 gap-3">
            <div className="border-2 border-dashed border-slate-200 rounded-[16px] p-4 flex flex-col items-center justify-center text-gray-500 hover:bg-teal-50 hover:border-[#0F766E] transition-colors cursor-pointer bg-white">
              <Camera className="w-6 h-6 mb-2" />
              <span className="text-xs font-medium">Take Photo</span>
            </div>
            <div className="border-2 border-dashed border-slate-200 rounded-[16px] p-4 flex flex-col items-center justify-center text-gray-500 hover:bg-teal-50 hover:border-[#0F766E] transition-colors cursor-pointer bg-white">
              <Upload className="w-6 h-6 mb-2" />
              <span className="text-xs font-medium">Upload File</span>
            </div>
          </div>
          <div className="mt-3 flex items-center space-x-2">
            <div className="bg-slate-100 px-3 py-1.5 rounded-[8px] flex items-center text-xs font-medium text-slate-600">
              <FileText className="w-3.5 h-3.5 mr-1" />
              ID_Proof.pdf
            </div>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700 mb-2 block">Contact Details</label>
          <input 
            type="text"
            placeholder="Primary Phone Number"
            className="w-full bg-white border border-slate-200 rounded-[16px] py-4 px-4 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent text-gray-900 shadow-sm mb-3"
          />
          <input 
            type="text"
            placeholder="Complete Address"
            className="w-full bg-white border border-slate-200 rounded-[16px] py-4 px-4 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent text-gray-900 shadow-sm"
          />
        </div>

        <button
          onClick={() => {
            alert('Request Submitted for Verification');
            onNavigate('home');
          }}
          className="w-full py-4 mt-2 bg-[#0F766E] text-white font-bold rounded-[16px] shadow-lg shadow-teal-900/20 active:scale-[0.98] transition-transform"
        >
          Submit Request
        </button>
      </div>
    </div>
  );
}
