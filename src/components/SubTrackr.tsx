import React, { useState } from 'react';
import { Plus, Search, Calendar, DollarSign, AlertTriangle, Check, Pause, Play, X } from 'lucide-react';
import type { Subscription } from '../types';

export default function SubTrackr() {
  const [activeTab, setActiveTab] = useState<'active' | 'cancelled' | 'analytics'>('active');
  const [searchTerm, setSearchTerm] = useState('');

  const subscriptions: Subscription[] = [
    {
      id: '1',
      name: 'Netflix',
      cost: 15.99,
      billingCycle: 'monthly',
      nextBilling: '2025-02-01',
      category: 'Entertainment',
      status: 'active'
    },
    {
      id: '2',
      name: 'Spotify Premium',
      cost: 9.99,
      billingCycle: 'monthly',
      nextBilling: '2025-01-28',
      category: 'Music',
      status: 'active'
    },
    {
      id: '3',
      name: 'Adobe Creative Cloud',
      cost: 52.99,
      billingCycle: 'monthly',
      nextBilling: '2025-02-05',
      category: 'Software',
      status: 'active'
    },
    {
      id: '4',
      name: 'Amazon Prime',
      cost: 139.00,
      billingCycle: 'yearly',
      nextBilling: '2025-12-15',
      category: 'Shopping',
      status: 'active'
    },
    {
      id: '5',
      name: 'Gym Membership',
      cost: 29.99,
      billingCycle: 'monthly',
      nextBilling: '2025-01-25',
      category: 'Health',
      status: 'active'
    },
    {
      id: '6',
      name: 'Hulu',
      cost: 12.99,
      billingCycle: 'monthly',
      nextBilling: '2025-01-30',
      category: 'Entertainment',
      status: 'cancelled'
    }
  ];

  const activeSubscriptions = subscriptions.filter(sub => sub.status === 'active');
  const cancelledSubscriptions = subscriptions.filter(sub => sub.status === 'cancelled');

  const totalMonthly = activeSubscriptions.reduce((total, sub) => {
    return total + (sub.billingCycle === 'monthly' ? sub.cost : sub.cost / 12);
  }, 0);

  const totalYearly = totalMonthly * 12;

  const getNextBillingStatus = (nextBilling: string) => {
    const today = new Date();
    const billing = new Date(nextBilling);
    const diffTime = billing.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 3) return { color: 'text-red-600 bg-red-50', text: `${diffDays} days` };
    if (diffDays <= 7) return { color: 'text-orange-600 bg-orange-50', text: `${diffDays} days` };
    return { color: 'text-green-600 bg-green-50', text: `${diffDays} days` };
  };

  const categoryColors = {
    Entertainment: 'bg-purple-100 text-purple-800',
    Music: 'bg-pink-100 text-pink-800',
    Software: 'bg-blue-100 text-blue-800',
    Shopping: 'bg-orange-100 text-orange-800',
    Health: 'bg-green-100 text-green-800'
  };

  const upcomingBills = activeSubscriptions
    .filter(sub => {
      const diffDays = Math.ceil((new Date(sub.nextBilling).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
      return diffDays <= 7;
    })
    .sort((a, b) => new Date(a.nextBilling).getTime() - new Date(b.nextBilling).getTime());

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SubTrackr</h1>
          <p className="text-gray-600">Track and manage all your subscriptions in one place</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Subscription</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Total</p>
              <p className="text-2xl font-bold text-gray-900">${totalMonthly.toFixed(2)}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Yearly Total</p>
              <p className="text-2xl font-bold text-gray-900">${totalYearly.toFixed(2)}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Subs</p>
              <p className="text-2xl font-bold text-gray-900">{activeSubscriptions.length}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Check className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Due Soon</p>
              <p className="text-2xl font-bold text-gray-900">{upcomingBills.length}</p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Bills Alert */}
      {upcomingBills.length > 0 && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <h3 className="font-semibold text-orange-800">Upcoming Bills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {upcomingBills.map(sub => (
              <span key={sub.id} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                {sub.name} - ${sub.cost} in {getNextBillingStatus(sub.nextBilling).text}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
        {[
          { id: 'active', label: 'Active Subscriptions' },
          { id: 'cancelled', label: 'Cancelled' },
          { id: 'analytics', label: 'Analytics' }
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

      {activeTab === 'active' && (
        <>
          <div className="relative mb-6">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search subscriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeSubscriptions.map(subscription => {
              const billingStatus = getNextBillingStatus(subscription.nextBilling);
              return (
                <div key={subscription.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">{subscription.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[subscription.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-800'}`}>
                        {subscription.category}
                      </span>
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-orange-600">
                        <Pause className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Cost</span>
                      <span className="font-semibold text-gray-900">
                        ${subscription.cost}/{subscription.billingCycle === 'monthly' ? 'mo' : 'yr'}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Next billing</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${billingStatus.color}`}>
                        {billingStatus.text}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Date</span>
                      <span className="text-sm text-gray-900">
                        {new Date(subscription.nextBilling).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-50 text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                      Manage
                    </button>
                    <button className="flex-1 bg-gray-50 text-gray-600 py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
                      Cancel
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {activeTab === 'cancelled' && (
        <div className="space-y-4">
          {cancelledSubscriptions.map(subscription => (
            <div key={subscription.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 opacity-75">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{subscription.name}</h3>
                    <p className="text-sm text-gray-600">{subscription.category}</p>
                  </div>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                    Cancelled
                  </span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Was ${subscription.cost}/{subscription.billingCycle === 'monthly' ? 'mo' : 'yr'}</p>
                    <p className="text-xs text-gray-500">Saved annually: ${subscription.billingCycle === 'monthly' ? (subscription.cost * 12).toFixed(2) : subscription.cost.toFixed(2)}</p>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Reactivate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Spending by Category</h3>
            <div className="space-y-4">
              {Object.entries(
                activeSubscriptions.reduce((acc, sub) => {
                  const monthlyCost = sub.billingCycle === 'monthly' ? sub.cost : sub.cost / 12;
                  acc[sub.category] = (acc[sub.category] || 0) + monthlyCost;
                  return acc;
                }, {} as Record<string, number>)
              ).map(([category, amount]) => (
                <div key={category} className="flex justify-between items-center">
                  <span className="text-gray-700">{category}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(amount / totalMonthly) * 100}%` }}
                      ></div>
                    </div>
                    <span className="font-semibold text-gray-900 w-16 text-right">${amount.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Money-Saving Tips</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Annual Billing Savings</h4>
                <p className="text-sm text-green-700">Switch to annual billing to save up to 20% on your subscriptions</p>
              </div>
              
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Bundle Opportunities</h4>
                <p className="text-sm text-blue-700">Consider bundling Netflix and Spotify for potential savings</p>
              </div>
              
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <h4 className="font-medium text-orange-800 mb-2">Unused Subscriptions</h4>
                <p className="text-sm text-orange-700">You haven't used Adobe Creative Cloud in 30 days</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}