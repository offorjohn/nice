'use client'
import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Ensure this path is correct

// SkeletonCard Component
export function SkeletonCard() {
  return (
    <>
    
    <div className="flex flex-row space-y-3">
      <span>Work</span>
      
      <Skeleton className="h-[125px] w-[250px] rounded-xl"   />
            jon
    </div>
     
    
    <div className="  flex flex-row space-y-2">
        <span>Work</span>
        <Skeleton className="  flex flex-row h-4 w-[250px]" />
        <span>Work</span>
        <Skeleton className="  flex flex-row h-4 w-[200px]" />
      </div>
      
      
      </>
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
      {loading ? <SkeletonCard /> : 'ss'} {/* Toggle loading state */}
    </div>
  );
};

export default HomePage;
