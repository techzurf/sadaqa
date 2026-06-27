import React from 'react';
import { ArrowLeft, PieChart as PieChartIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const monthlyData = [
  { name: 'Jan', amount: 4000 },
  { name: 'Feb', amount: 3000 },
  { name: 'Mar', amount: 8000 },
  { name: 'Apr', amount: 15000 }, // Ramadan spike
  { name: 'May', amount: 5000 },
  { name: 'Jun', amount: 4500 },
];

const categoryData = [
  { name: 'Medical', value: 40 },
  { name: 'Education', value: 30 },
  { name: 'Food', value: 20 },
  { name: 'Housing', value: 10 },
];
const COLORS = ['#0F766E', '#F59E0B', '#3B82F6', '#EF4444'];

export function ImpactDashboardScreen({ onNavigate }: Props) {
  return (
    <div className="flex flex-col w-full h-full bg-[#F8FAFC] relative pb-24 overflow-y-auto">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none islamic-pattern z-0"></div>

      <div className="bg-white px-4 pt-6 pb-4 flex items-center justify-between sticky top-0 z-20 shadow-sm border-b border-slate-200">
        <button onClick={() => onNavigate('home')} className="p-2 -ml-2 text-gray-500 hover:text-gray-900 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold text-[#1F2937]">Your Impact</h1>
        <button className="p-2 -mr-2 text-[#0F766E] rounded-full hover:bg-teal-50 transition-colors">
          <PieChartIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="p-4 space-y-4 relative z-10">
        {/* Transparency Score */}
        <div className="bg-[#0F766E] rounded-[20px] p-5 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="text-teal-100 font-medium text-sm mb-1">Platform Transparency</p>
              <h2 className="text-3xl font-bold">100%</h2>
            </div>
            <div className="w-14 h-14 rounded-full border-4 border-teal-400 flex items-center justify-center">
              <span className="text-lg font-bold">A+</span>
            </div>
          </div>
          <p className="text-xs text-teal-100 mt-4 font-medium tracking-wide">Zero administrative fees. Every Rupee goes to the needy.</p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-[20px] shadow-sm border border-slate-100 flex flex-col justify-center">
            <p className="text-xs text-gray-500 font-medium mb-1">Total Zakat Paid</p>
            <p className="text-xl font-bold text-[#0F766E]">₹32,500</p>
          </div>
          <div className="bg-white p-4 rounded-[20px] shadow-sm border border-slate-100 flex flex-col justify-center">
            <p className="text-xs text-gray-500 font-medium mb-1">Sadaqah Given</p>
            <p className="text-xl font-bold text-[#F59E0B]">₹13,000</p>
          </div>
        </div>

        {/* Monthly Chart */}
        <div className="bg-white p-5 rounded-[20px] shadow-sm border border-slate-100">
          <h3 className="font-bold text-[#1F2937] mb-6">Donation History</h3>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dy={10} />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: '#F3F4F6' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="amount" fill="#0F766E" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Pie Chart */}
        <div className="bg-white p-5 rounded-[20px] shadow-sm border border-slate-100">
          <h3 className="font-bold text-[#1F2937] mb-2">Distribution by Category</h3>
          <div className="flex items-center">
            <div className="h-40 w-1/2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={50}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/2 space-y-2">
              {categoryData.map((cat, idx) => (
                <div key={idx} className="flex items-center text-xs font-medium">
                  <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[idx] }}></span>
                  <span className="text-gray-600 flex-1">{cat.name}</span>
                  <span className="text-gray-900 font-bold">{cat.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
