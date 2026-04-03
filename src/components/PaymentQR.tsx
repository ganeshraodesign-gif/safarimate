"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Upload, CheckCircle, Wallet, Clock, Shield } from "lucide-react";

interface TripDetails {
  tripId: string;
  city: string;
  days: number;
  serviceType: "guide" | "companion" | "support";
  totalPrice: number;
  guideName: string;
}

interface PaymentQRProps {
  tripDetails: TripDetails;
  onPaymentUpload?: (file: File) => void;
}

export default function PaymentQR({ tripDetails, onPaymentUpload }: PaymentQRProps) {
  const [uploaded, setUploaded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const qrContent = JSON.stringify({
    tripId: tripDetails.tripId,
    amount: tripDetails.totalPrice,
    city: tripDetails.city,
    guide: tripDetails.guideName,
  });

  const serviceLabels = {
    guide: "Personal Guide",
    companion: "Travel Companion",
    support: "24/7 Support",
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setTimeout(() => {
      setUploaded(true);
      setUploading(false);
      onPaymentUpload?.(file);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#FDF8F3] to-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-text mb-4">
            Complete Your Payment
          </h2>
          <p className="font-['Inter'] text-lg text-text/60">
            Scan QR or transfer directly to confirm your booking
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-[#E38B29]/20"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E38B29]/10 rounded-full mb-4">
                <QRCodeSVG value="payment" className="w-8 h-8 text-[#E38B29]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-text">
                Payment QR Code
              </h3>
              <p className="font-['Inter'] text-sm text-text/60 mt-1">
                Scan with any UPI app
              </p>
            </div>

            <div className="flex justify-center mb-6 p-4 bg-[#FDF8F3] rounded-xl">
              <QRCodeSVG
                value={qrContent}
                size={180}
                level="M"
                includeMargin={false}
                fgColor="#1a1a1a"
                bgColor="#ffffff"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Wallet className="w-4 h-4 text-[#E38B29]" />
                <span className="font-['Inter'] text-text/80">UPI ID: safarimate@okhdfcbank</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="w-4 h-4 text-[#E38B29]" />
                <span className="font-['Inter'] text-text/80">100% Secure Payment</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-[#E38B29]/20">
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-text mb-4">
                Trip Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-[#E38B29]/10">
                  <span className="font-['Inter'] text-text/70">City</span>
                  <span className="font-['Inter'] font-semibold text-text">{tripDetails.city}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#E38B29]/10">
                  <span className="font-['Inter'] text-text/70">Duration</span>
                  <span className="font-['Inter'] font-semibold text-text">{tripDetails.days} Days</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#E38B29]/10">
                  <span className="font-['Inter'] text-text/70">Service Type</span>
                  <span className="font-['Inter'] font-semibold text-text">{serviceLabels[tripDetails.serviceType]}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-['Inter'] text-text/70">Total Amount</span>
                  <span className="font-['Playfair_Display'] text-2xl font-bold text-[#E38B29]">
                    ${tripDetails.totalPrice}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 border border-[#E38B29]/20">
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-text mb-4">
                Bank Details (Manual Transfer)
              </h3>
              <div className="space-y-2 text-sm font-['Inter']">
                <p className="flex justify-between">
                  <span className="text-text/60">Bank Name:</span>
                  <span className="text-text font-medium">HDFC Bank</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-text/60">Account:</span>
                  <span className="text-text font-medium">5012 1234 5678</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-text/60">IFSC:</span>
                  <span className="text-text font-medium">HDFC0001234</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-text/60">Name:</span>
                  <span className="text-text font-medium">SafarMate Pvt Ltd</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-white rounded-2xl shadow-xl p-6 border border-[#E38B29]/20"
        >
          <h3 className="font-['Playfair_Display'] text-xl font-semibold text-text mb-4">
            Payment Instructions
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#E38B29]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-['Inter'] text-sm font-bold text-[#E38B29]">1</span>
              </div>
              <div>
                <p className="font-['Inter'] text-sm font-medium text-text">Scan QR Code</p>
                <p className="font-['Inter'] text-xs text-text/60">Use any UPI app to scan</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#E38B29]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-['Inter'] text-sm font-bold text-[#E38B29]">2</span>
              </div>
              <div>
                <p className="font-['Inter'] text-sm font-medium text-text">Enter Amount</p>
                <p className="font-['Inter'] text-xs text-text/60">${tripDetails.totalPrice} as shown</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#E38B29]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-['Inter'] text-sm font-bold text-[#E38B29]">3</span>
              </div>
              <div>
                <p className="font-['Inter'] text-sm font-medium text-text">Upload Screenshot</p>
                <p className="font-['Inter'] text-xs text-text/60">Proof of payment</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploaded || uploading}
              className={`px-8 py-3 rounded-xl font-['Inter'] font-medium transition-all duration-300 flex items-center gap-2 ${
                uploaded
                  ? "bg-green-500 text-white"
                  : "bg-[#E38B29] hover:bg-[#D47B1F] text-white shadow-lg hover:shadow-xl"
              }`}
            >
              {uploading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Uploading...
                </>
              ) : uploaded ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Payment Proof Uploaded
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  Upload Payment Screenshot
                </>
              )}
            </button>
            <p className="font-['Inter'] text-xs text-text/50 mt-3 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Payments processed within 24 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
