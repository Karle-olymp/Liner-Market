import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-48 w-full object-cover object-center group-hover:opacity-90 transition-opacity"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 truncate">
          {product.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-medium text-gray-900">
            {new Intl.NumberFormat('fr-FR', {
              style: 'currency',
              currency: product.currency,
            }).format(product.price)}
          </p>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}