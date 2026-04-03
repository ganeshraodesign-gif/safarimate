"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { API_ENDPOINTS, fetchAPI, storage } from "@/lib/api";

const CITIES = ["Delhi", "Mumbai", "Jaipur", "Varanasi", "Ahmedabad", "Goa", "Agra", "Bangalore"];

const LANGUAGES = ["English", "Hindi", "Spanish", "French", "German", "Japanese", "Chinese"];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const CITY_PRICES: Record<string, number> = {
  Delhi: 2500,
  Mumbai: 3000,
  Jaipur: 2000,
  Varanasi: 1800,
  Ahmedabad: 1500,
  Goa: 2500,
  Agra: 2000,
  Bangalore: 2800,
};

export default function BecomeGuide() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    languages: [] as string[],
    education: "",
    experience: "",
    idProof: null as File | null,
    educationCertificate: null as File | null,
    policeVerification: null as File | null,
    profilePhoto: null as File | null,
    bio: "",
    availableDays: [] as string[],
    pricePerDay: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const updateField = (field: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleLanguage = (lang: string) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.includes(lang)
        ? prev.languages.filter((l) => l !== lang)
        : [...prev.languages, lang],
    }));
  };

  const toggleDay = (day: string) => {
    setFormData((prev) => ({
      ...prev,
      availableDays: prev.availableDays.includes(day)
        ? prev.availableDays.filter((d) => d !== day)
        : [...prev.availableDays, day],
    }));
  };

  const handleFileChange = (field: string, file: File | null) => {
    updateField(field, file);
  };

  const handleCityChange = (city: string) => {
    updateField("city", city);
    updateField("pricePerDay", CITY_PRICES[city]?.toString() || "");
  };

  const [showSuccess, setShowSuccess] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await fetchAPI(API_ENDPOINTS.GUIDES.REGISTER, {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOTP(otp);
      setShowSuccess(true);
    } catch (error) {
      console.log('API failed, saving to localStorage...');
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOTP(otp);
      
      const guideApps = JSON.parse(localStorage.getItem('safarmate_guide_applications') || '[]');
      guideApps.push({
        id: `GUIDE-${Date.now()}`,
        ...formData,
        otp: otp,
        status: 'pending',
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('safarmate_guide_applications', JSON.stringify(guideApps));
      
      setShowSuccess(true);
    }
  };

  if (showSuccess) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-20 px-4">
          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
            <p className="text-gray-600 mb-6">Your guide application has been received</p>
            
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-6">
              <p className="text-sm text-gray-600 mb-2">Application OTP:</p>
              <p className="text-4xl font-bold text-amber-600 tracking-wider">{generatedOTP}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 text-left mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-2">Guide Details:</p>
              <p className="text-sm text-gray-600"><strong>Name:</strong> {formData.fullName}</p>
              <p className="text-sm text-gray-600"><strong>Email:</strong> {formData.email}</p>
              <p className="text-sm text-gray-600"><strong>Phone:</strong> {formData.phone}</p>
              <p className="text-sm text-gray-600"><strong>City:</strong> {formData.city}</p>
              <p className="text-sm text-gray-600"><strong>Languages:</strong> {formData.languages?.join(', ')}</p>
            </div>

            <p className="text-sm text-red-600 mb-4">
              ⚠️ Save this OTP! Admin will verify your application with this code.
            </p>

            <button
              onClick={() => {
                setShowSuccess(false);
                setFormData({
                  fullName: '',
                  phone: '',
                  email: '',
                  city: '',
                  languages: [],
                  education: '',
                  experience: '',
                  idProof: null,
                  educationCertificate: null,
                  policeVerification: null,
                  profilePhoto: null,
                  bio: '',
                  availableDays: [],
                  pricePerDay: '',
                });
                setCurrentStep(1);
              }}
              className="text-[#E38B29] font-semibold hover:underline"
            >
              Submit Another Application
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-8">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div key={i} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
              i + 1 <= currentStep
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {i + 1}
          </div>
          {i < totalSteps - 1 && (
            <div
              className={`w-16 h-1 mx-2 ${
                i + 1 < currentStep ? "bg-primary" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-heading text-text mb-3">Join Our Community of Guides</h1>
          <p className="text-text-secondary text-lg">Share your city with travelers from around the world</p>
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-8">
          {renderStepIndicator()}

          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-2xl font-heading text-text border-b pb-2 mb-6">Personal Information</h2>
                
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Select City *</label>
                  <select
                    required
                    value={formData.city}
                    onChange={(e) => handleCityChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  >
                    <option value="">Choose your city</option>
                    {CITIES.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-3">Languages You Speak *</label>
                  <div className="flex flex-wrap gap-3">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => toggleLanguage(lang)}
                        className={`px-4 py-2 rounded-full border transition ${
                          formData.languages.includes(lang)
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-text border-gray-300 hover:border-primary"
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-2xl font-heading text-text border-b pb-2 mb-6">Background & Experience</h2>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Education *</label>
                  <input
                    type="text"
                    required
                    value={formData.education}
                    onChange={(e) => updateField("education", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="e.g., Bachelor's in History, Delhi University"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Tour Guide Experience *</label>
                  <textarea
                    required
                    value={formData.experience}
                    onChange={(e) => updateField("experience", e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    placeholder="Describe your guiding experience, notable tours, specializations..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Short Bio / Introduction *</label>
                  <textarea
                    required
                    value={formData.bio}
                    onChange={(e) => updateField("bio", e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell travelers about yourself, your passion for showing your city, what makes your tours unique..."
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-2xl font-heading text-text border-b pb-2 mb-6">Documents & Verification</h2>
                <p className="text-text-secondary mb-6">Please upload clear copies of the following documents</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">ID Proof *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange("idProof", e.target.files?.[0] || null)}
                        className="hidden"
                        id="idProof"
                      />
                      <label htmlFor="idProof" className="cursor-pointer">
                        <div className="text-primary text-3xl mb-2">📄</div>
                        <p className="text-text text-sm">{formData.idProof?.name || "Upload ID Proof (Aadhaar/Passport)"}</p>
                        <p className="text-text-secondary text-xs mt-1">PDF, JPG, PNG up to 5MB</p>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Education Certificate *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange("educationCertificate", e.target.files?.[0] || null)}
                        className="hidden"
                        id="educationCertificate"
                      />
                      <label htmlFor="educationCertificate" className="cursor-pointer">
                        <div className="text-primary text-3xl mb-2">🎓</div>
                        <p className="text-text text-sm">{formData.educationCertificate?.name || "Upload Education Certificate"}</p>
                        <p className="text-text-secondary text-xs mt-1">PDF, JPG, PNG up to 5MB</p>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Police Verification *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange("policeVerification", e.target.files?.[0] || null)}
                        className="hidden"
                        id="policeVerification"
                      />
                      <label htmlFor="policeVerification" className="cursor-pointer">
                        <div className="text-primary text-3xl mb-2">🛡️</div>
                        <p className="text-text text-sm">{formData.policeVerification?.name || "Upload Police Verification"}</p>
                        <p className="text-text-secondary text-xs mt-1">PDF, JPG, PNG up to 5MB</p>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Profile Photo *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition cursor-pointer">
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange("profilePhoto", e.target.files?.[0] || null)}
                        className="hidden"
                        id="profilePhoto"
                      />
                      <label htmlFor="profilePhoto" className="cursor-pointer">
                        <div className="text-primary text-3xl mb-2">📸</div>
                        <p className="text-text text-sm">{formData.profilePhoto?.name || "Upload Profile Photo"}</p>
                        <p className="text-text-secondary text-xs mt-1">JPG, PNG up to 5MB</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-2xl font-heading text-text border-b pb-2 mb-6">Availability & Pricing</h2>

                <div>
                  <label className="block text-sm font-medium text-text mb-3">Days Available *</label>
                  <div className="flex flex-wrap gap-3">
                    {DAYS.map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => toggleDay(day)}
                        className={`px-4 py-2 rounded-full border transition ${
                          formData.availableDays.includes(day)
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-text border-gray-300 hover:border-primary"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Price per Day (INR) {formData.city && <span className="text-primary text-sm ml-2">Suggested: ₹{CITY_PRICES[formData.city]} for {formData.city}</span>}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">₹</span>
                    <input
                      type="number"
                      required
                      value={formData.pricePerDay}
                      onChange={(e) => updateField("pricePerDay", e.target.value)}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Enter your daily rate"
                      min="500"
                    />
                  </div>
                  <p className="text-text-secondary text-sm mt-2">This is the amount you will receive per tour day</p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                  <h3 className="font-semibold text-text mb-2">Verification Process</h3>
                  <p className="text-text-secondary text-sm">
                    After submitting your application, our team will review your documents and profile. 
                    The verification process typically takes 3-5 business days. You will receive an email 
                    notification once your profile is approved. During verification, we may contact you 
                    for additional information if needed.
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-text hover:bg-gray-50 transition"
                >
                  Previous
                </button>
              ) : (
                <div />
              )}

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold"
                >
                  Apply to Become a Guide
                </button>
              )}
            </div>
          </form>
        </div>

        <p className="text-center text-text-secondary text-sm mt-6">
          Need help? Contact us at <span className="text-primary">support@safarmate.com</span>
        </p>
      </div>
    </div>
  );
}