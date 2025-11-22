import React from 'react';
import { 
  AlertTriangle, 
  Calendar, 
  DollarSign, 
  Users, 
  TrendingUp,
  Bell,
  CheckCircle,
  Clock
} from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Items Expiring Soon', value: '3', icon: AlertTriangle, color: 'text-red-600 bg-red-50' },
    { label: 'Monthly Subscriptions', value: '$127.96', icon: DollarSign, color: 'text-green-600 bg-green-50' },
    { label: 'Active Trips', value: '2', icon: Calendar, color: 'text-blue-600 bg-blue-50' },
    { label: 'Community Requests', value: '4', icon: Users, color: 'text-purple-600 bg-purple-50' },
  ];

  const recentActivity = [
    { type: 'food', message: 'Milk expires in 2 days', time: '2 hours ago', urgent: true },
    { type: 'subscription', message: 'Netflix payment due tomorrow ($15.99)', time: '4 hours ago', urgent: true },
    { type: 'share', message: 'John borrowed your drill', time: '1 day ago', urgent: false },
    { type: 'travel', message: 'Flight reminder: Paris trip in 5 days', time: '2 days ago', urgent: false },
    { type: 'baby', message: 'Baby fed 3 times today', time: '3 hours ago', urgent: false },
    { type: 'rental', message: 'Office desk rental expires in 3 days', time: '5 hours ago', urgent: true },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
        <p className="text-gray-600">Here's what's happening in your life today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Bell className="w-5 h-5 mr-2" />
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <div className={`p-2 rounded-full ${activity.urgent ? 'bg-red-100' : 'bg-blue-100'}`}>
                  {activity.urgent ? (
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  ) : (
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Add Food Item</p>
              </div>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-center">
                <div className="w-8 h-8 bg-green-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Split Bill</p>
              </div>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-center">
                <div className="w-8 h-8 bg-purple-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Find Help</p>
              </div>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-center">
                <div className="w-8 h-8 bg-red-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-red-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Track Expense</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}