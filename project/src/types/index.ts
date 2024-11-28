export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
  avatar?: string;
  username?: string;
  phone?: string;
  birthDate?: string;
  bio?: string;
  twoFactorEnabled?: boolean;
  securityQuestions?: SecurityQuestion[];
  preferences?: UserPreferences;
  socialLinks?: SocialLinks;
}

interface SecurityQuestion {
  question: string;
  answer: string;
}

interface UserPreferences {
  language: string;
  timezone: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
  profileVisibility: 'public' | 'private' | 'friends';
}

interface SocialLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

export type ProductCondition = 'new' | 'like-new' | 'good' | 'fair';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  category: string;
  seller: {
    id: string;
    name: string;
    rating: number;
  };
  stock: number;
  rating: number;
  reviews: number;
  condition: ProductCondition;
}

export interface CreateProductData {
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  condition: ProductCondition;
  images: string[];
  shipping: {
    weight: number;
    dimensions: {
      length: number;
      width: number;
      height: number;
    };
    method: 'standard' | 'express' | 'pickup';
  };
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  total: number;
  createdAt: string;
  shippingAddress: Address;
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface AdminStats {
  totalUsers: number;
  totalOrders: number;
  totalRevenue: number;
  activeUsers: number;
}

export interface UserManagement {
  id: string;
  name: string;
  email: string;
  role: User['role'];
  status: 'active' | 'suspended' | 'banned';
  createdAt: string;
  lastLogin: string;
}