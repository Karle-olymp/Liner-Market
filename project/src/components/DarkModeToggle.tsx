import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useStore } from '../store';

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useStore();

  return (
    <button
      onClick={toggleDarkMode}
      className={`
        p-2 rounded-full transition-all duration-300 ease-in-out
        ${darkMode 
          ? 'bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20' 
          : 'bg-blue-400/10 text-blue-400 hover:bg-blue-400/20'
        }
      `}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}