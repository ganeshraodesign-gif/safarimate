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
} from "lucide-react";

interface TripRequest {
  id: string;
  city: string;
  date: string;
  endDate: string;
  days: number;
  serviceType: string;
  status: "pending" | "assigned" | "payment_pending" | "confirmed" | "ongoing" | "completed";
  guide?: {
    name: string;
    phone: string;
    rating: number;
  };
  price?: number;
  otp?: string;
}

interface Review {
  id: string;
  tripId: string;
  city: string;
  date: string;
  guide: string;
  rating: number;
  comment: string;
}

const mockTrips: TripRequest[] = [
  {
    id: "1",
    city: "Jaipur",
    date: "2026-04-15",
    endDate: "2026-04-17",
    days: 3,
    serviceType: "City Tour",
    status: "pending",
    price: 7500,
  },
  {
    id: "2",
    city: "Udaipur",
    date: "2026-04-20",
    endDate: "2026-04-23",
    days: 4,
    serviceType: "City Tour + Lake",
    status: "assigned",
    guide: {
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      rating: 4.8,
    },
    price: 12000,
  },
  {
    id: "3",
    city: "Delhi",
    date: "2026-04-10",
    endDate: "2026-04-11",
    days: 2,
    serviceType: "Historical Tour",
    status: "payment_pending",
    guide: {
      name: "Priya Singh",
      phone: "+91 98765 43211",
      rating: 4.9,
    },
    price: 5000,
  },
  {
    id: "4",
    city: "Agra",
    date: "2026-04-05",
    endDate: "2026-04-05",
    days: 1,
    serviceType: "Taj Mahal Tour",
    status: "confirmed",
    guide: {
      name: "Amit Verma",
      phone: "+91 98765 43212",
      rating: 4.7,
    },
    price: 2500,
  },
  {
    id: "5",
    city: "Varanasi",
    date: "2026-03-28",
    endDate: "2026-03-30",
    days: 3,
    serviceType: "Spiritual Tour",
    status: "ongoing",
    guide: {
      name: "Santosh Gupta",
      phone: "+91 98765 43213",
      rating: 4.9,
    },
    price: 9000,
    otp: "1234",
  },
  {
    id: "6",
    city: "Jaipur",
    date: "2026-03-10",
    endDate: "2026-03-12",
    days: 3,
    serviceType: "City Tour",
    status: "completed",
    guide: {
      name: "Deepak Sharma",
      phone: "+91 98765 43214",
      rating: 4.6,
    },
    price: 7500,
  },
  {
    id: "7",
    city: "Goa",
    date: "2026-02-20",
    endDate: "2026-02-24",
    days: 5,
    serviceType: "Beach Tour",
    status: "completed",
    guide: {
      name: "Carlos Mendez",
      phone: "+91 98765 43215",
      rating: 4.8,
    },
    price: 12500,
  },
];

