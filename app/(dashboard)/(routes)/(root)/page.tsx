"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Loading skeleton for the initial data loading state
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"; // Carousel components for creating the sliding carousel
import { Card, CardContent } from "@/components/ui/card"; // Card components for styling carousel items
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons for navigation buttons

const HomePage = () => {
  const [loading, setLoading] = React.useState(true); // State to manage loading status
  const [currentIndex, setCurrentIndex] = React.useState(0); // State to track the currently displayed carousel item
  const totalItems = 5; // Total number of items in the carousel

  React.useEffect(() => {
    const loadingTimeout = setTimeout(() => setLoading(false), 2000); // Simulate data loading
    return () => clearTimeout(loadingTimeout); // Cleanup timeout
  }, []);

  React.useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems); // Auto slide every 8 seconds
      }, 8000);

      return () => clearInterval(interval); // Cleanup interval
    }
  }, [loading]);

  // Handler to navigate to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  // Handler to navigate to the previous slide
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems); // Properly wrap around to the last item
  };

  // Handler for clickable numbers
  const handleNumberClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center translate-y-1 text-center">
      {loading ? (
        <Skeleton className="h-[125px] w-[550px] rounded-xl" />
      ) : (
        <div className="relative w-full max-w-[90%] md:max-w-[95%] h-[1200px] overflow-hidden">
          <Carousel className="w-full h-full relative">
            <CarouselContent
              style={{
                display: "flex",
                transform: `translateX(-${currentIndex * 100}%)`, // This moves the carousel
                transition: "transform 0.5s ease", // Add smooth transition when switching slides
              }}
            >
              {Array.from({ length: totalItems }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="flex-shrink-0 w-full h-full"
                >
                  <div className="p-4 h-full">
                    <Card className="h-full">
                      <CardContent className="flex h-full items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Div to hold the buttons inside the carousel */}
            <div className="absolute inset-x-6 top-9 flex justify-between items-center z-50">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="bg-gray-800 text-white p-3 rounded-full cursor-pointer hover:bg-gray-700 flex items-center justify-center"
              >
                <FaChevronLeft size={20} />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="bg-gray-800 text-white p-3 rounded-full cursor-pointer hover:bg-gray-700 flex items-center justify-center"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          </Carousel>

          {/* Render numbers below the carousel, make them clickable */}
          <div className="mt-4 flex justify-center space-x-4">
            {Array.from({ length: totalItems }).map((_, index) => (
              <button
                key={index}
                className={`text-2xl font-semibold ${
                  currentIndex === index ? "text-blue-500" : "text-gray-500"
                }`}
                onClick={() => handleNumberClick(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
