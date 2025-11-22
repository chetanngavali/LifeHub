import React, { useState } from 'react';
import { Plus, Search, DollarSign, Users, Calendar, Check, AlertCircle, Send } from 'lucide-react';
import type { Expense } from '../types';

export default function SplitFair() {
  const [activeTab, setActiveTab] = useState<'expenses' | 'balances' | 'groups'>('expenses');
  const [searchTerm, setSearchTerm] = useState('');

  const expenses: Expense[] = [
    {
      id: '1',
      description: 'Dinner at Italian Restaurant',
      amount: 120.50,
      paidBy: 'You',
      splitBetween: ['You', 'John', 'Sarah', 'Mike'],
      date: '2025-01-20',
      category: 'Food'
    },
    {
      id: '2',
      description: 'Uber to Airport',
      amount: 45.00,
      paidBy: 'John',
      splitBetween: ['You', 'John'],
      date: '2025-01-19',
      category: 'Transportation'
    },
    {
      id: '3',
      description: 'Grocery Shopping',
      amount: 85.75,
      paidBy: 'Sarah',
      splitBetween: ['You', 'Sarah', 'Mike'],
      date: '2025-01-18',
      category: 'Groceries'
    },
    {
      id: '4',
      description: 'Monthly Rent',
      amount: 2400.00,
      paidBy: 'You',
      splitBetween: ['You', 'John', 'Sarah'],
      date: '2025-01-01',
      category: 'Housing'
    }
  ];

  const balances = [
    { person: 'John', amount: -15.25, status: 'owes' },
    { person: 'Sarah', amount: 28.58, status: 'owes_you' },
    { person: 'Mike', amount: -13.33, status: 'owes' }
  ];

  const groups = [
    { id: '1', name: 'Roommates', members: ['You', 'John', 'Sarah'], totalExpenses: 2605.75 },
    { id: '2', name: 'Weekend Trip', members: ['You', 'Mike', 'Lisa'], totalExpenses: 450.25 },
    { id: '3', name: 'Work Lunch Group', members: ['You', 'Alex', 'Emma', 'David'], totalExpenses: 180.50 }
  ];

  const calculateSplit = (amount: number, people: string[]) => {
    return (amount / people.length).toFixed(2);
  };

  const getBalanceColor = (status: string) => {
    switch (status) {
      case 'owes': return 'text-red-600 bg-red-50';
      case 'owes_you': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SplitFair</h1>
          <p className="text-gray-600">Track shared expenses and settle up with friends</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Expense</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Expenses</p>
              <p className="text-2xl font-bold text-gray-900">$3,236.25</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">You Owe</p>
              <p className="text-2xl font-bold text-red-600">$28.58</p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Owed to You</p>
              <p className="text-2xl font-bold text-green-600">$28.58</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Check className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
        {[
          { id: 'expenses', label: 'Recent Expenses' },
          { id: 'balances', label: 'Balances' },
          { id: 'groups', label: 'Groups' }
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

      {activeTab === 'expenses' && (
        <>
          <div className="relative mb-6">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search expenses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-4">
            {expenses.map(expense => (
              <div key={expense.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-gray-900 text-lg">{expense.description}</h3>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {expense.category}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-medium">${expense.amount}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>Paid by {expense.paidBy}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(expense.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>Split: ${calculateSplit(expense.amount, expense.splitBetween)} each</span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <p className="text-sm text-gray-600 mb-2">Split between:</p>
                      <div className="flex flex-wrap gap-2">
                        {expense.splitBetween.map(person => (
                          <span key={person} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                            {person}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 ml-4">
                    <button className="p-2 text-gray-400 hover:text-blue-600">
                      <Send className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <DollarSign className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'balances' && (
        <div className="space-y-4">
          {balances.map((balance, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{balance.person}</h3>
                    <p className="text-sm text-gray-600">
                      {balance.status === 'owes' ? 'You owe' : 'Owes you'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-2 rounded-lg font-semibold text-lg ${getBalanceColor(balance.status)}`}>
                    ${Math.abs(balance.amount).toFixed(2)}
                  </span>
                  
                  <div className="flex space-x-2">
                    {balance.status === 'owes' ? (
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                        Pay Now
                      </button>
                    ) : (
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Send Reminder
                      </button>
                    )}
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <h3 className="font-semibold text-blue-900 mb-2">Settle All Balances</h3>
            <p className="text-blue-700 mb-4">Simplify payments by settling all outstanding balances at once</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Calculate Optimal Settlement
            </button>
          </div>
        </div>
      )}

      {activeTab === 'groups' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map(group => (
            <div key={group.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{group.name}</h3>
                  <p className="text-sm text-gray-600">{group.members.length} members</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Members:</p>
                <div className="flex flex-wrap gap-1">
                  {group.members.map(member => (
                    <span key={member} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-gray-700">Total Expenses</span>
                  <span className="font-semibold text-gray-900">${group.totalExpenses}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
            <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Plus className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Create New Group</h3>
            <p className="text-sm text-gray-500 mb-4">Start tracking expenses with friends or roommates</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Create Group
            </button>
          </div>
        </div>
      )}
    </div>
  );
}