export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
  avatar?: string;
}

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
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface Store {
  user: User | null;
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  setUser: (user: User | null) => void;
}