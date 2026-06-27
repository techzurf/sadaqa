import React from 'react';
import { Home, Heart, FileText, Bell, User } from 'lucide-react';
import { Screen } from '../types';
import { cn } from '../utils';

interface Props {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function BottomNav({ currentScreen, onNavigate }: Props) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, screen: 'home' as Screen },
    { id: 'donations', label: 'Donations', icon: Heart, screen: 'give-zakat' as Screen },
    { id: 'requests', label: 'Requests', icon: FileText, screen: 'beneficiaries' as Screen },
    { id: 'notifications', label: 'Alerts', icon: Bell, screen: 'notifications' as Screen },
    { id: 'profile', label: 'Profile', icon: User, screen: 'profile' as Screen },
  ];

  return (
    <div className="absolute bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] z-50 pb-safe pt-2">
      <div className="flex justify-around items-center px-2 py-2">
        {navItems.map((item) => {
          const isActive = currentScreen === item.screen;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.screen)}
              className="flex flex-col items-center justify-center w-16 space-y-1 relative group"
            >
              <div className={cn(
                "p-2 rounded-[12px] transition-all duration-300",
                isActive ? "bg-teal-50 text-[#0F766E]" : "text-slate-400 group-hover:text-[#0F766E] group-hover:bg-teal-50/50"
              )}>
                <item.icon className={cn("w-6 h-6", isActive && "fill-teal-50")} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={cn(
                "text-[10px] font-medium transition-colors",
                isActive ? "text-[#0F766E]" : "text-slate-500"
              )}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
