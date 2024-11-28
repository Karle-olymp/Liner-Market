import React from 'react';
import { Save } from 'lucide-react';

interface SaveButtonProps {
  isLoading: boolean;
  isDirty: boolean;
  onSave: () => void;
}

export default function SaveButton({ isLoading, isDirty, onSave }: SaveButtonProps) {
  return (
    <button
      onClick={onSave}
      disabled={!isDirty || isLoading}
      className={`
        inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium
        ${isDirty && !isLoading
          ? 'text-white bg-indigo-600 hover:bg-indigo-700'
          : 'text-gray-500 bg-gray-100 cursor-not-allowed'
        }
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        transition-colors duration-200
      `}
    >
      {isLoading ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
          Saving...
        </>
      ) : (
        <>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </>
      )}
    </button>
  );
}