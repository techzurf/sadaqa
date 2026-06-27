import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, ShieldCheck, MapPin, Users } from 'lucide-react';
import { Screen, Family } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const mockFamilies: Family[] = [
  {
    id: 'FAM-001',
    name: 'Rahman Family',
    membersCount: 5,
    needCategory: 'Medical',
    verificationStatus: 'Verified',
    location: 'Mumbai, MH',
    amountRequired: 25000,
    amountRaised: 15000,
    description: 'Require immediate medical assistance for father\'s kidney dialysis.',
    documents: ['Medical Report', 'ID Proof']
  },
  {
    id: 'FAM-002',
    name: 'Aisha Bibi',
    membersCount: 3,
    needCategory: 'Widow',
    verificationStatus: 'Verified',
    location: 'Hyderabad, TS',
    amountRequired: 12000,
    amountRaised: 4500,
    description: 'Widow mother struggling to pay school fees for two young daughters.',
    documents: ['Death Certificate', 'School Fee Notice']
  },
  {
    id: 'FAM-003',
    name: 'Sheikh Household',
    membersCount: 7,
    needCategory: 'Food',
    verificationStatus: 'Pending',
    location: 'Delhi, DL',
    amountRequired: 8000,
    amountRaised: 0,
    description: 'Large family unable to meet daily food requirements due to job loss.',
    documents: ['Ration Card']
  }
];

export function BeneficiariesScreen({ onNavigate }: Props) {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Medical', 'Education', 'Widow', 'Orphan', 'Food', 'Near Me'];

  return (
    <div className="flex flex-col w-full h-full bg-[#F8FAFC] relative pb-24 overflow-y-auto">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none islamic-pattern z-0"></div>

      {/* Header & Filters */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="px-4 pt-6 pb-4">
          <div className="relative z-10 flex items-center justify-between mb-4">
            <button onClick={() => onNavigate('home')} className="p-2 -ml-2 text-gray-500 hover:text-gray-900 rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-bold text-[#1F2937]">Support Families</h1>
            <button className="p-2 -mr-2 text-gray-500 hover:text-gray-900 rounded-full transition-colors">
              <Filter className="w-6 h-6" />
            </button>
          </div>
          
          <div className="relative z-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by ID, location, or need..."
              className="w-full bg-slate-50 rounded-[16px] border border-slate-200 py-2.5 pl-12 pr-4 focus:outline-none focus:border-[#0F766E] text-sm text-gray-900 shadow-sm"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="px-4 pb-4 overflow-x-auto hide-scrollbar flex space-x-2">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-[16px] text-xs font-bold whitespace-nowrap transition-colors ${
                activeFilter === f 
                  ? 'bg-[#0F766E] text-white shadow-sm shadow-teal-900/10' 
                  : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="p-4 space-y-4 relative z-10">
        {mockFamilies.map((family) => (
          <div key={family.id} className="bg-white rounded-[20px] p-4 shadow-sm border border-slate-100 flex flex-col">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{family.name}</h3>
                <p className="text-xs text-gray-500 font-medium tracking-wide">ID: {family.id}</p>
              </div>
              {family.verificationStatus === 'Verified' && (
                <div className="bg-teal-50 text-[#0F766E] px-2 py-1 rounded-lg flex items-center text-[10px] font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  Verified
                </div>
              )}
            </div>

            <div className="flex space-x-2 mb-4">
              <div className="flex items-center text-xs text-gray-600 font-medium bg-slate-50 px-2 py-1.5 rounded-[8px] border border-slate-100">
                <Users className="w-4 h-4 mr-1.5 text-slate-400" />
                {family.membersCount} Members
              </div>
              <div className="flex items-center text-xs text-gray-600 font-medium bg-slate-50 px-2 py-1.5 rounded-[8px] border border-slate-100">
                <MapPin className="w-4 h-4 mr-1.5 text-slate-400" />
                {family.location}
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-5 leading-relaxed">
              {family.description}
            </p>

            <div className="mb-5">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-500">Raised: ₹{family.amountRaised.toLocaleString()}</span>
                <span className="text-[#1F2937]">Goal: ₹{family.amountRequired.toLocaleString()}</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div 
                  className="bg-[#0F766E] h-2 rounded-full" 
                  style={{ width: `${(family.amountRaised / family.amountRequired) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="flex space-x-3 mt-auto pt-2">
              <button 
                onClick={() => onNavigate('give-zakat')}
                className="flex-[2] py-3 bg-[#F59E0B] text-white font-bold rounded-[16px] text-sm shadow-md shadow-amber-500/20 active:scale-[0.98] transition-transform"
              >
                Support Family
              </button>
              <button className="flex-1 py-3 bg-slate-50 text-[#0F766E] font-bold rounded-[16px] text-sm border border-slate-200">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
