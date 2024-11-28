import { 
  collection, 
  getDocs, 
  doc, 
  getDoc, 
  setDoc,
  updateDoc,
  query,
  where 
} from 'firebase/firestore';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  User as FirebaseUser
} from 'firebase/auth';
import { db, auth } from '../config/firebase';
import type { User } from '../types';

const COLLECTION_NAME = 'users';

export const usersService = {
  async register(email: string, password: string, userData: Omit<User, 'id'>): Promise<User> {
    const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password);
    const user: User = {
      id: firebaseUser.uid,
      ...userData
    };
    
    await setDoc(doc(db, COLLECTION_NAME, user.id), user);
    return user;
  },

  async login(email: string, password: string): Promise<User> {
    const { user: firebaseUser } = await signInWithEmailAndPassword(auth, email, password);
    const userDoc = await this.getById(firebaseUser.uid);
    
    if (!userDoc) {
      throw new Error('User not found');
    }
    
    return userDoc;
  },

  async signOut(): Promise<void> {
    await firebaseSignOut(auth);
  },

  async getById(id: string): Promise<User | null> {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as User;
    }
    return null;
  },

  async update(id: string, userData: Partial<User>): Promise<void> {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, userData);
  },

  async getAll(): Promise<User[]> {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as User[];
  },

  async getByRole(role: User['role']): Promise<User[]> {
    const q = query(
      collection(db, COLLECTION_NAME),
      where("role", "==", role)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as User[];
  }
};