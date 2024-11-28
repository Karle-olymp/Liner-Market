import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useStore } from '../store';
import type { Product } from '../types';

const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    description: 'High-fidelity sound with active noise cancellation, 30-hour battery life, and premium comfort for extended listening sessions.',
    price: 299.99,
    currency: 'EUR',
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80'],
    category: 'Electronics',
    seller: { id: 's1', name: 'AudioTech Pro', rating: 4.8 },
    stock: 50,
    rating: 4.7,
    reviews: 328,
    condition: 'new'
  },
  // ... other products
];

export default function ProductList() {
  const navigate = useNavigate();
  const user = useStore(state => state.user);
  
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => Promise.resolve(mockProducts),
  });

  const handleAddProduct = () => {
    if (!user) {
      navigate('/login', { state: { from: '/products/new' } });
      return;
    }
    navigate('/products/new');
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Featured Products</h1>
        <button
          onClick={handleAddProduct}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Product
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}