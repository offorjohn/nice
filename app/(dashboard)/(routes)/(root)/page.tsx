'use client';
import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Ensure this path is correct

// HomePage component with simulated loading state
const HomePage = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate data loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Home Page</h1>
      {loading ? (
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      ) : (
        <div>Data Loaded</div>
      )}
    </div>
  );
};

// Export HomePage as the default export
export default HomePage;
