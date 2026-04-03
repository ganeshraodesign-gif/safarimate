"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Users,
  MapPin,
  Star,
  DollarSign,
  AlertTriangle,
  ChevronRight,
  Check,
  X,
  Key,
  Search,
  LogOut,
  Menu,
  Bell,
} from "lucide-react";

interface TripRequest {
  id: string;
  traveler: string;
  email: string;
  phone: string;
  city: string;
  date: string;
  days: number;
  status: "pending" | "assigned" | "in_progress" | "completed" | "cancelled";
  guide?: string;
  price?: number;
}

interface GuideApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  languages: string[];
  experience: string;
  appliedDate: string;
  status: "pending" | "verified" | "rejected";
}

interface Review {
  id: string;
  traveler: string;
  guide: string;
  rating: number;
  comment: string;
  date: string;
}

interface EmergencyAlert {
  id: string;
  type: "safety" | "medical" | "other";
  description: string;
  location: string;
  status: "active" | "resolved";
  date: string;
}

const mockTripRequests: TripRequest[] = [
  {
    id: "1",
    traveler: "John Smith",
    email: "john@example.com",
    phone: "+91 98765 43210",
    city: "Jaipur",
    date: "2026-04-15",
    days: 3,
    status: "pending",
  },
  {
    id: "2",
    traveler: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+91 98765 43211",
    city: "Udaipur",
    date: "2026-04-20",
    days: 4,
    status: "assigned",
    guide: "Rajesh Kumar",
    price: 8000,
  },
  {
    id: "3",
    traveler: "Mike Davis",
    email: "mike@example.com",
    phone: "+91 98765 43212",
    city: "Delhi",
    date: "2026-04-10",
    days: 2,
    status: "in_progress",
    guide: "Priya Singh",
    price: 5000,
  },
  {
    id: "4",
    traveler: "Emily Brown",
    email: "emily@example.com",
    phone: "+91 98765 43213",
    city: "Agra",
    date: "2026-04-05",
    days: 1,
    status: "completed",
    guide: "Amit Verma",
    price: 2500,
  },
];

const mockGuideApplications: GuideApplication[] = [
  {
    id: "1",
    name: "Raj Patel",
    email: "raj@example.com",
    phone: "+91 91234 56789",
    city: "Jaipur",
    languages: ["English", "Hindi", "Rajasthani"],
    experience: "5 years",
    appliedDate: "2026-03-25",
    status: "pending",
  },
  {
    id: "2",
    name: "Anita Sharma",
    email: "anita@example.com",
    phone: "+91 91234 56780",
    city: "Udaipur",
    languages: ["English", "Hindi"],
    experience: "3 years",
    appliedDate: "2026-03-20",
    status: "pending",
  },
  {
    id: "3",
    name: "Vikram Singh",
    email: "vikram@example.com",
    phone: "+91 91234 56781",
    city: "Delhi",
    languages: ["English", "Hindi", "Punjabi"],
    experience: "7 years",
    appliedDate: "2026-03-15",
    status: "verified",
  },
];

const mockReviews: Review[] = [
  {
    id: "1",
    traveler: "John Smith",
    guide: "Rajesh Kumar",
    rating: 5,
    comment: "Amazing experience! Rajesh was very knowledgeable and friendly.",
    date: "2026-03-28",
  },
  {
    id: "2",
    traveler: "Sarah Johnson",
    guide: "Priya Singh",
    rating: 4,
    comment: "Great tour, could improve timing a bit.",
    date: "2026-03-25",
  },
  {
    id: "3",
    traveler: "Mike Davis",
    guide: "Amit Verma",
    rating: 5,
    comment: "Best guide ever! Very professional and helpful.",
    date: "2026-03-20",
  },
];

const mockEmergencyAlerts: EmergencyAlert[] = [
  {
    id: "1",
    type: "safety",
    description: " Tourist reported harassment in old city area",
    location: "Jaipur - Old City",
    status: "active",
    date: "2026-03-30",
  },
];

const mockManageTrips: TripRequest[] = [
  {
    id: "1",
    traveler: "John Smith",
    email: "john@example.com",
    phone: "+91 98765 43210",
    city: "Jaipur",
    date: "2026-04-15",
    days: 3,
    status: "pending",
    price: 7500,
  },
  {
    id: "2",
    traveler: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+91 98765 43211",
    city: "Udaipur",
    date: "2026-04-20",
    days: 4,
    status: "assigned",
    guide: "Rajesh Kumar",
    price: 8000,
  },
  {
    id: "3",
    traveler: "Mike Davis",
    email: "mike@example.com",
    phone: "+91 98765 43212",
    city: "Delhi",
    date: "2026-04-10",
    days: 2,
    status: "in_progress",
    guide: "Priya Singh",
    price: 5000,
  },
];

const mockPricing = [
  { city: "Jaipur", basePrice: 2500, pricePerDay: 1500 },
  { city: "Udaipur", basePrice: 3000, pricePerDay: 1800 },
  { city: "Delhi", basePrice: 2000, pricePerDay: 1200 },
  { city: "Agra", basePrice: 2200, pricePerDay: 1300 },
  { city: "Mumbai", basePrice: 2800, pricePerDay: 1600 },
  { city: "Goa", basePrice: 2500, pricePerDay: 1500 },
];

