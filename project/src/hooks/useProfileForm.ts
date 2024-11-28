import { useState, useCallback } from 'react';
import { usersService } from '../services/users';
import { useStore } from '../store';
import type { User } from '../types';

interface ProfileFormState {
  avatar?: string;
  name: string;
  email: string;
  bio: string;
}

export function useProfileForm(initialData: User) {
  const [formData, setFormData] = useState<ProfileFormState>({
    avatar: initialData.avatar,
    name: initialData.name,
    email: initialData.email,
    bio: initialData.bio || '',
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const setUser = useStore(state => state.setUser);
  
  const isDirty = JSON.stringify(formData) !== JSON.stringify({
    avatar: initialData.avatar,
    name: initialData.name,
    email: initialData.email,
    bio: initialData.bio || '',
  });

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleAvatarChange = useCallback(async (file: File) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real app, upload to storage and get URL
      const avatarUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, avatar: avatarUrl }));
    } catch (err) {
      setError('Failed to upload image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!isDirty) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const updatedUser = await usersService.update(initialData.id, formData);
      setUser(updatedUser);
    } catch (err) {
      setError('Failed to save changes. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [formData, initialData.id, isDirty, setUser]);

  return {
    formData,
    isLoading,
    error,
    isDirty,
    handleChange,
    handleAvatarChange,
    handleSubmit,
  };
}