import React, { useState, useRef, useEffect } from 'react';

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  initialPosition?: number;
  className?: string;
}

export function ImageComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  initialPosition = 50,
  className = ""
}: ImageComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('mousemove', handleGlobalMouseMove);
    
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      {/* After Image Layer (Base) */}
      <div className="relative w-full">
        <img
          src={afterImage}
          alt={afterLabel}
          className="w-full h-auto object-contain mb-6 rounded-lg shadow-lg"
          draggable="false"
        />
        {/* After label - will be clipped when slider moves over it */}
        <div 
          className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-mono pointer-events-none transition-opacity duration-200"
          style={{
            opacity: sliderPosition < 85 ? 1 : 0.3
          }}
        >
          {afterLabel}
        </div>
      </div>

      {/* Before Image Layer (Clipped by slider position) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="w-full h-auto object-contain mb-6 rounded-lg shadow-lg"
          draggable="false"
        />
        {/* Before label - will be clipped when slider moves over it */}
        <div 
          className="absolute top-12 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-mono pointer-events-none transition-opacity duration-200"
          style={{
            opacity: sliderPosition > 15 ? 1 : 0.3
          }}
        >
          {beforeLabel}
        </div>
      </div>

      {/* Slider Line - covers full height of the image */}
      <div
        className="absolute top-8 bottom-6 w-[2px] bg-white shadow-lg cursor-ew-resize z-10"
        style={{
          left: `${sliderPosition}%`,
          transform: 'translateX(-50%)'
        }}
      >
        {/* Slider Handle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform active:scale-105 border-2 border-gray-200"
          onMouseDown={handleMouseDown}
        >
          {/* Left Arrow */}
          <svg
            className="w-5 h-5 text-gray-700 -mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {/* Right Arrow */}
          <svg
            className="w-5 h-5 text-gray-700 -ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
