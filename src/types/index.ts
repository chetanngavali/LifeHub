export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface FoodItem {
  id: string;
  name: string;
  category: string;
  expiryDate: string;
  quantity: number;
  location: 'fridge' | 'pantry' | 'freezer';
  addedDate: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  subject: string;
  createdAt: string;
  fileType: 'text' | 'image' | 'pdf';
}

export interface ShareItem {
  id: string;
  name: string;
  description: string;
  category: string;
  owner: User;
  available: boolean;
  rating: number;
  location: string;
}

export interface PetSitter {
  id: string;
  name: string;
  rating: number;
  pricePerHour: number;
  services: string[];
  location: string;
  avatar: string;
}

export interface Trip {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  flights: TripItem[];
  hotels: TripItem[];
  activities: TripItem[];
  totalBudget: number;
  spentAmount: number;
}

export interface TripItem {
  id: string;
  name: string;
  date: string;
  time?: string;
  cost: number;
  location: string;
  confirmationNumber?: string;
}

export interface Expense {
  id: string;
  description: string;
  amount: number;
  paidBy: string;
  splitBetween: string[];
  date: string;
  category: string;
}

export interface Subscription {
  id: string;
  name: string;
  cost: number;
  billingCycle: 'monthly' | 'yearly';
  nextBilling: string;
  category: string;
  status: 'active' | 'cancelled';
}

export interface HelpRequest {
  id: string;
  title: string;
  description: string;
  category: string;
  requester: User;
  location: string;
  urgency: 'low' | 'medium' | 'high';
  status: 'open' | 'in-progress' | 'completed';
}

export interface BabyRecord {
  id: string;
  type: 'feeding' | 'diaper' | 'sleep' | 'milestone';
  timestamp: string;
  notes?: string;
  duration?: number;
  amount?: number;
}

export interface RentalItem {
  id: string;
  name: string;
  description: string;
  category: string;
  pricePerDay: number;
  owner: User;
  available: boolean;
  images: string[];
  location: string;
}