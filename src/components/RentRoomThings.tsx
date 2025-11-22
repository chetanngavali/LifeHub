import React, { useState } from 'react';
import { Plus, Search, MapPin, Calendar, DollarSign, Star, Truck, Clock, Filter } from 'lucide-react';
import type { RentalItem } from '../types';

export default function RentRoomThings() {
  const [activeTab, setActiveTab] = useState<'browse' | 'my-listings' | 'rented' | 'requests'>('browse');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const rentalItems: RentalItem[] = [
    {
      id: '1',
      name: 'Modern Office Desk',
      description: 'Spacious white desk perfect for home office or studying. Includes built-in drawers.',
      category: 'Furniture',
      pricePerDay: 15,
      owner: { id: '1', name: 'Sarah Johnson', email: 'sarah@example.com' },
      available: true,
      images: ['https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=400'],
      location: '0.8 miles away'
    },
    {
      id: '2',
      name: 'Ergonomic Office Chair',
      description: 'Comfortable ergonomic chair with lumbar support. Great for long work sessions.',
      category: 'Furniture',
      pricePerDay: 8,
      owner: { id: '2', name: 'Mike Chen', email: 'mike@example.com' },
      available: true,
      images: ['https://images.pexels.com/photos/586996/pexels-photo-586996.jpeg?auto=compress&cs=tinysrgb&w=400'],
      location: '1.2 miles away'
    },
    {
      id: '3',
      name: 'Mini Refrigerator',
      description: 'Compact fridge perfect for dorm rooms or small apartments. Energy efficient.',
      category: 'Appliances',
      pricePerDay: 12,
      owner: { id: '3', name: 'Lisa Davis', email: 'lisa@example.com' },
      available: false,
      images: ['https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=400'],
      location: '2.1 miles away'
    },
    {
      id: '4',
      name: 'Study Lamp Set',
      description: 'Set of 2 adjustable LED desk lamps. Perfect for late-night studying.',
      category: 'Electronics',
      pricePerDay: 5,
      owner: { id: '4', name: 'John Wilson', email: 'john@example.com' },
      available: true,
      images: ['https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400'],
      location: '0.5 miles away'
    },
    {
      id: '5',
      name: 'Folding Table',
      description: 'Portable folding table great for events, studying, or extra workspace.',
      category: 'Furniture',
      pricePerDay: 10,
      owner: { id: '5', name: 'Emma Thompson', email: 'emma@example.com' },
      available: true,
      images: ['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'],
      location: '1.5 miles away'
    },
    {
      id: '6',
      name: 'Air Purifier',
      description: 'HEPA air purifier for clean, fresh air in your room. Quiet operation.',
      category: 'Appliances',
      pricePerDay: 7,
      owner: { id: '6', name: 'David Rodriguez', email: 'david@example.com' },
      available: true,
      images: ['https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400'],
      location: '0.9 miles away'
    }
  ];

  const categories = ['all', 'Furniture', 'Appliances', 'Electronics', 'Decor', 'Storage'];

  const filteredItems = rentalItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const myListings = rentalItems.filter(item => item.owner.name === 'You');
  const rentedItems = [
    { ...rentalItems[0], rentedUntil: '2025-01-30', dailyRate: 15 },
    { ...rentalItems[3], rentedUntil: '2025-01-25', dailyRate: 5 }
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">RentRoomThings</h1>
          <p className="text-gray-600">Rent furniture and appliances for temporary needs</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>List Item</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Available Items</p>
              <p className="text-2xl font-bold text-gray-900">{rentalItems.filter(i => i.available).length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Search className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Daily Rate</p>
              <p className="text-2xl font-bold text-gray-900">$9.50</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Rentals</p>
              <p className="text-2xl font-bold text-gray-900">{rentedItems.length}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Delivery Available</p>
              <p className="text-2xl font-bold text-gray-900">85%</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <Truck className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
        {[
          { id: 'browse', label: 'Browse Items' },
          { id: 'my-listings', label: 'My Listings' },
          { id: 'rented', label: 'Currently Rented' },
          { id: 'requests', label: 'Rental Requests' }
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

      {activeTab === 'browse' && (
        <>
          {/* Search and Filters */}
          <div className="flex space-x-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {item.available ? 'Available' : 'Rented'}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-semibold text-gray-900">${item.pricePerDay}/day</span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>Owner: {item.owner.name}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-xs">4.8</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button 
                      disabled={!item.available}
                      className={`flex-1 py-2 px-3 rounded-lg font-medium transition-colors ${
                        item.available
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {item.available ? 'Rent Now' : 'Unavailable'}
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'my-listings' && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Plus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No items listed yet</h3>
          <p className="text-gray-500 mb-4">Start earning by renting out items you don't use daily</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            List Your First Item
          </button>
        </div>
      )}

      {activeTab === 'rented' && (
        <div className="space-y-4">
          {rentedItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start">
                <div className="flex space-x-4">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>${item.dailyRate}/day</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Until {new Date(item.rentedUntil).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Extend Rental
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    Return Item
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'requests' && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Clock className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No rental requests</h3>
          <p className="text-gray-500">Incoming rental requests will appear here</p>
        </div>
      )}
    </div>
  );
}