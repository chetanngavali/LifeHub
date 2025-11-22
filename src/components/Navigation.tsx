import React from 'react';
import { 
  Home, 
  Refrigerator, 
  BookOpen, 
  Share2, 
  Heart, 
  Map, 
  Calculator, 
  Calendar, 
  Users, 
  Baby,
  Sofa
} from 'lucide-react';

interface NavigationProps {
  activeService: string;
  onServiceChange: (service: string) => void;
}

const services = [
  { id: 'dashboard', name: 'Dashboard', icon: Home },
  { id: 'pantry', name: 'Smart Pantry', icon: Refrigerator },
  { id: 'notes', name: 'Study Notes', icon: BookOpen },
  { id: 'share', name: 'ShareCircle', icon: Share2 },
  { id: 'pets', name: 'PetBuddy', icon: Heart },
  { id: 'travel', name: 'TripNest', icon: Map },
  { id: 'bills', name: 'SplitFair', icon: Calculator },
  { id: 'subscriptions', name: 'SubTrackr', icon: Calendar },
  { id: 'seniors', name: 'SilverHelp', icon: Users },
  { id: 'baby', name: 'ParentPal', icon: Baby },
  { id: 'rentals', name: 'RentRoomThings', icon: Sofa },
];

export default function Navigation({ activeService, onServiceChange }: NavigationProps) {
  return (
    <nav className="bg-white shadow-lg border-r border-gray-200 w-64 min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">LifeHub</h1>
        <div className="space-y-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => onServiceChange(service.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeService === service.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{service.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}