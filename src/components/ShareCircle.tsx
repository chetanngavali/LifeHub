import React, { useState } from 'react';
import { Plus, Search, Star, MapPin, User, Clock } from 'lucide-react';
import type { ShareItem } from '../types';

export default function ShareCircle() {
  const [activeTab, setActiveTab] = useState<'browse' | 'my-items' | 'borrowed'>('browse');
  const [searchTerm, setSearchTerm] = useState('');

  const shareItems: ShareItem[] = [
    {
      id: '1',
      name: 'Power Drill',
      description: 'Cordless drill with various bits, perfect for home projects',
      category: 'Tools',
      owner: { id: '1', name: 'John Smith', email: 'john@example.com' },
      available: true,
      rating: 4.8,
      location: '0.5 miles away'
    },
    {
      id: '2',
      name: 'Camping Tent',
      description: '4-person tent, great for weekend camping trips',
      category: 'Outdoor',
      owner: { id: '2', name: 'Sarah Johnson', email: 'sarah@example.com' },
      available: true,
      rating: 4.9,
      location: '1.2 miles away'
    },
    {
      id: '3',
      name: 'Stand Mixer',
      description: 'KitchenAid mixer, perfect for baking enthusiasts',
      category: 'Kitchen',
      owner: { id: '3', name: 'Mike Davis', email: 'mike@example.com' },
      available: false,
      rating: 4.7,
      location: '0.8 miles away'
    },
    {
      id: '4',
      name: 'Ladder',
      description: '8-foot step ladder, ideal for painting and repairs',
      category: 'Tools',
      owner: { id: '4', name: 'Lisa Wilson', email: 'lisa@example.com' },
      available: true,
      rating: 4.6,
      location: '2.1 miles away'
    }
  ];

  const filteredItems = shareItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ['All', 'Tools', 'Kitchen', 'Outdoor', 'Electronics', 'Books', 'Sports'];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ShareCircle</h1>
          <p className="text-gray-600">Borrow and lend items within your community</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>List Item</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
        {[
          { id: 'browse', label: 'Browse Items' },
          { id: 'my-items', label: 'My Items' },
          { id: 'borrowed', label: 'Borrowed' }
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
          {/* Search and Categories */}
          <div className="mb-6">
            <div className="relative mb-4">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-6xl">📦</div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {item.available ? 'Available' : 'Borrowed'}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{item.owner.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{item.rating} rating</span>
                    </div>
                  </div>

                  <button 
                    disabled={!item.available}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                      item.available
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {item.available ? 'Request to Borrow' : 'Currently Unavailable'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'my-items' && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Plus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No items listed yet</h3>
          <p className="text-gray-500 mb-4">Start sharing items with your community</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            List Your First Item
          </button>
        </div>
      )}

      {activeTab === 'borrowed' && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Clock className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No borrowed items</h3>
          <p className="text-gray-500">Items you borrow will appear here</p>
        </div>
      )}
    </div>
  );
}