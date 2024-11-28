import React from 'react';
import { Package, Shield, Truck } from 'lucide-react';
import ProductCarousel from '../components/ProductCarousel';

const features = [
  {
    name: 'Fast Shipping',
    description: 'Get your items delivered within 2-3 business days',
    icon: Truck,
  },
  {
    name: 'Secure Payments',
    description: '100% secure payment processing',
    icon: Shield,
  },
  {
    name: 'Quality Products',
    description: 'All products are verified by our quality team',
    icon: Package,
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Carousel */}
      <ProductCarousel />

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="text-center bg-custom-navy-light rounded-lg shadow-lg p-8 border border-gray-800"
            >
              <feature.icon className="mx-auto h-12 w-12 text-indigo-400" />
              <h3 className="mt-6 text-lg font-medium text-gray-100">
                {feature.name}
              </h3>
              <p className="mt-2 text-base text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}