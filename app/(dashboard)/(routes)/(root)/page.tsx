'use client';

import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Ensure this path is correct
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const HomePage = () => {
  const [loading, setLoading] = React.useState(true);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const totalItems = 5; // Total number of carousel items

  React.useEffect(() => {
    // Simulate data loading
    const loadingTimeout = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  React.useEffect(() => {
    if (!loading) {
      // Automatically update the current index every second
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
      }, 8000);

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [loading]);

  return (
      <div className="flex flex-col items-center translate-y-1 text-center">
        
        {loading ? (
          <Skeleton className="h-[125px] w-[550px] rounded-xl" />
        ) : (
          <div className="relative w-full max-w-xs overflow-hidden">
            <Carousel className="w-full">
              <CarouselContent
                style={{
                  display: "flex",
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: "transform 0.5s ease",
                }}
              >
                {Array.from({ length: totalItems }).map((_, index) => (
                  <CarouselItem key={index} className="flex-shrink-0 w-full">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                onClick={() =>
                  setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? totalItems - 1 : prevIndex - 1
                  )
                }
              />
              <CarouselNext
                onClick={() =>
                  setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems)
                }
              />
            </Carousel>
          </div>
        )}
      </div>
  
  );
};

export default HomePage;
