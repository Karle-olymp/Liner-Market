import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';
import LoginForm from '../components/auth/LoginForm';
import ForgotPasswordForm from '../components/auth/ForgotPasswordForm';
import { useStore } from '../store';

type AuthMode = 'login' | 'register' | 'forgot-password';

export default function Auth() {
  const [mode, setMode] = useState<AuthMode>('login');
  const navigate = useNavigate();
  const user = useStore(state => state.user);

  useEffect(() => {
    if (user) {
      navigate('/profile');
    }
  }, [user, navigate]);

  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {mode === 'login' && 'Sign in to your account'}
            {mode === 'register' && 'Create a new account'}
            {mode === 'forgot-password' && 'Reset your password'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {mode === 'login' && (
              <>
                Don't have an account?{' '}
                <button
                  onClick={() => setMode('register')}
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                >
                  Register here
                </button>
              </>
            )}
            {mode === 'register' && (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => setMode('login')}
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                >
                  Sign in
                </button>
              </>
            )}
            {mode === 'forgot-password' && (
              <button
                onClick={() => setMode('login')}
                className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                Back to sign in
              </button>
            )}
          </p>
        </div>

        {mode === 'login' && <LoginForm />}
        {mode === 'register' && <RegisterForm />}
        {mode === 'forgot-password' && <ForgotPasswordForm />}
      </div>
    </div>
  );
}