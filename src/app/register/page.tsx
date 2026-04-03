'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/lib/auth-context';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'traveler',
    country: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState('');
  const { register } = useAuth();
  const router = useRouter();

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      await register(formData.name, formData.email, formData.password, formData.role);
      
      const otp = generateOTP();
      setGeneratedOTP(otp);
      setShowOTP(true);
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('registered_otp', otp);
        localStorage.setItem('registered_email', formData.email);
        localStorage.setItem('registered_name', formData.name);
        
        const registrations = JSON.parse(localStorage.getItem('safarmate_registrations') || '[]');
        registrations.push({
          id: `REG-${Date.now()}`,
          name: formData.name,
          email: formData.email,
          role: formData.role,
          country: formData.country,
          phone: '',
          otp: otp,
          createdAt: new Date().toISOString(),
          status: 'pending'
        });
        localStorage.setItem('safarmate_registrations', JSON.stringify(registrations));
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (showOTP) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center py-20 px-4">
          <div className="max-w-md w-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Registration Successful!</h1>
              <p className="text-gray-600 mb-6">Your OTP has been generated</p>
              
              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-6">
                <p className="text-sm text-gray-600 mb-2">Your Verification OTP:</p>
                <p className="text-4xl font-bold text-amber-600 tracking-wider">{generatedOTP}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-left mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">Account Details:</p>
                <p className="text-sm text-gray-600"><strong>Name:</strong> {formData.name}</p>
                <p className="text-sm text-gray-600"><strong>Email:</strong> {formData.email}</p>
                <p className="text-sm text-gray-600"><strong>Role:</strong> {formData.role}</p>
                <p className="text-sm text-gray-600"><strong>Country:</strong> {formData.country}</p>
              </div>

              <p className="text-sm text-red-600 mb-4">
                ⚠️ Save this OTP! You will need it for verification.
              </p>

              <button
                onClick={() => router.push('/login')}
                className="w-full py-3 bg-[#E38B29] text-white font-semibold rounded-lg hover:bg-[#d47a1f] transition-all"
              >
                Go to Login
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const COUNTRIES = [
    'Afghanistan', 'Australia', 'Austria', 'Bangladesh', 'Belgium', 'Brazil', 'Canada', 'China',
    'France', 'Germany', 'India', 'Indonesia', 'Italy', 'Japan', 'Malaysia', 'Nepal', 'Netherlands',
    'New Zealand', 'Pakistan', 'Russia', 'Saudi Arabia', 'Singapore', 'South Africa', 'South Korea',
    'Spain', 'Sri Lanka', 'Sweden', 'Thailand', 'Turkey', 'United Arab Emirates', 'United Kingdom',
    'United States', 'Vietnam', 'Other'
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Create Account</h1>
            <p className="text-gray-600 text-center mb-8">Join the SafarMate community</p>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E38B29] focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E38B29] focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password *</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E38B29] focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password *</label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E38B29] focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">I am a... *</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value="traveler"
                      checked={formData.role === 'traveler'}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-4 h-4 text-[#E38B29]"
                    />
                    <span className="text-gray-700">Traveler</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value="guide"
                      checked={formData.role === 'guide'}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-4 h-4 text-[#E38B29]"
                    />
                    <span className="text-gray-700">Guide</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Country *</label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E38B29] focus:border-transparent"
                  required
                >
                  <option value="">Select your country</option>
                  {COUNTRIES.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-[#E38B29] text-white font-semibold rounded-lg hover:bg-[#d47a1f] transition-all disabled:opacity-70"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <p className="text-center text-gray-600 mt-6">
              Already have an account?{' '}
              <Link href="/login" className="text-[#E38B29] font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}