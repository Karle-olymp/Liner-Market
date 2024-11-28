import React from 'react';

interface SettingsItemProps {
  label: string;
  description: string;
  action: React.ReactNode;
}

export default function SettingsItem({ label, description, action }: SettingsItemProps) {
  return (
    <div className="px-6 py-4 flex items-center justify-between">
      <div>
        <h3 className="text-sm font-medium text-gray-900">{label}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="ml-4">{action}</div>
    </div>
  );
}