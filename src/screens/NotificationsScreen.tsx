import React from 'react';
import { ArrowLeft, Bell, Heart, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const notifications = [
  {
    id: 1,
    type: 'success',
    title: 'Donation Successful',
    message: 'Your Zakat of ₹5,000 has been successfully received. Jazakallah Khair!',
    time: '2 hours ago',
    icon: CheckCircle2,
    color: 'text-primary bg-teal-50'
  },
  {
    id: 2,
    type: 'alert',
    title: 'Emergency Medical Appeal',
    message: 'Urgent funds required for a 5-year-old\'s heart surgery in Mumbai.',
    time: '5 hours ago',
    icon: AlertTriangle,
    color: 'text-red-500 bg-red-50'
  },
  {
    id: 3,
    type: 'update',
    title: 'Family Funded!',
    message: 'The Rahman Family you supported has reached their goal. View impact report.',
    time: '1 day ago',
    icon: Heart,
    color: 'text-secondary bg-amber-50'
  }
];

export function NotificationsScreen({ onNavigate }: Props) {
  return (
    <div className="flex flex-col w-full h-full bg-slate-50 relative pb-24 overflow-y-auto">
      <div className="bg-white px-4 pt-6 pb-4 flex items-center justify-between sticky top-0 z-20 shadow-sm border-b border-gray-100">
        <button onClick={() => onNavigate('home')} className="p-2 -ml-2 text-gray-500 hover:text-gray-900 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Notifications</h1>
        <div className="w-10"></div>
      </div>

      <div className="p-4 space-y-3">
        {notifications.map((notif) => (
          <div key={notif.id} className="bg-white p-4 rounded-[20px] shadow-sm border border-gray-100 flex items-start space-x-4">
            <div className={`w-12 h-12 rounded-[16px] flex items-center justify-center shrink-0 ${notif.color}`}>
              <notif.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-sm mb-1">{notif.title}</h3>
              <p className="text-sm text-gray-600 mb-2 leading-relaxed">{notif.message}</p>
              <p className="text-xs font-medium text-gray-400">{notif.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
