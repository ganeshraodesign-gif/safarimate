const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: `${API_BASE_URL}/auth/register`,
    LOGIN: `${API_BASE_URL}/auth/login`,
    ME: `${API_BASE_URL}/auth/me`,
  },
  TRAVELERS: {
    REQUEST: `${API_BASE_URL}/trips`,
    REQUESTS: `${API_BASE_URL}/trips`,
    PAYMENT: `${API_BASE_URL}/trips/payment`,
  },
  GUIDES: {
    REGISTER: `${API_BASE_URL}/guides/register`,
    LIST: `${API_BASE_URL}/guides`,
    APPLICATIONS: `${API_BASE_URL}/guides/applications`,
  },
  ADMIN: {
    REQUESTS: `${API_BASE_URL}/admin/requests`,
    GUIDES: `${API_BASE_URL}/admin/guides`,
    OTP: `${API_BASE_URL}/admin/otp`,
    STATS: `${API_BASE_URL}/admin/stats`,
  },
  PUBLIC: {
    PRICING: `${API_BASE_URL}/pricing`,
  },
};

export const getAuthToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('safarmate_token');
  }
  return null;
};

export const setAuthToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('safarmate_token', token);
  }
};

export const removeAuthToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('safarmate_token');
  }
};

export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const token = getAuthToken();
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  try {
    const response = await fetch(endpoint, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Something went wrong' }));
      throw new Error(error.message || 'API request failed');
    }

    return response.json();
  } catch (error) {
    console.log('API call failed, trying localStorage fallback...');
    throw error;
  }
}

export const storage = {
  saveTripRequest: (data: Record<string, unknown>) => {
    if (typeof window === 'undefined') return;
    const existing = JSON.parse(localStorage.getItem('trip_requests') || '[]');
    const newRequest = { ...data, id: `TRIP-${Date.now()}`, createdAt: new Date().toISOString() };
    existing.push(newRequest);
    localStorage.setItem('trip_requests', JSON.stringify(existing));
    return newRequest;
  },

  getTripRequests: () => {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('trip_requests') || '[]');
  },

  saveGuideApplication: (data: Record<string, unknown>) => {
    if (typeof window === 'undefined') return;
    const existing = JSON.parse(localStorage.getItem('guide_applications') || '[]');
    const newApp = { ...data, id: `GUIDE-${Date.now()}`, status: 'pending', createdAt: new Date().toISOString() };
    existing.push(newApp);
    localStorage.setItem('guide_applications', JSON.stringify(existing));
    return newApp;
  },

  getGuideApplications: () => {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('guide_applications') || '[]');
  },

  saveUser: (user: unknown) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('safarmate_user', JSON.stringify(user));
  },

  getUser: () => {
    if (typeof window === 'undefined') return null;
    return JSON.parse(localStorage.getItem('safarmate_user') || 'null');
  },

  clearAll: () => {
    if (typeof window === 'undefined') return;
    localStorage.clear();
  }
};