import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ChevronDown, Check, HeartHandshake } from 'lucide-react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const AMOUNTS = [500, 1000, 2500, 5000];

export function GiveZakatScreen({ onNavigate }: Props) {
  const [selectedType, setSelectedType] = useState('Zakat');
  const [amount, setAmount] = useState<number | string>('');
  const [customAmount, setCustomAmount] = useState(false);

  return (
    <div className="flex flex-col w-full h-full bg-[#F8FAFC] relative pb-24 overflow-y-auto">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none islamic-pattern z-0"></div>

      <div className="bg-white border-b border-slate-200 px-4 pt-6 pb-4 flex items-center justify-between sticky top-0 z-20 shadow-sm">
        <button onClick={() => onNavigate('home')} className="p-2 -ml-2 text-gray-500 hover:text-gray-900 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold text-[#1F2937]">Make a Donation</h1>
        <div className="w-10"></div>
      </div>

      <div className="p-4 space-y-4 relative z-10">
        {/* Type Selection */}
        <div>
          <label className="text-sm font-semibold text-gray-700 mb-2 block">Donation Type</label>
          <div className="relative">
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-[16px] py-4 pl-4 pr-12 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent font-medium text-gray-900 shadow-sm"
            >
              <option value="Zakat">Zakat (Obligatory)</option>
              <option value="Sadaqah">Sadaqah (Voluntary)</option>
              <option value="Sponsor Family">Sponsor a Family</option>
              <option value="Medical">Medical Emergency</option>
              <option value="Education">Education Fund</option>
              <option value="Food">Food Package</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Amount Selection */}
        <div>
          <label className="text-sm font-semibold text-gray-700 mb-2 block">Select Amount (₹)</label>
          <div className="grid grid-cols-2 gap-3 mb-3">
            {AMOUNTS.map((amt) => (
              <button
                key={amt}
                onClick={() => {
                  setAmount(amt);
                  setCustomAmount(false);
                }}
                className={`py-4 rounded-[16px] font-bold text-lg transition-all ${
                  amount === amt && !customAmount
                    ? 'bg-[#0F766E] text-white shadow-md shadow-teal-900/20'
                    : 'bg-white text-gray-700 border border-slate-200 hover:border-[#0F766E]/50'
                }`}
              >
                ₹{amt}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              setCustomAmount(true);
              setAmount('');
            }}
            className={`w-full py-4 rounded-[16px] font-bold text-lg transition-all ${
              customAmount
                ? 'bg-[#0F766E] text-white shadow-md shadow-teal-900/20'
                : 'bg-white text-gray-700 border border-slate-200 hover:border-[#0F766E]/50'
            }`}
          >
            Custom Amount
          </button>
          
          {customAmount && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 relative"
            >
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xl">₹</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full bg-white border-2 border-[#0F766E] rounded-[16px] py-4 pl-10 pr-4 text-xl font-bold focus:outline-none focus:ring-0 text-gray-900 shadow-sm"
                autoFocus
              />
            </motion.div>
          )}
        </div>

        {/* Payment Methods */}
        <div>
          <label className="text-sm font-semibold text-gray-700 mb-2 block">Payment Method</label>
          <div className="space-y-3">
            {[
              { id: 'upi', name: 'UPI', desc: 'Google Pay, PhonePe, Paytm' },
              { id: 'card', name: 'Credit / Debit Card', desc: 'Visa, Mastercard, RuPay' },
              { id: 'netbanking', name: 'Net Banking', desc: 'All major banks supported' }
            ].map((method, idx) => (
              <div 
                key={method.id} 
                className={`p-4 rounded-[20px] border ${idx === 0 ? 'border-[#0F766E] bg-teal-50/30' : 'border-slate-200 bg-white shadow-sm'} flex items-center justify-between cursor-pointer`}
              >
                <div>
                  <p className="font-bold text-gray-900">{method.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{method.desc}</p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${idx === 0 ? 'border-[#0F766E] bg-[#0F766E]' : 'border-slate-300'}`}>
                  {idx === 0 && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="bg-teal-50 p-4 rounded-[20px] border border-teal-100 flex items-start space-x-3">
           <HeartHandshake className="w-6 h-6 text-[#0F766E] shrink-0 mt-0.5" />
           <p className="text-sm text-teal-800">
             100% of your Zakat will be distributed directly to verified beneficiaries without any administrative deductions.
           </p>
        </div>

        {/* Proceed Button */}
        <button
          onClick={() => {
            alert('Payment Gateway Integration Simulated');
            onNavigate('home');
          }}
          disabled={!amount}
          className={`w-full py-4 mt-4 font-bold rounded-[16px] shadow-lg flex items-center justify-center transition-all ${
            amount 
              ? 'bg-[#F59E0B] text-white shadow-amber-500/30 active:scale-[0.98]' 
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          Proceed to Pay {amount ? `₹${amount}` : ''}
        </button>
      </div>
    </div>
  );
}
