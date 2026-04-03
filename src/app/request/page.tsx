'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { API_ENDPOINTS, fetchAPI } from '@/lib/api';

const COUNTRIES = [
  'Afghanistan', 'Australia', 'Austria', 'Bangladesh', 'Belgium', 'Brazil', 'Canada', 'China',
  'France', 'Germany', 'India', 'Indonesia', 'Italy', 'Japan', 'Malaysia', 'Nepal', 'Netherlands',
  'New Zealand', 'Pakistan', 'Russia', 'Saudi Arabia', 'Singapore', 'South Africa', 'South Korea',
  'Spain', 'Sri Lanka', 'Sweden', 'Thailand', 'Turkey', 'United Arab Emirates', 'United Kingdom',
  'United States', 'Vietnam', 'Other'
];

const CITIES = ['Delhi', 'Mumbai', 'Jaipur', 'Varanasi', 'Ahmedabad', 'Goa', 'Agra', 'Bangalore'];

const LANGUAGES = ['English', 'Hindi', 'Spanish', 'French', 'German', 'Japanese', 'Chinese', 'Other'];

const HOURS_OPTIONS = ['4', '6', '8', 'Full day'];

const SERVICE_TYPES = ['Guide', 'Travel Companion', 'Local Support'];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  startDate: string;
  endDate: string;
  languages: string[];
  serviceType: string;
  placesToVisit: string;
  hoursPerDay: string;
  additionalNotes: string;
}

export default function RequestPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    startDate: '',
    endDate: '',
    languages: [],
    serviceType: '',
    placesToVisit: '',
    hoursPerDay: '',
    additionalNotes: '',
  });

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone/WhatsApp is required';
    if (!formData.country) newErrors.country = 'Please select a country';
    if (!formData.city) newErrors.city = 'Please select a city';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.endDate) newErrors.endDate = 'End date is required';
    if (formData.languages.length === 0) newErrors.languages = 'Select at least one language';
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service type';
    if (!formData.hoursPerDay) newErrors.hoursPerDay = 'Please select hours per day';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      await fetchAPI(API_ENDPOINTS.TRAVELERS.REQUEST, {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      setIsSuccess(true);
    } catch (error) {
      console.error('Failed to submit request:', error);
      alert('Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLanguageChange = (lang: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(lang)
        ? prev.languages.filter(l => l !== lang)
        : [...prev.languages, lang]
    }));
  };

  if (isSuccess) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-20 px-4">
          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="w-20 h-20 bg-[#E38B29] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Request Submitted!</h2>
            <p className="text-gray-600 text-lg">We'll contact you soon</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Plan Your Journey</h1>
          <p className="text-xl text-gray-600">Tell us about your trip and we'll match you with the perfect companion</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-10 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E38B29] focus:border-transparent transition-all ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="John Doe"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E38B29] focus:border-transparent transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone/WhatsApp *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E38B29] focus:border-transparent transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="+1 234 567 8900"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Country *</label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E38B29] focus:border-transparent transition-all ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select your country</option>
                {COUNTRIES.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">City you want to visit *</label>
              <select
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E38B29] focus:border-transparent transition-all ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select a city</option>
                {CITIES.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Start Date *</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E38B29] focus:border-transparent transition-all ${errors.startDate ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">End Date *</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E38B29] focus:border-transparent transition-all ${errors.endDate ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Hours per day needed *</label>
              <select
                value={formData.hoursPerDay}
                onChange={(e) => setFormData({ ...formData, hoursPerDay: e.target.value })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E38B29] focus:border-transparent transition-all ${errors.hoursPerDay ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select hours</option>
                {HOURS_OPTIONS.map(hours => (
                  <option key={hours} value={hours}>{hours}</option>
                ))}
              </select>
              {errors.hoursPerDay && <p className="text-red-500 text-sm mt-1">{errors.hoursPerDay}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Language preference *</label>
            <div className="flex flex-wrap gap-3">
              {LANGUAGES.map(lang => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => handleLanguageChange(lang)}
                  className={`px-4 py-2 rounded-full border transition-all ${
                    formData.languages.includes(lang)
                      ? 'bg-[#E38B29] text-white border-[#E38B29]'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-[#E38B29]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            {errors.languages && <p className="text-red-500 text-sm mt-2">{errors.languages}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Service type *</label>
            <div className="flex flex-wrap gap-4">
              {SERVICE_TYPES.map(type => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="serviceType"
                    value={type}
                    checked={formData.serviceType === type}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-5 h-5 text-[#E38B29] focus:ring-[#E38B29]"
                  />
                  <span className="text-gray-700 font-medium">{type}</span>
                </label>
              ))}
            </div>
            {errors.serviceType && <p className="text-red-500 text-sm mt-2">{errors.serviceType}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Places you want to visit</label>
            <textarea
              value={formData.placesToVisit}
              onChange={(e) => setFormData({ ...formData, placesToVisit: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E38B29] focus:border-transparent transition-all resize-none"
              placeholder="E.g., Taj Mahal, Red Fort, Jaipur City..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Additional notes</label>
            <textarea
              value={formData.additionalNotes}
              onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E38B29] focus:border-transparent transition-all resize-none"
              placeholder="Any special requirements or preferences..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-[#E38B29] text-white font-semibold text-lg rounded-lg hover:bg-[#d47a1f] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Submitting...
              </>
            ) : (
              'Submit Request'
            )}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  </>
  );
}