import React from 'react';
import { useStore } from '../store';
import {
  Bell,
  Shield,
  User,
  Palette,
  Globe,
  CreditCard,
  HelpCircle,
  DollarSign,
} from 'lucide-react';
import DarkModeToggle from '../components/DarkModeToggle';
import SettingsSection from '../components/settings/SettingsSection';
import SettingsItem from '../components/settings/SettingsItem';
import SettingsToggle from '../components/settings/SettingsToggle';
import SettingsSelect from '../components/settings/SettingsSelect';

const languages = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'es', label: 'Spanish' },
];

const currencies = [
  { value: 'EUR', label: 'EUR (€)' },
  { value: 'USD', label: 'USD ($)' },
  { value: 'GBP', label: 'GBP (£)' },
  { value: 'JPY', label: 'JPY (¥)' },
];

const regions = [
  { value: 'FR', label: 'France' },
  { value: 'DE', label: 'Germany' },
  { value: 'IT', label: 'Italy' },
  { value: 'ES', label: 'Spain' },
  { value: 'GB', label: 'United Kingdom' },
];

export default function Settings() {
  const { user } = useStore();

  if (!user) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Please sign in</h2>
        <p className="mt-2 text-gray-600">You need to be signed in to view settings.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
      <div className="space-y-8">
        <SettingsSection title="Appearance" icon={Palette}>
          <SettingsItem
            label="Dark Mode"
            description="Toggle between light and dark theme"
            action={<DarkModeToggle />}
          />
          <SettingsItem
            label="Language"
            description="Choose your preferred language"
            action={<SettingsSelect options={languages} value="en" />}
          />
        </SettingsSection>

        <SettingsSection title="Notifications" icon={Bell}>
          <SettingsItem
            label="Push Notifications"
            description="Receive notifications about orders and promotions"
            action={<SettingsToggle />}
          />
          <SettingsItem
            label="Email Notifications"
            description="Receive email updates about your account"
            action={<SettingsToggle checked />}
          />
        </SettingsSection>

        <SettingsSection title="Privacy & Security" icon={Shield}>
          <SettingsItem
            label="Two-Factor Authentication"
            description="Add an extra layer of security to your account"
            action={
              <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Enable
              </button>
            }
          />
          <SettingsItem
            label="Privacy Settings"
            description="Manage your data and privacy preferences"
            action={
              <button className="text-indigo-600 hover:text-indigo-700">
                Manage
              </button>
            }
          />
        </SettingsSection>

        <SettingsSection title="Account" icon={User}>
          <SettingsItem
            label="Profile Information"
            description="Update your personal information"
            action={
              <button className="text-indigo-600 hover:text-indigo-700">
                Edit
              </button>
            }
          />
          <SettingsItem
            label="Password"
            description="Change your password"
            action={
              <button className="text-indigo-600 hover:text-indigo-700">
                Change
              </button>
            }
          />
        </SettingsSection>

        <SettingsSection title="Payment Methods" icon={CreditCard}>
          <SettingsItem
            label="Saved Cards"
            description="Manage your saved payment methods"
            action={
              <button className="text-indigo-600 hover:text-indigo-700">
                Manage
              </button>
            }
          />
        </SettingsSection>

        <SettingsSection title="Currency" icon={DollarSign}>
          <SettingsItem
            label="Preferred Currency"
            description="Choose your preferred currency for prices"
            action={<SettingsSelect options={currencies} value="EUR" />}
          />
        </SettingsSection>

        <SettingsSection title="Region" icon={Globe}>
          <SettingsItem
            label="Location"
            description="Set your location for shipping and taxes"
            action={<SettingsSelect options={regions} value="FR" />}
          />
        </SettingsSection>

        <SettingsSection title="Help & Support" icon={HelpCircle}>
          <SettingsItem
            label="Customer Support"
            description="Get help with your account or orders"
            action={
              <button className="text-indigo-600 hover:text-indigo-700">
                Contact
              </button>
            }
          />
          <SettingsItem
            label="FAQs"
            description="Find answers to common questions"
            action={
              <button className="text-indigo-600 hover:text-indigo-700">
                View
              </button>
            }
          />
        </SettingsSection>
      </div>
    </div>
  );
}