"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  User,
  Clock,
  Star,
  Plus,
  CreditCard,
  Play,
  Square,
  MessageCircle,
  ChevronRight,
  LogOut,
  Menu,
  Bell,
  Phone,
  Mail,
  Globe,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock3,
  Edit,
  Languages,
  Wallet,
  Archive,
} from "lucide-react";

interface Trip {
  id: string;
  city: string;
  date: string;
  endDate: string;
  days: number;
  serviceType: string;
  status: "upcoming" | "ongoing" | "completed";
  traveler: {
    name: string;
    phone: string;
    city: string;
  };
  price: number;
  otp?: string;
}

interface Review {
  id: string;
  tripId: string;
  city: string;
  date: string;
  traveler: string;
  rating: number;
  comment: string;
}

const mockAssignedTrips: Trip[] = [
  {
    id: "1",
    city: "Jaipur",
    date: "2026-04-15",
    endDate: "2026-04-17",
    days: 3,
    serviceType: "City Tour",
    status: "upcoming",
    traveler: {
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
      city: "Mumbai",
    },
    price: 7500,
  },
  {
    id: "2",
    city: "Udaipur",
    date: "2026-04-20",
    endDate: "2026-04-23",
    days: 4,
    serviceType: "City Tour + Lake",
    status: "upcoming",
    traveler: {
      name: "Priya Mehta",
      phone: "+91 98765 43211",
      city: "Delhi",
    },
    price: 12000,
  },
  {
    id: "3",
    city: "Varanasi",
    date: "2026-04-10",
    endDate: "2026-04-12",
    days: 3,
    serviceType: "Spiritual Tour",
    status: "ongoing",
    traveler: {
      name: "Amit Kumar",
      phone: "+91 98765 43212",
      city: "Bangalore",
    },
    price: 9000,
    otp: "5678",
  },
];

const mockPastTrips: Trip[] = [
  {
    id: "4",
    city: "Agra",
    date: "2026-03-25",
    endDate: "2026-03-25",
    days: 1,
    serviceType: "Taj Mahal Tour",
    status: "completed",
    traveler: {
      name: "Sneha Gupta",
      phone: "+91 98765 43213",
      city: "Pune",
    },
    price: 2500,
  },
  {
    id: "5",
    city: "Goa",
    date: "2026-03-15",
    endDate: "2026-03-19",
    days: 5,
    serviceType: "Beach Tour",
    status: "completed",
    traveler: {
      name: "Vikram Singh",
      phone: "+91 98765 43214",
      city: "Chennai",
    },
    price: 12500,
  },
  {
    id: "6",
    city: "Jaipur",
    date: "2026-03-01",
    endDate: "2026-03-03",
    days: 3,
    serviceType: "City Tour",
    status: "completed",
    traveler: {
      name: "Anjali Patel",
      phone: "+91 98765 43215",
      city: "Ahmedabad",
    },
    price: 7500,
  },
];