const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "requests", label: "Trip Requests", icon: FileText },
  { id: "guides", label: "Guide Applications", icon: Users },
  { id: "trips", label: "Manage Trips", icon: MapPin },
  { id: "reviews", label: "Reviews", icon: Star },
  { id: "pricing", label: "Pricing", icon: DollarSign },
  { id: "alerts", label: "Emergency Alerts", icon: AlertTriangle },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    assigned: "bg-blue-100 text-blue-800",
    in_progress: "bg-purple-100 text-purple-800",
    completed: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
    verified: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
    active: "bg-red-100 text-red-800",
    resolved: "bg-green-100 text-green-800",
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status] || "bg-gray-100"}`}>
      {status.replace("_", " ").charAt(0).toUpperCase() + status.replace("_", " ").slice(1)}
    </span>
  );
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function AdminPanel() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const stats = {
    totalTrips: 156,
    completedTrips: 124,
    pendingTrips: 32,
    totalGuides: 48,
    verifiedGuides: 42,
    pendingGuides: 6,
    totalTravelers: 892,
    totalEarnings: 1245000,
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#2B2B2B]">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#6B6B6B]">Total Trips</p>
                    <p className="text-3xl font-bold text-[#2B2B2B]">{stats.totalTrips}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#E38B29]/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#E38B29]" />
                  </div>
                </div>
                <p className="text-sm text-green-600 mt-2">{stats.pendingTrips} pending</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#6B6B6B]">Total Guides</p>
                    <p className="text-3xl font-bold text-[#2B2B2B]">{stats.totalGuides}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#E38B29]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#E38B29]" />
                  </div>
                </div>
                <p className="text-sm text-[#6B6B6B] mt-2">{stats.verifiedGuides} verified</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#6B6B6B]">Total Travelers</p>
                    <p className="text-3xl font-bold text-[#2B2B2B]">{stats.totalTravelers}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#E38B29]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#E38B29]" />
                  </div>
                </div>
                <p className="text-sm text-green-600 mt-2">+12% this month</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#6B6B6B]">Total Earnings</p>
                    <p className="text-3xl font-bold text-[#2B2B2B]">₹{(stats.totalEarnings / 100000).toFixed(1)}L</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#E38B29]/10 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-[#E38B29]" />
                  </div>
                </div>
                <p className="text-sm text-green-600 mt-2">+18% this month</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Recent Trip Requests</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Traveler</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">City</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Date</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Days</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#6B6B6B]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockTripRequests.slice(0, 5).map((trip) => (
                      <tr key={trip.id} className="border-b border-gray-50">
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-medium text-[#2B2B2B]">{trip.traveler}</p>
                            <p className="text-sm text-[#6B6B6B]">{trip.email}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-[#2B2B2B]">{trip.city}</td>
                        <td className="py-3 px-4 text-[#2B2B2B]">{trip.date}</td>
                        <td className="py-3 px-4 text-[#2B2B2B]">{trip.days}</td>
                        <td className="py-3 px-4">
                          <StatusBadge status={trip.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "requests":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#2B2B2B]">Trip Requests</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B]" />
                <input
                  type="text"
                  placeholder="Search requests..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E38B29]/50"
                />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Traveler</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">City</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Date</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Days</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Guide</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Status</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockTripRequests.map((trip) => (
                      <tr key={trip.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-medium text-[#2B2B2B]">{trip.traveler}</p>
                            <p className="text-sm text-[#6B6B6B]">{trip.email}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-[#2B2B2B]">{trip.city}</td>
                        <td className="py-4 px-4 text-[#2B2B2B]">{trip.date}</td>
                        <td className="py-4 px-4 text-[#2B2B2B]">{trip.days}</td>
                        <td className="py-4 px-4 text-[#2B2B2B]">{trip.guide || "-"}</td>
                        <td className="py-4 px-4">
                          <StatusBadge status={trip.status} />
                        </td>
                        <td className="py-4 px-4">
                          <button className="px-3 py-1.5 bg-[#E38B29] text-white rounded-lg text-sm font-medium hover:bg-[#C77A23] transition-colors">
                            Assign Guide
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "guides":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#2B2B2B]">Guide Applications</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Guide</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">City</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Languages</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Experience</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Applied Date</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Status</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockGuideApplications.map((guide) => (
                      <tr key={guide.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-medium text-[#2B2B2B]">{guide.name}</p>
                            <p className="text-sm text-[#6B6B6B]">{guide.email}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-[#2B2B2B]">{guide.city}</td>
                        <td className="py-4 px-4 text-[#2B2B2B]">{guide.languages.join(", ")}</td>
                        <td className="py-4 px-4 text-[#2B2B2B]">{guide.experience}</td>
                        <td className="py-4 px-4 text-[#2B2B2B]">{guide.appliedDate}</td>
                        <td className="py-4 px-4">
                          <StatusBadge status={guide.status} />
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            {guide.status === "pending" && (
                              <>
                                <button className="px-3 py-1.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-1">
                                  <Check size={14} /> Verify
                                </button>
                                <button className="px-3 py-1.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center gap-1">
                                  <X size={14} /> Reject
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "trips":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#2B2B2B]">Manage Trips</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Traveler</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">City</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Guide</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Date</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Price</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Status</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockManageTrips.map((trip) => (
                      <tr key={trip.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-medium text-[#2B2B2B]">{trip.traveler}</p>
                            <p className="text-sm text-[#6B6B6B]">{trip.phone}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-[#2B2B2B]">{trip.city}</td>
                        <td className="py-4 px-4 text-[#2B2B2B]">{trip.guide || "-"}</td>
                        <td className="py-4 px-4 text-[#2B2B2B]">{trip.date}</td>
                        <td className="py-4 px-4 text-[#2B2B2B]">₹{trip.price?.toLocaleString()}</td>
                        <td className="py-4 px-4">
                          <StatusBadge status={trip.status} />
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <button className="px-3 py-1.5 bg-[#E38B29] text-white rounded-lg text-sm font-medium hover:bg-[#C77A23] transition-colors flex items-center gap-1">
                              <Key size={14} /> Generate OTP
                            </button>
                            <button className="px-3 py-1.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                              Confirm Payment
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "reviews":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#2B2B2B]">Reviews</h2>
            <div className="grid gap-4">
              {mockReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-[#2B2B2B]">{review.traveler}</p>
                      <p className="text-sm text-[#6B6B6B]">on {review.guide}</p>
                    </div>
                    <RatingStars rating={review.rating} />
                  </div>
                  <p className="text-[#2B2B2B] mb-2">&quot;{review.comment}&quot;</p>
                  <p className="text-sm text-[#6B6B6B]">{review.date}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "pricing":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#2B2B2B]">City Pricing</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">City</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Base Price</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Price Per Day</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-[#2B2B2B]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockPricing.map((pricing, index) => (
                      <tr key={index} className="border-b border-gray-50 hover:bg-gray-50/50">
                        <td className="py-4 px-4 font-medium text-[#2B2B2B]">{pricing.city}</td>
                        <td className="py-4 px-4 text-[#2B2B2B]">₹{pricing.basePrice.toLocaleString()}</td>
                        <td className="py-4 px-4 text-[#2B2B2B]">₹{pricing.pricePerDay.toLocaleString()}</td>
                        <td className="py-4 px-4">
                          <button className="px-3 py-1.5 bg-[#E38B29] text-white rounded-lg text-sm font-medium hover:bg-[#C77A23] transition-colors">
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "alerts":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#2B2B2B]">Emergency Alerts</h2>
            {mockEmergencyAlerts.length === 0 ? (
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <Bell className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <p className="text-[#6B6B6B]">No active emergency alerts</p>
              </div>
            ) : (
              <div className="space-y-4">
                {mockEmergencyAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`bg-white rounded-xl p-6 shadow-sm border ${
                      alert.status === "active" ? "border-red-200" : "border-green-200"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <AlertTriangle
                          className={`w-6 h-6 ${alert.status === "active" ? "text-red-500" : "text-green-500"}`}
                        />
                        <div>
                          <p className="font-semibold text-[#2B2B2B] capitalize">{alert.type} Issue</p>
                          <p className="text-[#2B2B2B] mt-1">{alert.description}</p>
                          <p className="text-sm text-[#6B6B6B] mt-2">Location: {alert.location}</p>
                          <p className="text-sm text-[#6B6B6B]">Date: {alert.date}</p>
                        </div>
                      </div>
                      <StatusBadge status={alert.status} />
                    </div>
                    {alert.status === "active" && (
                      <div className="mt-4 flex gap-2">
                        <button className="px-3 py-1.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                          Mark Resolved
                        </button>
                        <button className="px-3 py-1.5 bg-[#E38B29] text-white rounded-lg text-sm font-medium hover:bg-[#C77A23] transition-colors">
                          Contact Guide
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-[#FAF9F6]">
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white border-r border-gray-100 transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E38B29] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            {sidebarOpen && <span className="font-bold text-xl text-[#2B2B2B]">SafarMate</span>}
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                activeSection === item.id
                  ? "bg-[#E38B29] text-white"
                  : "text-[#6B6B6B] hover:bg-gray-50 hover:text-[#2B2B2B]"
              }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-gray-100">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#6B6B6B] hover:bg-gray-50 hover:text-[#2B2B2B] transition-colors">
            <LogOut size={20} />
            {sidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-100 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5 text-[#6B6B6B]" />
              </button>
              <h1 className="text-xl font-semibold text-[#2B2B2B]">
                {sidebarItems.find((item) => item.id === activeSection)?.label}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-[#6B6B6B]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-[#E38B29] rounded-full flex items-center justify-center">
                <span className="text-white font-medium">A</span>
              </div>
            </div>
          </div>
        </header>
        <div className="p-6">{renderContent()}</div>
      </main>
    </div>
  );
}
