"use client";

import { useState, useEffect, useRef } from "react";

interface TripDetails {
  tripId: string;
  destination: string;
  startDate: string;
  endDate: string;
  guideName: string;
  guidePhone: string;
  travelerName: string;
}

interface OTPVerificationProps {
  mode: "start" | "end";
  tripDetails: TripDetails;
  generatedOTP?: string;
  otpGeneratedTime?: Date;
  onVerify: (enteredOTP: string) => void;
  onClose?: () => void;
}

export default function OTPVerification({
  mode,
  tripDetails,
  generatedOTP,
  otpGeneratedTime,
  onVerify,
  onClose,
}: OTPVerificationProps) {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [status, setStatus] = useState<"idle" | "verifying" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (otpGeneratedTime) {
      const updateTimer = () => {
        const now = new Date();
        const diff = Math.floor((now.getTime() - otpGeneratedTime!.getTime()) / 1000);
        const remaining = Math.max(0, 300 - diff);
        setTimeLeft(remaining);
      };
      updateTimer();
      const interval = setInterval(updateTimer, 1000);
      return () => clearInterval(interval);
    }
  }, [otpGeneratedTime]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setErrorMessage("");
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;
    const newOtp = pastedData.split("").slice(0, 6);
    while (newOtp.length < 6) newOtp.push("");
    setOtp(newOtp);
    inputRefs.current[5]?.focus();
  };

  const handleVerify = () => {
    const enteredOTP = otp.join("");
    if (enteredOTP.length !== 6) {
      setErrorMessage("Please enter all 6 digits");
      return;
    }
    setStatus("verifying");
    setTimeout(() => {
      if (enteredOTP === generatedOTP) {
        setStatus("success");
        onVerify(enteredOTP);
      } else {
        setStatus("error");
        setErrorMessage("Invalid OTP. Please try again.");
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-['Playfair_Display'] text-2xl font-bold text-text mb-2">
          Trip {mode === "start" ? "Started" : "Ended"} Successfully!
        </h2>
        <p className="text-gray-600 mb-6">
          {mode === "start" 
            ? "Your trip has begun. Enjoy your journey with SafarMate!" 
            : "Your trip has ended. Thank you for traveling with SafarMate!"}
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

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className={`px-6 py-4 ${mode === "start" ? "bg-primary" : "bg-orange-500"}`}>
        <h2 className="font-['Playfair_Display'] text-xl font-bold text-white text-center">
          {mode === "start" ? "Start Your Trip" : "End Your Trip"}
        </h2>
        <p className="text-white/80 text-center text-sm mt-1">
          Enter the 6-digit OTP to {mode === "start" ? "begin" : "complete"} your journey
        </p>
      </div>

      <div className="p-6">
        {generatedOTP && (
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-600 text-center mb-2">
              Generated OTP (for verification)
            </p>
            <p className="font-['Inter'] text-3xl font-bold text-center text-primary tracking-widest">
              {generatedOTP}
            </p>
            {otpGeneratedTime && timeLeft > 0 && (
              <p className="text-sm text-center text-gray-500 mt-2">
                Expires in: <span className={`font-medium ${timeLeft < 60 ? "text-red-500" : "text-gray-700"}`}>
                  {formatTime(timeLeft)}
                </span>
              </p>
            )}
          </div>
        )}

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          <h3 className="font-['Inter'] font-semibold text-text mb-3">Trip Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Destination:</span>
              <span className="font-medium text-text">{tripDetails.destination}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium text-text">{tripDetails.startDate} - {tripDetails.endDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Guide:</span>
              <span className="font-medium text-text">{tripDetails.guideName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Traveler:</span>
              <span className="font-medium text-text">{tripDetails.travelerName}</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="font-['Inter'] block text-sm font-medium text-text mb-3 text-center">
            Enter 6-digit OTP
          </label>
          <div className="flex justify-center gap-2" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => { inputRefs.current[index] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`w-12 h-12 text-center text-xl font-bold border-2 rounded-lg outline-none transition-colors font-['Inter']
                  ${errorMessage 
                    ? "border-red-400 focus:border-red-500" 
                    : "border-gray-300 focus:border-primary"}`}
              />
            ))}
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
          )}
        </div>

        <button
          onClick={handleVerify}
          disabled={status === "verifying"}
          className={`w-full py-3 rounded-lg font-['Inter'] font-medium text-white transition-all
            ${mode === "start" 
              ? "bg-primary hover:bg-primary-dark" 
              : "bg-orange-500 hover:bg-orange-600"}
            disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {status === "verifying" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Verifying...
            </span>
          ) : (
            mode === "start" ? "Start Trip" : "End Trip"
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
