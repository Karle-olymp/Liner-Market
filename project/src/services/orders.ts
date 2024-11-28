import { 
  collection, 
  getDocs, 
  doc, 
  getDoc, 
  addDoc, 
  updateDoc,
  query,
  where 
} from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Order } from '../types';

const COLLECTION_NAME = 'orders';

export const ordersService = {
  async getAll(): Promise<Order[]> {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Order[];
  },

  async getById(id: string): Promise<Order | null> {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as Order;
    }
    return null;
  },

  async getByUserId(userId: string): Promise<Order[]> {
    const q = query(
      collection(db, COLLECTION_NAME),
      where("userId", "==", userId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Order[];
  },

  async create(order: Omit<Order, 'id'>): Promise<string> {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), order);
    return docRef.id;
  },

  async updateStatus(id: string, status: Order['status']): Promise<void> {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, { status });
  }
};