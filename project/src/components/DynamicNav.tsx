import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, X, Package, Home, Grid, Settings } from 'lucide-react';
import { useStore } from '../store';

export default function DynamicNav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const { cart, user } = useStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setIsExpanded(false);
  };

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Grid, label: 'Products', path: '/products' },
    { icon: ShoppingCart, label: 'Cart', path: '/cart', badge: cart.length },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50" ref={dropdownRef}>
      <div
        className={`
          bg-custom-navy-light/80 backdrop-blur-md border border-gray-800/50 rounded-full transition-all duration-300 ease-in-out relative
          ${isExpanded ? 'w-[600px] h-12' : 'w-[280px] h-12'}
          flex items-center justify-center px-4 shadow-lg
        `}
      >
        <button
          onClick={toggleDropdown}
          className={`
            text-gray-100 hover:text-gray-300 transition-all duration-300 z-10 flex items-center gap-2
            ${isExpanded ? 'absolute right-16' : 'absolute left-8'}
          `}
        >
          <Package className="h-6 w-6 transition-all duration-300" />
          <span className="font-semibold text-gray-100">
            Liner
          </span>
        </button>

        <div
          className={`
            absolute inset-0 w-full flex items-center justify-between px-4
            transition-opacity duration-300 ease-in-out
            ${!showDropdown ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          `}
        >
          {isExpanded ? (
            <div className="flex items-center w-full gap-4 p-2">
              <Search className="h-5 w-5 text-gray-300 flex-shrink-0" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-0 border-none"
                autoFocus
              />
              <button
                onClick={toggleExpand}
                className="text-gray-400 hover:text-gray-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={toggleExpand}
                className="text-gray-100 hover:text-gray-300 transition-colors p-1 ml-auto"
              >
                <Search className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-4">
                <Link to="/cart" className="relative text-gray-100 hover:text-gray-300 transition-colors">
                  <ShoppingCart className="h-5 w-5" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </Link>

                {user ? (
                  <Link to="/profile">
                    <img
                      src={user.avatar || 'https://via.placeholder.com/32'}
                      alt={user.name}
                      className="h-6 w-6 rounded-full ring-2 ring-indigo-500"
                    />
                  </Link>
                ) : (
                  <Link to="/login" className="text-gray-100 hover:text-gray-300 transition-colors">
                    <User className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </>
          )}
        </div>

        {/* Dropdown Menu */}
        <div
          className={`
            absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 w-48
            bg-custom-navy-light/90 backdrop-blur-md border border-gray-800/50 rounded-2xl shadow-lg
            transition-all duration-300 ease-in-out origin-top
            ${showDropdown ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          `}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-custom-navy/50 transition-colors"
              onClick={() => setShowDropdown(false)}
            >
              <item.icon className="h-5 w-5 text-gray-100" />
              <span className="text-gray-100">{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}