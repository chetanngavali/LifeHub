import React, { useState } from 'react';
import { Search, Star, MapPin, Clock, Heart, Calendar, AlertCircle } from 'lucide-react';
import type { PetSitter } from '../types';

export default function PetBuddy() {
  const [activeTab, setActiveTab] = useState<'sitters' | 'vets' | 'lost-pets'>('sitters');
  const [searchTerm, setSearchTerm] = useState('');

  const petSitters: PetSitter[] = [
    {
      id: '1',
      name: 'Emma Thompson',
      rating: 4.9,
      pricePerHour: 25,
      services: ['Dog Walking', 'Pet Sitting', 'Overnight Care'],
      location: '0.8 miles away',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '2',
      name: 'Michael Chen',
      rating: 4.8,
      pricePerHour: 30,
      services: ['Pet Sitting', 'Grooming', 'Training'],
      location: '1.2 miles away',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '3',
      name: 'Sarah Williams',
      rating: 4.7,
      pricePerHour: 20,
      services: ['Dog Walking', 'Pet Sitting'],
      location: '2.1 miles away',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const vets = [
    { name: 'Happy Paws Veterinary', distance: '0.5 miles', rating: 4.8, phone: '(555) 123-4567' },
    { name: 'City Animal Hospital', distance: '1.2 miles', rating: 4.6, phone: '(555) 234-5678' },
    { name: 'Pet Care Center', distance: '2.0 miles', rating: 4.9, phone: '(555) 345-6789' }
  ];

  const lostPets = [
    { name: 'Max', type: 'Golden Retriever', location: 'Downtown area', lastSeen: '2 hours ago', contact: '(555) 111-2222' },
    { name: 'Whiskers', type: 'Orange Tabby Cat', location: 'Park Avenue', lastSeen: '1 day ago', contact: '(555) 333-4444' }
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PetBuddy</h1>
          <p className="text-gray-600">Find trusted pet care services in your area</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Heart className="w-5 h-5" />
          <span>Become a Sitter</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
        {[
          { id: 'sitters', label: 'Pet Sitters' },
          { id: 'vets', label: 'Veterinarians' },
          { id: 'lost-pets', label: 'Lost Pets' }
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

      {activeTab === 'sitters' && (
        <>
          <div className="relative mb-6">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search pet sitters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {petSitters.map(sitter => (
              <div key={sitter.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={sitter.avatar}
                    alt={sitter.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{sitter.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">{sitter.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{sitter.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>${sitter.pricePerHour}/hour</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Services:</p>
                  <div className="flex flex-wrap gap-1">
                    {sitter.services.map(service => (
                      <span key={service} className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Book Now
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                    Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'vets' && (
        <div className="space-y-4">
          {vets.map((vet, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{vet.name}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{vet.distance}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{vet.rating} rating</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 mb-2">{vet.phone}</p>
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Call Now
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'lost-pets' && (
        <div className="space-y-4">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              <p className="text-orange-800 font-medium">Help find these missing pets in your area</p>
            </div>
          </div>

          {lostPets.map((pet, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{pet.name} - {pet.type}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Last seen: {pet.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{pet.lastSeen}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 mb-2">{pet.contact}</p>
                  <div className="flex space-x-2">
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                      I Found This Pet
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Share Alert
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center py-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Report a Lost Pet
            </button>
          </div>
        </div>
      )}
    </div>
  );
}