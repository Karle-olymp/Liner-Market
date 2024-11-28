import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-custom-navy-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-base text-gray-400 hover:text-gray-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-base text-gray-400 hover:text-gray-100">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-base text-gray-400 hover:text-gray-100">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-base text-gray-400 hover:text-gray-100">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-400 hover:text-gray-100">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-base text-gray-400 hover:text-gray-100">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-base text-gray-400 hover:text-gray-100">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-gray-400 hover:text-gray-100">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-base text-gray-400 hover:text-gray-100">
                  Returns Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" className="text-gray-400 hover:text-gray-100">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-gray-100">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-gray-100">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Marketplace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}