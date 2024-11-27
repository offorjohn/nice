'use client'
import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Ensure this path is correct

export function SkeletonCard() {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-3">
        <span>Work</span>
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <span>Work</span>
          <Skeleton className="h-4 w-[250px]" />
        </div>
        <div className="flex items-center space-x-3">
          <span>Work</span>
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
}
const HomePage = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate data loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Home Page</h1>
      {loading ? <SkeletonCard /> : <Skeleton/>} {/* Toggle loading state */}
    </div>
  );
};

export default HomePage;
