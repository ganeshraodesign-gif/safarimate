"use client";

import { useState } from "react";

interface Guide {
  id: string;
  name: string;
  photo: string;
  location: string;
  languages: string[];
}

interface TripDetails {
  tripId: string;
  destination: string;
  startDate: string;
  endDate: string;
  status: "pending" | "active" | "completed";
}

interface ReviewFormProps {
  guide: Guide;
  tripDetails: TripDetails;
  onSubmit: (review: ReviewData) => void;
  onClose?: () => void;
}

interface ReviewData {
  overallRating: number;
  safetyRating: number;
  behaviorRating: number;
  communicationRating: number;
  reviewText: string;
}

function StarRating({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (rating: number) => void;
}) {
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div className="mb-5">
      <label className="font-['Inter'] block text-sm font-medium text-text mb-2">
        {label}
      </label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            onMouseEnter={() => setHoverValue(star)}
            onMouseLeave={() => setHoverValue(0)}
            className="p-1 transition-transform hover:scale-110"
          >
            <svg
              className={`w-7 h-7 ${
                star <= (hoverValue || value)
                  ? "text-amber-400 fill-amber-400"
                  : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ReviewForm({
  guide,
  tripDetails,
  onSubmit,
  onClose,
}: ReviewFormProps) {
  const [ratings, setRatings] = useState({
    overallRating: 0,
    safetyRating: 0,
    behaviorRating: 0,
    communicationRating: 0,
  });
  const [reviewText, setReviewText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isCompleted = tripDetails.status === "completed";
  const allRatingsFilled =
    ratings.overallRating > 0 &&
    ratings.safetyRating > 0 &&
    ratings.behaviorRating > 0 &&
    ratings.communicationRating > 0;

  const handleSubmit = () => {
    if (!allRatingsFilled) {
      setError("Please provide ratings for all categories");
      return;
    }
    setIsSubmitting(true);
    setError("");

    setTimeout(() => {
      onSubmit({
        ...ratings,
        reviewText,
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="font-['Playfair_Display'] text-2xl font-bold text-text mb-2">
          Thank You for Your Review!
        </h2>
        <p className="text-gray-600 mb-6">
          Your feedback helps other travelers and improves our community.
        </p>
        {onClose && (
          <button
            onClick={onClose}
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  if (!isCompleted) {
    return (
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="font-['Playfair_Display'] text-2xl font-bold text-text mb-2">
          Trip Not Completed Yet
        </h2>
        <p className="text-gray-600 mb-6">
          You can only submit a review after your trip has been completed.
        </p>
        <div className="bg-gray-50 rounded-xl p-4 text-left mb-6">
          <h3 className="font-['Inter'] font-semibold text-text mb-3">
            Current Trip Status
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="font-medium text-orange-500 capitalize">
                {tripDetails.status}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Destination:</span>
              <span className="font-medium text-text">
                {tripDetails.destination}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium text-text">
                {tripDetails.startDate} - {tripDetails.endDate}
              </span>
            </div>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-primary px-6 py-4">
        <h2 className="font-['Playfair_Display'] text-xl font-bold text-white text-center">
          Rate Your Experience
        </h2>
        <p className="text-white/80 text-center text-sm mt-1">
          Share your feedback about this trip
        </p>
      </div>

      <div className="p-6">
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <h3 className="font-['Inter'] font-semibold text-text mb-3">
            Trip Details
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Destination:</span>
              <span className="font-medium text-text">
                {tripDetails.destination}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium text-text">
                {tripDetails.startDate} - {tripDetails.endDate}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <h3 className="font-['Inter'] font-semibold text-text mb-3">
            Your Guide
          </h3>
          <div className="flex items-center gap-4">
            {guide.photo && (
              <img
                src={guide.photo}
                alt={guide.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary"
              />
            )}
            <div>
              <p className="font-medium text-text">{guide.name}</p>
              <p className="text-sm text-gray-600">{guide.location}</p>
              <p className="text-xs text-gray-500">
                {guide.languages.join(", ")}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <StarRating
            label="Overall Rating"
            value={ratings.overallRating}
            onChange={(rating) =>
              setRatings((prev) => ({ ...prev, overallRating: rating }))
            }
          />
          <StarRating
            label="Safety Rating"
            value={ratings.safetyRating}
            onChange={(rating) =>
              setRatings((prev) => ({ ...prev, safetyRating: rating }))
            }
          />
          <StarRating
            label="Behavior Rating"
            value={ratings.behaviorRating}
            onChange={(rating) =>
              setRatings((prev) => ({ ...prev, behaviorRating: rating }))
            }
          />
          <StarRating
            label="Communication Rating"
            value={ratings.communicationRating}
            onChange={(rating) =>
              setRatings((prev) => ({ ...prev, communicationRating: rating }))
            }
          />
        </div>

        <div className="mt-5">
          <label className="font-['Inter'] block text-sm font-medium text-text mb-2">
            Write a Review (Optional)
          </label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Share your experience..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg font-['Inter'] text-text placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          disabled={isSubmitting || !allRatingsFilled}
          className="w-full mt-5 py-3 bg-primary text-white rounded-lg font-['Inter'] font-medium hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting...
            </span>
          ) : (
            "Submit Review"
          )}
        </button>

        {onClose && (
          <button
            onClick={onClose}
            className="w-full mt-3 py-2 text-gray-500 hover:text-text font-['Inter'] text-sm transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
