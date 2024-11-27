import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { CoursesList } from "@/components/CoursesList";
import { InfoCard } from "./_components/info-card";
import { CheckCircle, Clock } from "lucide-react";
import { SignInButton } from "@clerk/nextjs"; // Import Clerk's SignInButton component

export default async function Dashboard() {
  // Fetch courses without requiring a userId
  const { completedCourses = [], coursesInProgress = [] } = await getDashboardCourses();

  // Check if there are no courses to display
  if (completedCourses.length === 0 && coursesInProgress.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen space-y-4">
        <p className="text-gray-500">No courses available at this time.</p>
        <SignInButton mode="modal">
          {/* Single child for SignInButton */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Log In
          </button>
        </SignInButton>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard
          icon={Clock}
          label="In Progress"
          numberOfItems={coursesInProgress.length}
        />
        <InfoCard
          icon={CheckCircle}
          label="Completed"
          numberOfItems={completedCourses.length}
          variant="success"
        />
      </div>
      <CoursesList items={[...coursesInProgress, ...completedCourses]} />
    </div>
  );
}
