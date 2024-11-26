import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { CoursesList } from "@/components/CoursesList";
import { InfoCard } from "./_components/info-card";
import { CheckCircle, Clock } from "lucide-react";

export default async function Dashboard() {
  // Fetch courses without requiring a userId
  const { completedCourses = [], coursesInProgress = [] } = await getDashboardCourses();

  // Check if there are no courses to display
  if (completedCourses.length === 0 && coursesInProgress.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">No courses available at this time.</p>
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
