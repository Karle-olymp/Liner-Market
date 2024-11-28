import React from 'react';

interface SettingsSelectProps {
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
}

export default function SettingsSelect({ options, value, onChange }: SettingsSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className="form-select rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}