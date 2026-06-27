/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Screen } from './types';

import { SplashScreen } from './screens/SplashScreen';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { GiveZakatScreen } from './screens/GiveZakatScreen';
import { BeneficiariesScreen } from './screens/BeneficiariesScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { ImpactDashboardScreen } from './screens/ImpactDashboardScreen';
import { RequestAssistanceScreen } from './screens/RequestAssistanceScreen';
import { BottomNav } from './components/BottomNav';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [direction, setDirection] = useState(0);

  const navigate = (screen: Screen) => {
    // Simple logic to determine slide direction based on screen order could be added here
    setDirection(1);
    setCurrentScreen(screen);
  };

  const showBottomNav = ['home', 'give-zakat', 'beneficiaries', 'notifications', 'profile'].includes(currentScreen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash': return <SplashScreen onNavigate={navigate} />;
      case 'onboarding': return <OnboardingScreen onNavigate={navigate} />;
      case 'login': return <LoginScreen onNavigate={navigate} />;
      case 'home': return <HomeScreen onNavigate={navigate} />;
      case 'give-zakat': return <GiveZakatScreen onNavigate={navigate} />;
      case 'beneficiaries': return <BeneficiariesScreen onNavigate={navigate} />;
      case 'notifications': return <NotificationsScreen onNavigate={navigate} />;
      case 'profile': return <ProfileScreen onNavigate={navigate} />;
      case 'impact-dashboard': return <ImpactDashboardScreen onNavigate={navigate} />;
      case 'request-assistance': return <RequestAssistanceScreen onNavigate={navigate} />;
      default: return <HomeScreen onNavigate={navigate} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC]">
      <div className="w-full h-[100dvh] bg-[#F8FAFC] relative overflow-hidden flex flex-col">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={currentScreen}
            className="flex-1 w-full h-full absolute inset-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>

        {showBottomNav && (
          <BottomNav currentScreen={currentScreen} onNavigate={navigate} />
        )}
      </div>
    </div>
  );
}

