"use client";

import { useState } from "react";

export const IMAGES = {
  HERO: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80",
  DELHI: "https://images.unsplash.com/photo-1568721028339-aeb2a1d7079d?w=800&q=80",
  MUMBAI: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
  JAIPUR: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
  VARANASI: "https://images.unsplash.com/photo-1586179935424-5c27c4e87f5e?w=800&q=80",
  AHMEDABAD: "https://images.unsplash.com/photo-1565626424178-c699f6601afd?w=800&q=80",
  GOA: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800&q=80",
  AGRA: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
  BANGALORE: "https://images.unsplash.com/photo-1555658636-6e4a36218a93?w=800&q=80",
  GUIDE_PLACEHOLDER: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  TESTIMONIAL_1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  TESTIMONIAL_2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  TESTIMONIAL_3: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
};

interface ImageLoaderProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
}

export function ImageLoader({
  width = "100%",
  height = "200px",
  borderRadius = "8px",
  className = "",
}: ImageLoaderProps) {
  return (
    <div
      className={`animate-shimmer bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 ${className}`}
      style={{
        width,
        height,
        borderRadius,
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s infinite",
      }}
    />
  );
}

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  hoverZoom?: boolean;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
}

export function LazyImage({
  src,
  alt,
  className = "",
  hoverZoom = false,
  width = "100%",
  height = "200px",
  borderRadius = "8px",
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden" style={{ width, height, borderRadius }}>
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"
          style={{ borderRadius }}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-300 ${
          hoverZoom ? "hover:scale-105" : ""
        } ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
        style={{ borderRadius }}
      />
    </div>
  );
}

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
  columns?: number;
  className?: string;
}

export function ImageGallery({
  images,
  columns = 3,
  className = "",
}: ImageGalleryProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns as keyof typeof gridCols] || gridCols[3]} gap-4 ${className}`}>
      {images.map((image, index) => (
        <LazyImage
          key={index}
          src={image.src}
          alt={image.alt}
          hoverZoom
          className="aspect-square"
        />
      ))}
    </div>
  );
}
