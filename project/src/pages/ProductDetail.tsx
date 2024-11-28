import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Star, ShoppingCart } from 'lucide-react';
import { useStore } from '../store';
import type { Product } from '../types';

export default function ProductDetail() {
  const { id } = useParams();
  const addToCart = useStore((state) => state.addToCart);

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => Promise.resolve({
      id: '1',
      title: 'Premium Headphones',
      description: 'High-quality wireless headphones with noise cancellation',
      price: 199.99,
      currency: 'EUR',
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80'],
      category: 'Electronics',
      seller: {
        id: 's1',
        name: 'Tech Store',
        rating: 4.8
      },
      stock: 50,
      rating: 4.5,
      reviews: 128
    } as Product),
  });

  if (isLoading || !product) {
    return (
      <div className="flex justify-center items-center h-64 bg-custom-beige">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      quantity: 1,
      product,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-custom-beige">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-xl font-medium text-gray-900">
              {new Intl.NumberFormat('fr-FR', {
                style: 'currency',
                currency: product.currency,
              }).format(product.price)}
            </p>
            <p className="text-gray-700">{product.description}</p>
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}