import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function OrderConfirmation() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center bg-custom-beige">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Thank you for your order!
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Your payment has been processed successfully.
        </p>
        <p className="mt-1 text-gray-600">
          We'll send you an email with your order details and tracking information.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}