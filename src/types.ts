export type Screen = 
  | 'splash'
  | 'onboarding'
  | 'login'
  | 'register'
  | 'home'
  | 'give-zakat'
  | 'beneficiaries'
  | 'family-details'
  | 'request-assistance'
  | 'request-status'
  | 'volunteer-dashboard'
  | 'impact-dashboard'
  | 'notifications'
  | 'profile';

export interface User {
  id: string;
  name: string;
  role: 'donor' | 'beneficiary' | 'volunteer' | 'admin';
  avatar?: string;
}

export interface Family {
  id: string;
  name: string;
  membersCount: number;
  needCategory: 'Financial' | 'Food' | 'Medical' | 'Education' | 'Housing' | 'Orphan' | 'Widow';
  verificationStatus: 'Verified' | 'Pending' | 'Rejected';
  location: string;
  amountRequired: number;
  amountRaised: number;
  description: string;
  documents: string[];
}
