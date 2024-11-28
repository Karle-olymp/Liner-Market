import React from 'react';
import { useStore } from '../store';
import { BarChart, Package, DollarSign, Users } from 'lucide-react';

export default function SellerDashboard() {
  const user = useStore((state) => state.user);

  if (!user || user.role !== 'seller') {
    return (
      <div className="text-center py-12 bg-custom-beige">
        <h2 className="text-2xl font-bold text-gray-900">Access Denied</h2>
        <p className="mt-2 text-gray-600">You need to be a seller to access this page.</p>
      </div>
    );
  }

  const stats = [
    { name: 'Total Sales', value: '€12,345', icon: DollarSign },
    { name: 'Products', value: '25', icon: Package },
    { name: 'Customers', value: '1,234', icon: Users },
    { name: 'Revenue', value: '€98,765', icon: BarChart },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-custom-beige">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Seller Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {stat.value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}