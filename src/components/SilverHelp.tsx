import React, { useState } from 'react';
import { Plus, Search, Heart, Clock, MapPin, Star, Phone, MessageCircle, Users, BookOpen } from 'lucide-react';
import type { HelpRequest, User } from '../types';

export default function SilverHelp() {
  const [activeTab, setActiveTab] = useState<'requests' | 'volunteer' | 'tutorials' | 'community'>('requests');
  const [searchTerm, setSearchTerm] = useState('');

  const helpRequests: HelpRequest[] = [
    {
      id: '1',
      title: 'Help with Online Banking Setup',
      description: 'Need assistance setting up online banking and learning how to transfer money safely.',
      category: 'Technology',
      requester: { id: '1', name: 'Margaret Johnson', email: 'margaret@example.com', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150' },
      location: '0.5 miles away',
      urgency: 'medium',
      status: 'open'
    },
    {
      id: '2',
      title: 'Grocery Shopping Assistance',
      description: 'Looking for someone to help with weekly grocery shopping. Can provide list and payment.',
      category: 'Shopping',
      requester: { id: '2', name: 'Robert Chen', email: 'robert@example.com', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150' },
      location: '1.2 miles away',
      urgency: 'low',
      status: 'open'
    },
    {
      id: '3',
      title: 'Smartphone Tutorial Needed',
      description: 'Would like to learn how to use video calling and messaging apps to stay in touch with family.',
      category: 'Technology',
      requester: { id: '3', name: 'Dorothy Williams', email: 'dorothy@example.com', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150' },
      location: '0.8 miles away',
      urgency: 'low',
      status: 'in-progress'
    },
    {
      id: '4',
      title: 'Medical Appointment Transportation',
      description: 'Need a ride to doctor appointment next Tuesday at 2 PM. Can pay for gas.',
      category: 'Transportation',
      requester: { id: '4', name: 'Frank Davis', email: 'frank@example.com', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150' },
      location: '2.1 miles away',
      urgency: 'high',
      status: 'open'
    }
  ];

  const tutorials = [
    { title: 'Setting Up Video Calls', category: 'Technology', duration: '15 min', difficulty: 'Beginner' },
    { title: 'Online Shopping Basics', category: 'Technology', duration: '20 min', difficulty: 'Beginner' },
    { title: 'Social Media Safety', category: 'Safety', duration: '25 min', difficulty: 'Intermediate' },
    { title: 'Banking Apps Tutorial', category: 'Finance', duration: '30 min', difficulty: 'Intermediate' },
    { title: 'Email Management', category: 'Technology', duration: '18 min', difficulty: 'Beginner' },
    { title: 'Password Security', category: 'Safety', duration: '12 min', difficulty: 'Beginner' }
  ];

  const volunteers = [
    { name: 'Sarah Thompson', skills: ['Technology', 'Shopping'], rating: 4.9, helpedCount: 23 },
    { name: 'Michael Rodriguez', skills: ['Transportation', 'Technology'], rating: 4.8, helpedCount: 18 },
    { name: 'Emily Chen', skills: ['Technology', 'Finance'], rating: 4.9, helpedCount: 31 },
    { name: 'David Wilson', skills: ['Shopping', 'Transportation'], rating: 4.7, helpedCount: 15 }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-blue-600 bg-blue-50';
      case 'in-progress': return 'text-orange-600 bg-orange-50';
      case 'completed': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SilverHelp</h1>
          <p className="text-gray-600">Community support network for seniors</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Request Help</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Requests</p>
              <p className="text-2xl font-bold text-gray-900">{helpRequests.filter(r => r.status === 'open').length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Volunteers</p>
              <p className="text-2xl font-bold text-gray-900">{volunteers.length}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">87</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Tutorials</p>
              <p className="text-2xl font-bold text-gray-900">{tutorials.length}</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
        {[
          { id: 'requests', label: 'Help Requests' },
          { id: 'volunteer', label: 'Volunteers' },
          { id: 'tutorials', label: 'Tutorials' },
          { id: 'community', label: 'Community' }
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

      {activeTab === 'requests' && (
        <>
          <div className="relative mb-6">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search help requests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-4">
            {helpRequests.map(request => (
              <div key={request.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-gray-900 text-lg">{request.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(request.urgency)}`}>
                        {request.urgency} priority
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{request.description}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <img
                          src={request.requester.avatar}
                          alt={request.requester.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span>{request.requester.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{request.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {request.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 ml-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                      <Heart className="w-4 h-4" />
                      <span>Offer Help</span>
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'volunteer' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteers.map((volunteer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{volunteer.name}</h3>
                <div className="flex items-center justify-center space-x-1 mt-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600">{volunteer.rating}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                <div className="flex flex-wrap gap-1">
                  {volunteer.skills.map(skill => (
                    <span key={skill} className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center text-sm text-gray-600 mb-4">
                <p>Helped {volunteer.helpedCount} people</p>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>Contact</span>
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                  Profile
                </button>
              </div>
            </div>
          ))}

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Become a Volunteer</h3>
            <p className="text-sm text-gray-500 mb-4">Help seniors in your community</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Join as Volunteer
            </button>
          </div>
        </div>
      )}

      {activeTab === 'tutorials' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{tutorial.title}</h3>
                  <p className="text-sm text-gray-600">{tutorial.category}</p>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{tutorial.duration}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                }`}>
                  {tutorial.difficulty}
                </span>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Start Tutorial
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'community' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Events</h3>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Digital Literacy Workshop</h4>
                <p className="text-sm text-gray-600 mb-2">Learn smartphone basics and video calling</p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>📅 Jan 25, 2025</span>
                  <span>🕐 2:00 PM</span>
                  <span>📍 Community Center</span>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Coffee & Tech Help</h4>
                <p className="text-sm text-gray-600 mb-2">Informal tech support over coffee</p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>📅 Jan 27, 2025</span>
                  <span>🕐 10:00 AM</span>
                  <span>📍 Local Café</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Stories</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800 mb-2">"Thanks to Sarah, I can now video call my grandchildren every week!"</p>
                <p className="text-xs text-green-600">- Margaret J.</p>
              </div>
              
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800 mb-2">"The grocery shopping help has been a lifesaver during winter."</p>
                <p className="text-xs text-blue-600">- Robert C.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}