import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/lib/auth-context";

export const metadata: Metadata = {
  title: "SafarMate - Your Trusted Travel Companion in India",
  description: "Connect with verified local guides for safe, trusted travel experiences across India. Not just booking a guide - meeting someone who makes a new country feel less foreign.",
  keywords: "travel guide, India tour, local guide, safe travel, trusted companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-text font-body">
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
