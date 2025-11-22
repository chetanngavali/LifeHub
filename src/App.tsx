import React from 'react';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import SmartPantry from './components/SmartPantry';
import StudyNotes from './components/StudyNotes';
import ShareCircle from './components/ShareCircle';
import PetBuddy from './components/PetBuddy';
import TripNest from './components/TripNest';
import SplitFair from './components/SplitFair';
import SubTrackr from './components/SubTrackr';
import SilverHelp from './components/SilverHelp';
import ParentPal from './components/ParentPal';
import RentRoomThings from './components/RentRoomThings';

function App() {
  const [activeService, setActiveService] = useState('dashboard');

  const renderActiveService = () => {
    switch (activeService) {
      case 'dashboard': return <Dashboard />;
      case 'pantry': return <SmartPantry />;
      case 'notes': return <StudyNotes />;
      case 'share': return <ShareCircle />;
      case 'pets': return <PetBuddy />;
      case 'travel': return <TripNest />;
      case 'bills': return <SplitFair />;
      case 'subscriptions': return <SubTrackr />;
      case 'seniors': return <SilverHelp />;
      case 'baby': return <ParentPal />;
      case 'rentals': return <RentRoomThings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Navigation activeService={activeService} onServiceChange={setActiveService} />
      <main className="flex-1">
        {renderActiveService()}
      </main>
    </div>
  );
}

export default App;
