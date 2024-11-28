import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Camera } from 'lucide-react';

interface AvatarUploadProps {
  currentAvatar?: string;
  onAvatarChange: (file: File) => void;
  isLoading?: boolean;
}

export default function AvatarUpload({ currentAvatar, onAvatarChange, isLoading }: AvatarUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onAvatarChange(acceptedFiles[0]);
    }
  }, [onAvatarChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxSize: 5242880, // 5MB
    multiple: false
  });

  return (
    <div className="relative">
      <div
        {...getRootProps()}
        className={`
          relative group cursor-pointer
          ${isDragActive ? 'ring-2 ring-indigo-500' : ''}
        `}
      >
        <input {...getInputProps()} />
        <div className="relative w-32 h-32">
          <img
            src={currentAvatar || 'https://via.placeholder.com/128'}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded-full">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      )}
    </div>
  );
}