import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store';
import { 
  Settings, 
  ShoppingBag, 
  Users, 
  BarChart2, 
  Shield, 
  Bell, 
  HelpCircle,
  Package,
  CreditCard,
  History
} from 'lucide-react';

interface MenuItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

const MenuItem = ({ icon: Icon, title, description, link }: MenuItemProps) => (
  <Link
    to={link}
    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
  >
    <div className="flex-shrink-0">
      <Icon className="h-6 w-6 text-indigo-500" />
    </div>
    <div className="flex-1">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  </Link>
);

const AdminSection = () => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-gray-900 px-4">Admin Controls</h2>
    <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
      <MenuItem
        icon={Users}
        title="User Management"
        description="Manage user accounts and permissions"
        link="/admin/users"
      />
      <MenuItem
        icon={BarChart2}
        title="Analytics Dashboard"
        description="View detailed platform analytics and metrics"
        link="/admin/analytics"
      />
      <MenuItem
        icon={Shield}
        title="Security Settings"
        description="Configure platform security and access controls"
        link="/admin/security"
      />
    </div>
  </div>
);

const UserSection = () => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-gray-900 px-4">Account Settings</h2>
    <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
      <MenuItem
        icon={ShoppingBag}
        title="My Orders"
        description="View and track your orders"
        link="/orders"
      />
      <MenuItem
        icon={Package}
        title="Saved Items"
        description="View your wishlist and saved products"
        link="/wishlist"
      />
      <MenuItem
        icon={History}
        title="Purchase History"
        description="View your complete purchase history"
        link="/purchase-history"
      />
      <MenuItem
        icon={CreditCard}
        title="Payment Methods"
        description="Manage your payment options"
        link="/payment-methods"
      />
      <MenuItem
        icon={Bell}
        title="Notifications"
        description="Configure your notification preferences"
        link="/notifications"
      />
      <MenuItem
        icon={Settings}
        title="Account Settings"
        description="Update your profile and preferences"
        link="/settings"
      />
      <MenuItem
        icon={HelpCircle}
        title="Help & Support"
        description="Get help with your account"
        link="/support"
      />
    </div>
  </div>
);

export default function Profile() {
  const user = useStore((state) => state.user);

  if (!user) {
    return (
      <div className="text-center py-12 bg-white">
        <h2 className="text-2xl font-bold text-gray-900">Please sign in</h2>
        <p className="mt-2 text-gray-600">You need to be signed in to view your profile.</p>
        <Link
          to="/login"
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      <div className="mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <img
              src={user.avatar || 'https://via.placeholder.com/128'}
              alt={user.name}
              className="h-32 w-32 rounded-full border-4 border-indigo-50"
            />
            <div className="ml-6">
              <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="mt-1 text-sm text-gray-500">
                Role: {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </p>
              <div className="mt-4">
                <Link
                  to="/settings"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <UserSection />
        {user.role === 'admin' && <AdminSection />}
      </div>
    </div>
  );
}