const mockReviews: Review[] = [];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    assigned: "bg-blue-100 text-blue-800",
    payment_pending: "bg-orange-100 text-orange-800",
    confirmed: "bg-indigo-100 text-indigo-800",
    ongoing: "bg-green-100 text-green-800",
    completed: "bg-gray-100 text-gray-800",
  };

  const labels: Record<string, string> = {
    pending: "Pending",
    assigned: "Assigned",
    payment_pending: "Payment Pending",
    confirmed: "Confirmed",
    ongoing: "Ongoing",
    completed: "Completed",
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[status] || "bg-gray-100"}`}>
      {labels[status] || status}
    </span>
  );
}

function TripCard({ trip, onAction }: { trip: TripRequest; onAction: (action: string, tripId: string) => void }) {
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
        {trip.guide && (
          <div className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <User className="w-4 h-4" />
            <span>Guide: {trip.guide.name}</span>
            <div className="flex items-center gap-0.5 ml-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs">{trip.guide.rating}</span>
            </div>
          </div>
        )}
        {trip.price && (
          <div className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <CreditCard className="w-4 h-4" />
            <span className="font-medium text-[#2B2B2B]">₹{trip.price.toLocaleString()}</span>
          </div>
        )}
      </div>

      {trip.status === "ongoing" && trip.otp && (
        <div className="bg-green-50 rounded-lg p-3 mb-4 border border-green-100">
          <p className="text-xs text-green-700 font-medium mb-1">Trip OTP</p>
          <p className="text-2xl font-bold text-green-700 tracking-wider">{trip.otp}</p>
          <p className="text-xs text-green-600 mt-1">Share this with your guide to start/end trip</p>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {trip.status === "payment_pending" && (
          <button
            onClick={() => onAction("pay", trip.id)}
            className="flex-1 px-4 py-2 bg-[#E38B29] text-white rounded-lg text-sm font-medium hover:bg-[#C77A23] transition-colors flex items-center justify-center gap-2"
          >
            <CreditCard className="w-4 h-4" />
            Pay Now
          </button>
        )}
        {trip.status === "confirmed" && (
          <button
            onClick={() => onAction("start", trip.id)}
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4" />
            Start Trip
          </button>
        )}
        {trip.status === "ongoing" && (
          <button
            onClick={() => onAction("end", trip.id)}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
          >
            <Square className="w-4 h-4" />
            End Trip
          </button>
        )}
        {trip.status === "completed" && !mockReviews.find((r) => r.tripId === trip.id) && (
          <button
            onClick={() => onAction("review", trip.id)}
            className="flex-1 px-4 py-2 bg-[#E38B29] text-white rounded-lg text-sm font-medium hover:bg-[#C77A23] transition-colors flex items-center justify-center gap-2"
          >
            <Star className="w-4 h-4" />
            Write Review
          </button>
        )}
        {(trip.status === "ongoing" || trip.status === "confirmed") && trip.guide && (
          <button
            onClick={() => onAction("contact", trip.id)}
            className="px-4 py-2 border border-[#E38B29] text-[#E38B29] rounded-lg text-sm font-medium hover:bg-[#E38B29]/10 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Contact Guide
          </button>
        )}
      </div>
    </div>
  );
}

function ActiveTripCard({ trip }: { trip: TripRequest }) {
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
      {trip.guide && (
        <div className="bg-white/20 rounded-lg p-4 mb-4">
          <p className="text-sm text-green-100 mb-1">Your Guide</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{trip.guide.name}</p>
              <p className="text-sm text-green-100">{trip.guide.phone}</p>
            </div>
            <div className="flex items-center gap-1 bg-white/30 px-2 py-1 rounded-full">
              <Star className="w-3 h-3 fill-white text-white" />
              <span className="text-sm font-medium">{trip.guide.rating}</span>
            </div>
          </div>
        </div>
      )}
      {trip.otp && (
        <div className="bg-white/20 rounded-lg p-4">
          <p className="text-sm text-green-100 mb-1">Trip OTP</p>
          <p className="text-3xl font-bold tracking-wider">{trip.otp}</p>
        </div>
      )}
    </div>
  );
}

export default function TravelerDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "trips" | "past">("overview");
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<TripRequest | null>(null);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");

  const handleAction = (action: string, tripId: string) => {
    const trip = mockTrips.find((t) => t.id === tripId);
    if (!trip) return;

    switch (action) {
      case "pay":
        alert(`Payment initiated for trip to ${trip.city}`);
        break;
      case "start":
        alert(`Trip started! Your OTP is ${trip.otp}`);
        break;
      case "end":
        alert(`Trip ended. Thank you for traveling with SafarMate!`);
        break;
      case "review":
        setSelectedTrip(trip);
        setShowReviewModal(true);
        break;
      case "contact":
        alert(`Contacting guide ${trip.guide?.name} at ${trip.guide?.phone}`);
        break;
    }
  };

  const pendingTrips = mockTrips.filter((t) =>
    ["pending", "assigned", "payment_pending", "confirmed"].includes(t.status)
  );
  const activeTrip = mockTrips.find((t) => t.status === "ongoing");
  const pastTrips = mockTrips.filter((t) => t.status === "completed");

  const stats = {
    totalTrips: mockTrips.length,
    completedTrips: pastTrips.length,
    upcomingTrips: pendingTrips.length,
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-[#E38B29] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl text-[#2B2B2B]">SafarMate</span>
            </Link>
            <div className="h-6 w-px bg-gray-200"></div>
            <h1 className="text-xl font-semibold text-[#2B2B2B]">My Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors relative">
              <Bell className="w-5 h-5 text-[#6B6B6B]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
              <div className="w-10 h-10 bg-[#E38B29] rounded-full flex items-center justify-center">
                <span className="text-white font-medium">JD</span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-[#2B2B2B]">John Doe</p>
                <p className="text-xs text-[#6B6B6B]">Traveler</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {(["overview", "trips", "past"] as const).map((tab) => (
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
                    {tab === "trips" && "My Trips"}
                    {tab === "past" && "Past Trips"}
                  </button>
                ))}
              </div>
              <Link
                href="/request"
                className="flex items-center gap-2 px-4 py-2 bg-[#E38B29] text-white rounded-lg text-sm font-medium hover:bg-[#C77A23] transition-colors"
              >
                <Plus className="w-4 h-4" />
                New Trip Request
              </Link>
            </div>

            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-[#2B2B2B] mb-2">Welcome back, John!</h2>
                  <p className="text-[#6B6B6B]">
                    Ready for your next adventure? You have {stats.upcomingTrips} upcoming trip
                    {stats.upcomingTrips !== 1 ? "s" : ""}.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#6B6B6B]">Upcoming</p>
                        <p className="text-3xl font-bold text-[#2B2B2B]">{stats.upcomingTrips}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#6B6B6B]">Completed</p>
                        <p className="text-3xl font-bold text-[#2B2B2B]">{stats.completedTrips}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <Star className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {activeTrip && <ActiveTripCard trip={activeTrip} />}

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-[#2B2B2B]">Recent Trip Requests</h3>
                    <button
                      onClick={() => setActiveTab("trips")}
                      className="text-sm text-[#E38B29] hover:text-[#C77A23] flex items-center gap-1"
                    >
                      View All <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    {mockTrips.slice(0, 3).map((trip) => (
                      <div
                        key={trip.id}
                        className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
                      >
                        <div>
                          <p className="font-medium text-[#2B2B2B]">{trip.city}</p>
                          <p className="text-sm text-[#6B6B6B]">
                            {trip.date} - {trip.endDate}
                          </p>
                        </div>
                        <StatusBadge status={trip.status} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "trips" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-[#2B2B2B]">My Trips</h2>
                {pendingTrips.length === 0 ? (
                  <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                    <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-[#6B6B6B] mb-4">No upcoming trips</p>
                    <Link
                      href="/request"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#E38B29] text-white rounded-lg text-sm font-medium hover:bg-[#C77A23] transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Request a Trip
                    </Link>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {pendingTrips.map((trip) => (
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
                    <Star className="w-12 h-12 text-gray-300 mx-auto mb-4" />
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
          </main>

          <aside className="w-full lg:w-80 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-[#2B2B2B] mb-4">Profile</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#E38B29] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JD</span>
                </div>
                <div>
                  <p className="font-semibold text-[#2B2B2B]">John Doe</p>
                  <p className="text-sm text-[#6B6B6B]">Traveler</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-[#6B6B6B]">
                  <Mail className="w-4 h-4" />
                  <span>john.doe@email.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#6B6B6B]">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
              <button className="w-full mt-4 px-4 py-2 border border-gray-200 text-[#6B6B6B] rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Edit Profile
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-[#2B2B2B] mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Link
                  href="/request"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#E38B29]/10 flex items-center justify-center">
                    <Plus className="w-5 h-5 text-[#E38B29]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2B2B2B]">New Trip Request</p>
                    <p className="text-xs text-[#6B6B6B]">Plan your next adventure</p>
                  </div>
                </Link>
                <Link
                  href="/safety"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2B2B2B]">Emergency Support</p>
                    <p className="text-xs text-[#6B6B6B]">Get help anytime</p>
                  </div>
                </Link>
                <Link
                  href="/how-it-works"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2B2B2B]">How It Works</p>
                    <p className="text-xs text-[#6B6B6B]">Learn about SafarMate</p>
                  </div>
                </Link>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 text-[#6B6B6B] rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </aside>
        </div>
      </div>

      {showReviewModal && selectedTrip && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-[#2B2B2B] mb-4">
              Review Trip to {selectedTrip.city}
            </h3>
            <div className="mb-4">
              <p className="text-sm text-[#6B6B6B] mb-2">Your Guide: {selectedTrip.guide?.name}</p>
              <p className="text-sm text-[#6B6B6B] mb-2">Rating</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setReviewRating(star)}
                    className="p-1"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= reviewRating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="text-sm text-[#6B6B6B] mb-2 block">Your Review</label>
              <textarea
                value={reviewComment}
                onChange={(e) => setReviewComment(e.target.value)}
                placeholder="Share your experience..."
                className="w-full p-3 border border-gray-200 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-[#E38B29]/50"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowReviewModal(false)}
                className="flex-1 px-4 py-2 border border-gray-200 text-[#6B6B6B] rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert("Thank you for your review!");
                  setShowReviewModal(false);
                }}
                className="flex-1 px-4 py-2 bg-[#E38B29] text-white rounded-lg font-medium hover:bg-[#C77A23] transition-colors"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