const mockReviews: Review[] = [
  {
    id: "1",
    tripId: "4",
    city: "Agra",
    date: "2026-03-25",
    traveler: "Sneha Gupta",
    rating: 5,
    comment: "Excellent guide! Very knowledgeable about the history and took us to amazing places. Highly recommended!",
  },
  {
    id: "2",
    tripId: "5",
    city: "Goa",
    date: "2026-03-19",
    traveler: "Vikram Singh",
    rating: 4,
    comment: "Great experience overall. Very friendly and patient. Would book again!",
  },
  {
    id: "3",
    tripId: "6",
    city: "Jaipur",
    date: "2026-03-03",
    traveler: "Anjali Patel",
    rating: 5,
    comment: "Amazing trip! The guide made our Jaipur visit unforgettable. Professional and courteous.",
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    upcoming: "bg-blue-100 text-blue-800",
    ongoing: "bg-green-100 text-green-800",
    completed: "bg-gray-100 text-gray-800",
  };

  const labels: Record<string, string> = {
    upcoming: "Upcoming",
    ongoing: "Ongoing",
    completed: "Completed",
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[status] || "bg-gray-100"}`}>
      {labels[status] || status}
    </span>
  );
}

function ApplicationStatusBadge({ status }: { status: "pending" | "verified" | "rejected" }) {
  const configs = {
    pending: {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      icon: Clock3,
      label: "Pending Review",
    },
    verified: {
      bg: "bg-green-100",
      text: "text-green-800",
      icon: CheckCircle,
      label: "Verified Guide",
    },
    rejected: {
      bg: "bg-red-100",
      text: "text-red-800",
      icon: XCircle,
      label: "Application Rejected",
    },
  };

  const config = configs[status];
  const Icon = config.icon;

  return (
    <div className={`flex items-center gap-2 px-4 py-3 rounded-lg ${config.bg} ${config.text}`}>
      <Icon className="w-5 h-5" />
      <span className="font-medium">{config.label}</span>
    </div>
  );
}

function TripCard({ trip, onAction }: { trip: Trip; onAction: (action: string, tripId: string) => void }) {
  const guideShare = Math.round(trip.price * 0.7);

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-[#2B2B2B]">{trip.city}</h3>
          <p className="text-sm text-[#6B6B6B]">{trip.serviceType}</p>
        </div>
        <StatusBadge status={trip.status} />
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-[#6B6B6B]">
          <Calendar className="w-4 h-4" />
          <span>
            {trip.date} - {trip.endDate} ({trip.days} day{trip.days > 1 ? "s" : ""})
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#6B6B6B]">
          <User className="w-4 h-4" />
          <span>Traveler: {trip.traveler.name}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#6B6B6B]">
          <MapPin className="w-4 h-4" />
          <span>From: {trip.traveler.city}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#6B6B6B]">
          <Phone className="w-4 h-4" />
          <span>{trip.traveler.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#6B6B6B]">
          <CreditCard className="w-4 h-4" />
          <span className="font-medium text-[#2B2B2B]">
            ₹{trip.price.toLocaleString()} (Your share: ₹{guideShare.toLocaleString()})
          </span>
        </div>
      </div>

      {trip.status === "ongoing" && trip.otp && (
        <div className="bg-green-50 rounded-lg p-3 mb-4 border border-green-100">
          <p className="text-xs text-green-700 font-medium mb-1">Trip OTP</p>
          <p className="text-2xl font-bold text-green-700 tracking-wider">{trip.otp}</p>
          <p className="text-xs text-green-600 mt-1">Ask traveler for OTP to verify</p>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {trip.status === "ongoing" && trip.otp && (
          <button
            onClick={() => onAction("end", trip.id)}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
          >
            <Square className="w-4 h-4" />
            End Trip
          </button>
        )}
        {trip.status === "ongoing" && (
          <button
            onClick={() => onAction("contact", trip.id)}
            className="px-4 py-2 border border-[#E38B29] text-[#E38B29] rounded-lg text-sm font-medium hover:bg-[#E38B29]/10 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Contact Traveler
          </button>
        )}
        {trip.status === "upcoming" && (
          <button
            onClick={() => onAction("accept", trip.id)}
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            Accept Trip
          </button>
        )}
      </div>
    </div>
  );
}

function ActiveTripCard({ trip }: { trip: Trip }) {
  const guideShare = Math.round(trip.price * 0.7);

  return (
    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        <span className="text-sm font-medium">Active Trip</span>
      </div>
      <h3 className="text-2xl font-bold mb-2">{trip.city}</h3>
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-green-100">
          <Calendar className="w-4 h-4" />
          <span>{trip.date} - {trip.endDate}</span>
        </div>
        <div className="flex items-center gap-2 text-green-100">
          <Clock className="w-4 h-4" />
          <span>{trip.days} day{trip.days > 1 ? "s" : ""}</span>
        </div>
      </div>
      <div className="bg-white/20 rounded-lg p-4 mb-4">
        <p className="text-sm text-green-100 mb-1">Your Traveler</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">{trip.traveler.name}</p>
            <p className="text-sm text-green-100">{trip.traveler.phone}</p>
            <p className="text-xs text-green-100">From: {trip.traveler.city}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-green-100">Earnings</p>
            <p className="text-xl font-bold">₹{guideShare.toLocaleString()}</p>
          </div>
        </div>
      </div>
      {trip.otp && (
        <div className="bg-white/20 rounded-lg p-4">
          <p className="text-sm text-green-100 mb-1">Trip OTP</p>
          <p className="text-3xl font-bold tracking-wider">{trip.otp}</p>
          <p className="text-xs text-green-100 mt-1">Verify with traveler</p>
        </div>
      )}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold text-[#2B2B2B]">{review.traveler}</h4>
          <p className="text-sm text-[#6B6B6B]">{review.city} - {review.date}</p>
        </div>
        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-yellow-700">{review.rating}</span>
        </div>
      </div>
      <p className="text-sm text-[#6B6B6B]">{review.comment}</p>
    </div>
  );
}

export default function GuideDashboard() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "applications" | "assigned" | "past" | "earnings" | "profile" | "reviews"
  >("overview");
  const [applicationStatus] = useState<"pending" | "verified" | "rejected">("verified");
  const [isAvailable, setIsAvailable] = useState(true);
  const [languages, setLanguages] = useState<string[]>(["English", "Hindi", "Rajasthani"]);
  const [pricePerDay, setPricePerDay] = useState(2500);

  const handleAction = (action: string, tripId: string) => {
    const trip = [...mockAssignedTrips, ...mockPastTrips].find((t) => t.id === tripId);
    if (!trip) return;

    switch (action) {
      case "accept":
        alert(`Trip to ${trip.city} accepted!`);
        break;
      case "end":
        alert(`Trip ended successfully. Your earnings: ₹${Math.round(trip.price * 0.7).toLocaleString()}`);
        break;
      case "contact":
        alert(`Contacting ${trip.traveler.name} at ${trip.traveler.phone}`);
        break;
    }
  };

  const upcomingTrips = mockAssignedTrips.filter((t) => t.status === "upcoming");
  const activeTrip = mockAssignedTrips.find((t) => t.status === "ongoing");
  const pastTrips = mockPastTrips;

  const totalEarnings = mockPastTrips.reduce((sum, t) => sum + Math.round(t.price * 0.7), 0);
  const thisMonthEarnings = mockPastTrips.slice(0, 2).reduce((sum, t) => sum + Math.round(t.price * 0.7), 0);
  const pendingEarnings = mockAssignedTrips.filter((t) => t.status === "upcoming").reduce((sum, t) => sum + Math.round(t.price * 0.7), 0);

  const stats = {
    totalTrips: mockAssignedTrips.length + mockPastTrips.length,
    completedTrips: pastTrips.length,
    upcomingTrips: upcomingTrips.length,
    rating: 4.8,
    totalEarnings,
    thisMonthEarnings,
    pendingEarnings,
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#E38B29] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl text-[#2B2B2B]">SafarMate</span>
            </Link>
            <div className="h-6 w-px bg-gray-200"></div>
            <h1 className="text-xl font-semibold text-[#2B2B2B]">Guide Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors relative">
              <Bell className="w-5 h-5 text-[#6B6B6B]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
              <div className="w-10 h-10 bg-[#E38B29] rounded-full flex items-center justify-center">
                <span className="text-white font-medium">RK</span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-[#2B2B2B]">Rajesh Kumar</p>
                <p className="text-xs text-[#6B6B6B]">Verified Guide</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="flex-1 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {(["overview", "applications", "assigned", "past", "earnings", "profile", "reviews"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-[#E38B29] text-white"
                        : "bg-white text-[#6B6B6B] hover:bg-gray-50"
                    }`}
                  >
                    {tab === "overview" && "Overview"}
                    {tab === "applications" && "Applications"}
                    {tab === "assigned" && "Assigned Trips"}
                    {tab === "past" && "Past Trips"}
                    {tab === "earnings" && "Earnings"}
                    {tab === "profile" && "Profile"}
                    {tab === "reviews" && "Reviews"}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-[#2B2B2B] mb-2">Welcome back, Rajesh!</h2>
                  <p className="text-[#6B6B6B]">
                    You have {stats.upcomingTrips} upcoming trip{stats.upcomingTrips !== 1 ? "s" : ""} and ₹{stats.pendingEarnings.toLocaleString()} in pending earnings.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#6B6B6B]">Total Earnings</p>
                        <p className="text-2xl font-bold text-[#2B2B2B]">₹{stats.totalEarnings.toLocaleString()}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#6B6B6B]">Trips Completed</p>
                        <p className="text-2xl font-bold text-[#2B2B2B]">{stats.completedTrips}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-[#E38B29]/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-[#E38B29]" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#6B6B6B]">Upcoming</p>
                        <p className="text-2xl font-bold text-[#2B2B2B]">{stats.upcomingTrips}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#6B6B6B]">Rating</p>
                        <p className="text-2xl font-bold text-[#2B2B2B]">{stats.rating}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                        <Star className="w-6 h-6 text-yellow-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {activeTrip && <ActiveTripCard trip={activeTrip} />}

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-[#2B2B2B]">Upcoming Trips</h3>
                    <button
                      onClick={() => setActiveTab("assigned")}
                      className="text-sm text-[#E38B29] hover:text-[#C77A23] flex items-center gap-1"
                    >
                      View All <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    {upcomingTrips.slice(0, 3).map((trip) => (
                      <div
                        key={trip.id}
                        className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
                      >
                        <div>
                          <p className="font-medium text-[#2B2B2B]">{trip.city}</p>
                          <p className="text-sm text-[#6B6B6B]">
                            {trip.date} - {trip.endDate} • {trip.traveler.name}
                          </p>
                        </div>
                        <StatusBadge status={trip.status} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "applications" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-[#2B2B2B] mb-4">My Application</h2>
                  <ApplicationStatusBadge status={applicationStatus} />
                  
                  {applicationStatus === "verified" && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
                      <p className="text-sm text-green-700">
                        Congratulations! Your guide application has been verified. You can now accept and complete trips to earn income.
                      </p>
                    </div>
                  )}
                  
                  {applicationStatus === "pending" && (
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                      <p className="text-sm text-yellow-700">
                        Your application is under review. This usually takes 2-3 business days. We appreciate your patience.
                      </p>
                    </div>
                  )}
                  
                  {applicationStatus === "rejected" && (
                    <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-100">
                      <p className="text-sm text-red-700">
                        Your application was not approved. Please contact support for more information or reapply with updated documents.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-[#2B2B2B] mb-4">Application Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-50">
                      <span className="text-[#6B6B6B]">Application ID</span>
                      <span className="font-medium text-[#2B2B2B]">APP-2026-001234</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-50">
                      <span className="text-[#6B6B6B]">Submitted On</span>
                      <span className="font-medium text-[#2B2B2B]">March 15, 2026</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-50">
                      <span className="text-[#6B6B6B]">Verified On</span>
                      <span className="font-medium text-[#2B2B2B]">March 18, 2026</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-[#6B6B6B]">Documents</span>
                      <span className="font-medium text-green-600">Verified ✓</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "assigned" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-[#2B2B2B]">Assigned Trips</h2>
                {mockAssignedTrips.length === 0 ? (
                  <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                    <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-[#6B6B6B] mb-4">No assigned trips</p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {mockAssignedTrips.map((trip) => (
                      <TripCard key={trip.id} trip={trip} onAction={handleAction} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "past" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-[#2B2B2B]">Past Trips</h2>
                {pastTrips.length === 0 ? (
                  <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                    <Archive className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-[#6B6B6B]">No completed trips yet</p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {pastTrips.map((trip) => (
                      <TripCard key={trip.id} trip={trip} onAction={handleAction} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "earnings" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-[#2B2B2B] mb-6">Earnings Overview</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                      <p className="text-sm text-green-100 mb-1">Total Earnings</p>
                      <p className="text-3xl font-bold">₹{stats.totalEarnings.toLocaleString()}</p>
                      <p className="text-xs text-green-100 mt-2">Lifetime earnings</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-gray-100">
                      <p className="text-sm text-[#6B6B6B] mb-1">This Month</p>
                      <p className="text-3xl font-bold text-[#2B2B2B]">₹{stats.thisMonthEarnings.toLocaleString()}</p>
                      <p className="text-xs text-green-600 mt-2">From 2 trips</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-gray-100">
                      <p className="text-sm text-[#6B6B6B] mb-1">Pending</p>
                      <p className="text-3xl font-bold text-[#2B2B2B]">₹{stats.pendingEarnings.toLocaleString()}</p>
                      <p className="text-xs text-blue-600 mt-2">From {stats.upcomingTrips} trips</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-blue-800">70% Guide Share</p>
                        <p className="text-sm text-blue-700">
                          You receive 70% of the trip price as your earnings. The remaining 30% goes to SafarMate platform.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-[#2B2B2B] mb-4">Recent Payouts</h3>
                  <div className="space-y-3">
                    {mockPastTrips.slice(0, 3).map((trip) => (
                      <div
                        key={trip.id}
                        className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
                      >
                        <div>
                          <p className="font-medium text-[#2B2B2B]">{trip.city}</p>
                          <p className="text-sm text-[#6B6B6B]">{trip.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">+₹{Math.round(trip.price * 0.7).toLocaleString()}</p>
                          <p className="text-xs text-green-600">Paid</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-[#2B2B2B] mb-4">Payout Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-50">
                      <div>
                        <p className="font-medium text-[#2B2B2B]">Bank Account</p>
                        <p className="text-sm text-[#6B6B6B]">HDFC Bank •••• 4567</p>
                      </div>
                      <button className="text-sm text-[#E38B29] hover:text-[#C77A23]">Edit</button>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-50">
                      <div>
                        <p className="font-medium text-[#2B2B2B]">Payout Schedule</p>
                        <p className="text-sm text-[#6B6B6B]">Weekly (Every Monday)</p>
                      </div>
                      <button className="text-sm text-[#E38B29] hover:text-[#C77A23]">Edit</button>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="font-medium text-[#2B2B2B]">Minimum Payout</p>
                        <p className="text-sm text-[#6B6B6B]">₹500</p>
                      </div>
                      <button className="text-sm text-[#E38B29] hover:text-[#C77A23]">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-[#2B2B2B] mb-6">Profile Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between py-4 border-b border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[#E38B29] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xl">RK</span>
                        </div>
                        <div>
                          <p className="font-semibold text-[#2B2B2B]">Rajesh Kumar</p>
                          <p className="text-sm text-[#6B6B6B]">Guide since March 2026</p>
                        </div>
                      </div>
                      <button className="text-sm text-[#E38B29] hover:text-[#C77A23] flex items-center gap-1">
                        <Edit className="w-4 h-4" /> Edit Photo
                      </button>
                    </div>

                    <div>
                      <label className="flex items-center justify-between cursor-pointer">
                        <div>
                          <p className="font-medium text-[#2B2B2B]">Available for Trips</p>
                          <p className="text-sm text-[#6B6B6B]">Allow travelers to see your availability</p>
                        </div>
                        <button
                          onClick={() => setIsAvailable(!isAvailable)}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            isAvailable ? "bg-green-500" : "bg-gray-300"
                          }`}
                        >
                          <span
                            className={`block w-5 h-5 bg-white rounded-full transition-transform ${
                              isAvailable ? "translate-x-6" : "translate-x-0.5"
                            }`}
                          />
                        </button>
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                        <Languages className="w-4 h-4 inline mr-2" />
                        Languages
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {["English", "Hindi", "Rajasthani", " Gujarati", "Punjabi"].map((lang) => (
                          <button
                            key={lang}
                            onClick={() => {
                              if (languages.includes(lang)) {
                                setLanguages(languages.filter((l) => l !== lang));
                              } else {
                                setLanguages([...languages, lang]);
                              }
                            }}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                              languages.includes(lang)
                                ? "bg-[#E38B29] text-white"
                                : "bg-gray-100 text-[#6B6B6B] hover:bg-gray-200"
                            }`}
                          >
                            {lang}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                        <DollarSign className="w-4 h-4 inline mr-2" />
                        Price per Day (₹)
                      </label>
                      <input
                        type="number"
                        value={pricePerDay}
                        onChange={(e) => setPricePerDay(Number(e.target.value))}
                        className="w-full md:w-48 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E38B29]/50"
                      />
                      <p className="text-xs text-[#6B6B6B] mt-1">Your earnings: 70% = ₹{Math.round(pricePerDay * 0.7)} per day</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                        <Globe className="w-4 h-4 inline mr-2" />
                        Service Cities
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {["Jaipur", "Udaipur", "Jodhpur", "Agra", "Delhi", "Mumbai"].map((city) => (
                          <button
                            key={city}
                            className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-[#6B6B6B] hover:bg-gray-200 transition-colors"
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button className="w-full px-4 py-3 bg-[#E38B29] text-white rounded-lg font-medium hover:bg-[#C77A23] transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-[#2B2B2B]">Reviews</h2>
                    <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1.5 rounded-full">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-yellow-700">{stats.rating}</span>
                      <span className="text-sm text-yellow-600">({mockReviews.length} reviews)</span>
                    </div>
                  </div>

                  {mockReviews.length === 0 ? (
                    <div className="text-center py-8">
                      <Star className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-[#6B6B6B]">No reviews yet</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {mockReviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </main>

          <aside className="w-full lg:w-80 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-[#2B2B2B] mb-4">Profile</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#E38B29] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">RK</span>
                </div>
                <div>
                  <p className="font-semibold text-[#2B2B2B]">Rajesh Kumar</p>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Verified Guide
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-[#6B6B6B]">
                  <Mail className="w-4 h-4" />
                  <span>rajesh.kumar@email.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#6B6B6B]">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#6B6B6B]">
                  <Globe className="w-4 h-4" />
                  <span>English, Hindi, Rajasthani</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#6B6B6B]">
                  <MapPin className="w-4 h-4" />
                  <span>Jaipur, Rajasthan</span>
                </div>
              </div>
              <button
                onClick={() => setActiveTab("profile")}
                className="w-full mt-4 px-4 py-2 border border-gray-200 text-[#6B6B6B] rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <Edit className="w-4 h-4" />
                Edit Profile
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-[#2B2B2B] mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6B6B6B]">Total Earnings</p>
                      <p className="font-semibold text-[#2B2B2B]">₹{stats.totalEarnings.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <Star className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6B6B6B]">Rating</p>
                      <p className="font-semibold text-[#2B2B2B]">{stats.rating} / 5.0</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E38B29]/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#E38B29]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6B6B6B]">Trips Done</p>
                      <p className="font-semibold text-[#2B2B2B]">{stats.completedTrips}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-[#2B2B2B] mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab("profile")}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#E38B29]/10 flex items-center justify-center">
                    <Edit className="w-5 h-5 text-[#E38B29]" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-[#2B2B2B]">Edit Profile</p>
                    <p className="text-xs text-[#6B6B6B]">Update your details</p>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab("earnings")}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-[#2B2B2B]">View Earnings</p>
                    <p className="text-xs text-[#6B6B6B]">Track your income</p>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Star className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-[#2B2B2B]">My Reviews</p>
                    <p className="text-xs text-[#6B6B6B]">See traveler feedback</p>
                  </div>
                </button>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 text-[#6B6B6B] rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}
