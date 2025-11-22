import React, { useState } from 'react';
import { Plus, Search, Filter, AlertTriangle, Calendar, MapPin } from 'lucide-react';
import type { FoodItem } from '../types';

export default function SmartPantry() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const foodItems: FoodItem[] = [
    {
      id: '1',
      name: 'Milk',
      category: 'Dairy',
      expiryDate: '2025-01-24',
      quantity: 1,
      location: 'fridge',
      addedDate: '2025-01-20'
    },
    {
      id: '2',
      name: 'Bread',
      category: 'Bakery',
      expiryDate: '2025-01-25',
      quantity: 1,
      location: 'pantry',
      addedDate: '2025-01-21'
    },
    {
      id: '3',
      name: 'Chicken Breast',
      category: 'Meat',
      expiryDate: '2025-01-26',
      quantity: 2,
      location: 'freezer',
      addedDate: '2025-01-19'
    },
    {
      id: '4',
      name: 'Yogurt',
      category: 'Dairy',
      expiryDate: '2025-01-23',
      quantity: 4,
      location: 'fridge',
      addedDate: '2025-01-18'
    }
  ];

  const getExpiryStatus = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return { status: 'expired', color: 'text-red-600 bg-red-50', text: 'Expired' };
    if (diffDays <= 2) return { status: 'urgent', color: 'text-orange-600 bg-orange-50', text: `${diffDays} days left` };
    if (diffDays <= 7) return { status: 'warning', color: 'text-yellow-600 bg-yellow-50', text: `${diffDays} days left` };
    return { status: 'good', color: 'text-green-600 bg-green-50', text: `${diffDays} days left` };
  };

  const filteredItems = foodItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || item.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  const expiringItems = foodItems.filter(item => {
    const status = getExpiryStatus(item.expiryDate);
    return status.status === 'urgent' || status.status === 'expired';
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Smart Pantry</h1>
          <p className="text-gray-600">Keep track of your food items and reduce waste</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Item</span>
        </button>
      </div>

      {/* Expiring Items Alert */}
      {expiringItems.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <h3 className="font-semibold text-red-800">Items Expiring Soon</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {expiringItems.map(item => (
              <span key={item.id} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                {item.name} - {getExpiryStatus(item.expiryDate).text}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Search and Filter */}
      <div className="flex space-x-4 mb-6">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search food items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Locations</option>
          <option value="fridge">Fridge</option>
          <option value="pantry">Pantry</option>
          <option value="freezer">Freezer</option>
        </select>
      </div>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => {
          const expiryStatus = getExpiryStatus(item.expiryDate);
          return (
            <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${expiryStatus.color}`}>
                  {expiryStatus.text}
                </span>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="capitalize">{item.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Expires: {new Date(item.expiryDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Quantity: {item.quantity}</span>
                </div>
              </div>

              <div className="mt-4 flex space-x-2">
                <button className="flex-1 bg-blue-50 text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                  Get Recipe
                </button>
                <button className="flex-1 bg-gray-50 text-gray-600 py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
          <p className="text-gray-500">Try adjusting your search or add some food items to get started.</p>
        </div>
      )}
    </div>
  );
}