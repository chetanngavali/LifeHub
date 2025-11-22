import React, { useState } from 'react';
import { Plus, Search, MapPin, Calendar, DollarSign, Plane, Hotel, Camera, Clock, Edit, Trash2 } from 'lucide-react';
import type { Trip, TripItem } from '../types';

export default function TripNest() {
  const [activeTab, setActiveTab] = useState<'trips' | 'current' | 'planning'>('trips');
  const [searchTerm, setSearchTerm] = useState('');

  const trips: Trip[] = [
    {
      id: '1',
      destination: 'Paris, France',
      startDate: '2025-02-15',
      endDate: '2025-02-22',
      flights: [
        { id: 'f1', name: 'NYC to Paris', date: '2025-02-15', time: '10:30 AM', cost: 650, location: 'JFK Airport', confirmationNumber: 'AF1234' },
        { id: 'f2', name: 'Paris to NYC', date: '2025-02-22', time: '2:15 PM', cost: 650, location: 'CDG Airport', confirmationNumber: 'AF5678' }
      ],
      hotels: [
        { id: 'h1', name: 'Hotel Le Marais', date: '2025-02-15', cost: 150, location: '4th Arrondissement', confirmationNumber: 'HLM789' }
      ],
      activities: [
        { id: 'a1', name: 'Eiffel Tower Tour', date: '2025-02-16', time: '2:00 PM', cost: 35, location: 'Champ de Mars' },
        { id: 'a2', name: 'Louvre Museum', date: '2025-02-17', time: '10:00 AM', cost: 17, location: 'Rue de Rivoli' },
        { id: 'a3', name: 'Seine River Cruise', date: '2025-02-18', time: '7:00 PM', cost: 25, location: 'Port de la Bourdonnais' }
      ],
      totalBudget: 2000,
      spentAmount: 1527
    },
    {
      id: '2',
      destination: 'Tokyo, Japan',
      startDate: '2025-03-10',
      endDate: '2025-03-17',
      flights: [
        { id: 'f3', name: 'NYC to Tokyo', date: '2025-03-10', time: '1:00 PM', cost: 850, location: 'JFK Airport', confirmationNumber: 'JL9876' }
      ],
      hotels: [
        { id: 'h2', name: 'Tokyo Bay Hotel', date: '2025-03-10', cost: 120, location: 'Shibuya', confirmationNumber: 'TBH456' }
      ],
      activities: [
        { id: 'a4', name: 'Tsukiji Fish Market', date: '2025-03-11', time: '6:00 AM', cost: 0, location: 'Tsukiji' },
        { id: 'a5', name: 'Mount Fuji Day Trip', date: '2025-03-13', time: '8:00 AM', cost: 85, location: 'Mount Fuji' }
      ],
      totalBudget: 2500,
      spentAmount: 1055
    }
  ];

  const upcomingTrips = trips.filter(trip => new Date(trip.startDate) > new Date());
  const currentTrip = trips.find(trip => {
    const now = new Date();
    return new Date(trip.startDate) <= now && new Date(trip.endDate) >= now;
  });

  const getBudgetStatus = (spent: number, total: number) => {
    const percentage = (spent / total) * 100;
    if (percentage >= 90) return { color: 'text-red-600 bg-red-50', status: 'Over Budget' };
    if (percentage >= 75) return { color: 'text-orange-600 bg-orange-50', status: 'Close to Limit' };
    return { color: 'text-green-600 bg-green-50', status: 'On Track' };
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">TripNest</h1>
          <p className="text-gray-600">Plan, organize, and track all your travel adventures</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Plan New Trip</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
        {[
          { id: 'trips', label: 'All Trips' },
          { id: 'current', label: 'Current Trip' },
          { id: 'planning', label: 'Trip Planner' }
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

      {activeTab === 'trips' && (
        <>
          <div className="relative mb-6">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search trips..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trips.map(trip => {
              const budgetStatus = getBudgetStatus(trip.spentAmount, trip.totalBudget);
              const daysUntil = Math.ceil((new Date(trip.startDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
              
              return (
                <div key={trip.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-xl mb-1">{trip.destination}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}</span>
                        </div>
                        {daysUntil > 0 && (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                            {daysUntil} days to go
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <Plane className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                      <p className="text-xs text-gray-600">Flights</p>
                      <p className="font-semibold text-gray-900">{trip.flights.length}</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <Hotel className="w-6 h-6 text-green-600 mx-auto mb-1" />
                      <p className="text-xs text-gray-600">Hotels</p>
                      <p className="font-semibold text-gray-900">{trip.hotels.length}</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <Camera className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                      <p className="text-xs text-gray-600">Activities</p>
                      <p className="font-semibold text-gray-900">{trip.activities.length}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Budget Progress</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${budgetStatus.color}`}>
                        {budgetStatus.status}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((trip.spentAmount / trip.totalBudget) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 mt-1">
                      <span>${trip.spentAmount}</span>
                      <span>${trip.totalBudget}</span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    View Itinerary
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}

      {activeTab === 'current' && (
        <div>
          {currentTrip ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentTrip.destination}</h2>
                  <p className="text-gray-600">Currently traveling</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Active Trip
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Plane className="w-5 h-5 mr-2 text-blue-600" />
                    Flights
                  </h3>
                  <div className="space-y-2">
                    {currentTrip.flights.map(flight => (
                      <div key={flight.id} className="p-3 border border-gray-200 rounded-lg">
                        <p className="font-medium text-gray-900">{flight.name}</p>
                        <p className="text-sm text-gray-600">{flight.date} at {flight.time}</p>
                        <p className="text-xs text-gray-500">Confirmation: {flight.confirmationNumber}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Hotel className="w-5 h-5 mr-2 text-green-600" />
                    Hotels
                  </h3>
                  <div className="space-y-2">
                    {currentTrip.hotels.map(hotel => (
                      <div key={hotel.id} className="p-3 border border-gray-200 rounded-lg">
                        <p className="font-medium text-gray-900">{hotel.name}</p>
                        <p className="text-sm text-gray-600">{hotel.location}</p>
                        <p className="text-xs text-gray-500">Confirmation: {hotel.confirmationNumber}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Camera className="w-5 h-5 mr-2 text-purple-600" />
                    Activities
                  </h3>
                  <div className="space-y-2">
                    {currentTrip.activities.map(activity => (
                      <div key={activity.id} className="p-3 border border-gray-200 rounded-lg">
                        <p className="font-medium text-gray-900">{activity.name}</p>
                        <p className="text-sm text-gray-600">{activity.date} at {activity.time}</p>
                        <p className="text-xs text-gray-500">{activity.location}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Plane className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No active trips</h3>
              <p className="text-gray-500">Plan your next adventure!</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'planning' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Plan Your Next Trip</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
              <input
                type="number"
                placeholder="Total budget"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
              <Plane className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900 mb-1">Add Flights</h3>
              <p className="text-sm text-gray-500">Search and book flights</p>
            </div>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
              <Hotel className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900 mb-1">Add Hotels</h3>
              <p className="text-sm text-gray-500">Find accommodations</p>
            </div>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
              <Camera className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900 mb-1">Add Activities</h3>
              <p className="text-sm text-gray-500">Plan experiences</p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Create Trip
            </button>
          </div>
        </div>
      )}
    </div>
  );
}