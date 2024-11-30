"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Skeleton for loading placeholders
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"; // Carousel components for sliding content
import { NavbarRoutes } from "@/components/NavbarRoutes";
import { Card, CardContent } from "@/components/ui/card"; // Card components for styling carousel items
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons for carousel navigation

const HomePage = () => {
  const [loading, setLoading] = React.useState(true); // State to manage loading status
  const [currentIndex, setCurrentIndex] = React.useState(0); // State to track the current carousel item
  const totalItems = 5; // Total number of items in the carousel

  React.useEffect(() => {
    const loadingTimeout = setTimeout(() => setLoading(false), 2000); // Simulate data loading
    return () => clearTimeout(loadingTimeout); // Cleanup timeout
  }, []);

  React.useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems); // Auto-slide every 8 seconds
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

  return (
    <div className="flex flex-col items-center text-center">
    {/* Sticky Header */}
    <div className="sticky top-0 z-50 w-full bg-white shadow-md">
      <NavbarRoutes />
    </div>

      {loading ? (
        <div className="space-y-6">
          {/* Hero Section */}
          <div className="relative flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            {/* First Skeleton with Text */}
            <div className="relative">
              <Skeleton className="h-[300px] w-full md:w-[500px] rounded-lg" />
              <span className="absolute inset-0 flex justify-center items-center text-white font-bold">
                Just Live
              </span>
            </div>

            {/* Second Skeleton with Text */}
            <div className="relative">
              <Skeleton className="h-[300px] w-full md:w-[500px] rounded-lg" />
              <span className="absolute inset-0 flex justify-center items-center text-white font-bold">
                Discover Top Courses
              </span>
            </div>

             {/* Second Skeleton with Text */}
             <div className="relative">
              <Skeleton className="h-[300px] w-full md:w-[500px] rounded-lg" />
              <span className="absolute inset-0 flex justify-center items-center text-white font-bold">
                Discover Top Courses
              </span>
            </div>
          </div>

          {/* Featured Courses */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Featured Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="h-[200px] w-full rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Additional Section */}
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>

          {/* Recommended Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Recommended for You</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="h-[200px] w-full rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full max-w-[90%] md:max-w-[95%] h-[1200px] overflow-hidden">
                 {/* Carousel Section */}
          <Carousel className="relative w-full h-[400px] overflow-hidden">
            <CarouselContent
              style={{
                display: "flex",
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.5s ease",
              }}
            >
              {Array.from({ length: totalItems }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="flex-shrink-0 w-full h-full relative"
                >
                  <div className="p-4 h-full">
                    <Card className="h-full">
                      <CardContent className="flex h-full items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          Slide {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Navigation Buttons Inside Carousel Content */}
                  {index === currentIndex && (
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                      <button
                        onClick={handlePrevious}
                        className="bg-gray-800 text-white p-3 rounded-full cursor-pointer hover:bg-gray-700 flex items-center justify-center"
                      >
                        <FaChevronLeft size={20} />
                      </button>
                      <button
                        onClick={handleNext}
                        className="bg-gray-800 text-white p-3 rounded-full cursor-pointer hover:bg-gray-700 flex items-center justify-center"
                      >
                        <FaChevronRight size={20} />
                      </button>
                    </div>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>


         {/* Scrollable Divs */}
         <div className="mt-8 space-y-8">
            {Array.from({ length: 20 }).map((_, index) => (
              <div
                key={index}
                className="h-[150px] bg-gray-200 rounded-md shadow-md flex items-center justify-center text-lg font-medium text-gray-700"
              >
                Scrollable Div {index + 1}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
