"use client";
import { BarChart, Compass, Layout, List } from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Course",
    href: "/search",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isDashboardPage = pathname === "/"; // Check if it's the dashboard
  const isTeacherPage = pathname?.includes("/teacher");

  // If on the dashboard, hide the sidebar
  if (isDashboardPage) return null;

  // Determine the routes based on the current page
  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <aside className="flex flex-col w-full bg-gray-100 p-4">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </aside>
  );
};
