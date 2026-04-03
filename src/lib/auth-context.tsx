'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'traveler' | 'guide' | 'admin';
  country?: string;
  language?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('safarmate_token');
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        localStorage.removeItem('safarmate_token');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      localStorage.setItem('safarmate_token', data.token);
      setUser(data.user);
    } catch (error) {
      console.log('API failed, using localStorage...');
      const users = JSON.parse(localStorage.getItem('safarmate_users') || '[]');
      const user = users.find((u: { email: string; password: string }) => u.email === email && u.password === password);
      
      if (user) {
        const token = Buffer.from(`${user.id}:${email}`).toString('base64');
        localStorage.setItem('safarmate_token', token);
        setUser({ id: user.id, name: user.name, email: user.email, role: user.role });
      } else {
        throw new Error('Invalid credentials');
      }
    }
  };

  const register = async (name: string, email: string, password: string, role: string) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      localStorage.setItem('safarmate_token', data.token);
      setUser(data.user);
    } catch (error) {
      console.log('API failed, using localStorage...');
      const users = JSON.parse(localStorage.getItem('safarmate_users') || '[]');
      const existing = users.find((u: { email: string }) => u.email === email);
      
      if (existing) {
        throw new Error('User already exists');
      }

      const id = `user_${Date.now()}`;
      const newUser = { id, name, email, password, role, country: '' };
      users.push(newUser);
      localStorage.setItem('safarmate_users', JSON.stringify(users));

      const token = Buffer.from(`${id}:${email}`).toString('base64');
      localStorage.setItem('safarmate_token', token);
      setUser({ id, name, email, role: role as 'traveler' | 'guide' | 'admin' });
    }
  };

  const logout = () => {
    localStorage.removeItem('safarmate_token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}