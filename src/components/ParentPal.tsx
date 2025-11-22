import React, { useState } from 'react';
import { Plus, Search, Baby, Clock, Droplets, Moon, Star, Calendar, TrendingUp, Heart } from 'lucide-react';
import type { BabyRecord } from '../types';

export default function ParentPal() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'records' | 'milestones' | 'tips'>('dashboard');
  const [selectedRecordType, setSelectedRecordType] = useState<'all' | 'feeding' | 'diaper' | 'sleep' | 'milestone'>('all');

  const babyRecords: BabyRecord[] = [
    {
      id: '1',
      type: 'feeding',
      timestamp: '2025-01-22T08:30:00',
      notes: 'Breast milk, good appetite',
      duration: 25,
      amount: 120
    },
    {
      id: '2',
      type: 'diaper',
      timestamp: '2025-01-22T09:15:00',
      notes: 'Wet diaper, normal'
    },
    {
      id: '3',
      type: 'sleep',
      timestamp: '2025-01-22T10:00:00',
      duration: 90,
      notes: 'Peaceful nap'
    },
    {
      id: '4',
      type: 'milestone',
      timestamp: '2025-01-21T14:30:00',
      notes: 'First smile! So precious'
    },
    {
      id: '5',
      type: 'feeding',
      timestamp: '2025-01-22T12:00:00',
      duration: 20,
      amount: 100,
      notes: 'Formula feeding'
    },
    {
      id: '6',
      type: 'sleep',
      timestamp: '2025-01-22T13:30:00',
      duration: 120,
      notes: 'Long afternoon nap'
    }
  ];

  const milestones = [
    { age: '2 weeks', milestone: 'First smile', achieved: true, date: '2025-01-21' },
    { age: '1 month', milestone: 'Follows objects with eyes', achieved: false },
    { age: '2 months', milestone: 'Holds head up', achieved: false },
    { age: '3 months', milestone: 'Reaches for toys', achieved: false },
    { age: '4 months', milestone: 'Rolls over', achieved: false },
    { age: '6 months', milestone: 'Sits without support', achieved: false }
  ];

  const tips = [
    {
      category: 'Feeding',
      title: 'Establishing a Feeding Routine',
      content: 'Newborns typically feed every 2-3 hours. Watch for hunger cues like rooting or sucking motions.',
      ageGroup: '0-3 months'
    },
    {
      category: 'Sleep',
      title: 'Safe Sleep Practices',
      content: 'Always place baby on their back to sleep. Keep the crib free of blankets, pillows, and toys.',
      ageGroup: '0-12 months'
    },
    {
      category: 'Development',
      title: 'Tummy Time Benefits',
      content: 'Start with 3-5 minutes of tummy time several times a day to strengthen neck and shoulder muscles.',
      ageGroup: '0-6 months'
    },
    {
      category: 'Health',
      title: 'When to Call the Doctor',
      content: 'Contact your pediatrician if baby has a fever over 100.4°F, unusual crying, or feeding difficulties.',
      ageGroup: '0-12 months'
    }
  ];

  const getRecordIcon = (type: string) => {
    switch (type) {
      case 'feeding': return Droplets;
      case 'diaper': return Baby;
      case 'sleep': return Moon;
      case 'milestone': return Star;
      default: return Clock;
    }
  };

  const getRecordColor = (type: string) => {
    switch (type) {
      case 'feeding': return 'text-blue-600 bg-blue-50';
      case 'diaper': return 'text-green-600 bg-green-50';
      case 'sleep': return 'text-purple-600 bg-purple-50';
      case 'milestone': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const todayRecords = babyRecords.filter(record => {
    const today = new Date().toDateString();
    return new Date(record.timestamp).toDateString() === today;
  });

  const feedingCount = todayRecords.filter(r => r.type === 'feeding').length;
  const diaperCount = todayRecords.filter(r => r.type === 'diaper').length;
  const sleepTime = todayRecords.filter(r => r.type === 'sleep').reduce((total, r) => total + (r.duration || 0), 0);

  const filteredRecords = selectedRecordType === 'all' 
    ? babyRecords 
    : babyRecords.filter(record => record.type === selectedRecordType);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ParentPal</h1>
          <p className="text-gray-600">Track your baby's growth, health, and precious moments</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Record</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
        {[
          { id: 'dashboard', label: 'Dashboard' },
          { id: 'records', label: 'Records' },
          { id: 'milestones', label: 'Milestones' },
          { id: 'tips', label: 'Parenting Tips' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === tab.id
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'dashboard' && (
        <>
          {/* Today's Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Feedings Today</p>
                  <p className="text-2xl font-bold text-gray-900">{feedingCount}</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Droplets className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Diaper Changes</p>
                  <p className="text-2xl font-bold text-gray-900">{diaperCount}</p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <Baby className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Sleep Time</p>
                  <p className="text-2xl font-bold text-gray-900">{Math.floor(sleepTime / 60)}h {sleepTime % 60}m</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Moon className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Baby's Age</p>
                  <p className="text-2xl font-bold text-gray-900">3 weeks</p>
                </div>
                <div className="p-3 bg-pink-100 rounded-lg">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Recent Activity
              </h3>
              <div className="space-y-3">
                {todayRecords.slice(0, 5).map(record => {
                  const Icon = getRecordIcon(record.type);
                  return (
                    <div key={record.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                      <div className={`p-2 rounded-full ${getRecordColor(record.type)}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 capitalize">{record.type}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(record.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                      {record.duration && (
                        <span className="text-xs text-gray-500">{record.duration}min</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Growth Tracking
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Weight Progress</h4>
                  <p className="text-sm text-blue-700">Baby is gaining weight steadily - 7.2 lbs (up from 6.8 lbs last week)</p>
                </div>
                
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Feeding Pattern</h4>
                  <p className="text-sm text-green-700">Consistent feeding every 2-3 hours. Great job establishing routine!</p>
                </div>
                
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-2">Sleep Pattern</h4>
                  <p className="text-sm text-purple-700">Average 14 hours of sleep per day. Sleep cycles are developing well.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'records' && (
        <>
          <div className="flex space-x-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search records..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedRecordType}
              onChange={(e) => setSelectedRecordType(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Records</option>
              <option value="feeding">Feeding</option>
              <option value="diaper">Diaper</option>
              <option value="sleep">Sleep</option>
              <option value="milestone">Milestones</option>
            </select>
          </div>

          <div className="space-y-4">
            {filteredRecords.map(record => {
              const Icon = getRecordIcon(record.type);
              return (
                <div key={record.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${getRecordColor(record.type)}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900 text-lg capitalize">{record.type}</h3>
                        <span className="text-sm text-gray-500">
                          {new Date(record.timestamp).toLocaleString()}
                        </span>
                      </div>
                      
                      {record.notes && (
                        <p className="text-gray-600 mb-3">{record.notes}</p>
                      )}
                      
                      <div className="flex space-x-4 text-sm text-gray-600">
                        {record.duration && (
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{record.duration} minutes</span>
                          </div>
                        )}
                        {record.amount && (
                          <div className="flex items-center space-x-1">
                            <Droplets className="w-4 h-4" />
                            <span>{record.amount} ml</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {activeTab === 'milestones' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Development Milestones</h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    milestone.achieved ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    {milestone.achieved ? (
                      <Star className="w-5 h-5 text-green-600 fill-current" />
                    ) : (
                      <span className="text-gray-400 text-sm">{index + 1}</span>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-gray-900">{milestone.milestone}</h4>
                        <p className="text-sm text-gray-600">Expected at {milestone.age}</p>
                      </div>
                      {milestone.achieved && milestone.date && (
                        <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          Achieved {new Date(milestone.date).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {!milestone.achieved && (
                    <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Mark Achieved
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tips' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{tip.title}</h3>
                  <div className="flex space-x-2 text-xs">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{tip.category}</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full">{tip.ageGroup}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">{tip.content}</p>
              
              <div className="mt-4 flex space-x-2">
                <button className="flex-1 bg-blue-50 text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                  Save Tip
                </button>
                <button className="flex-1 bg-gray-50 text-gray-600 py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}