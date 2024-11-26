"use client";
import { BarChart, Compass, Layout, List } from 'lucide-react';
import { SidebarItem } from './SidebarItem';
import { usePathname } from 'next/navigation';

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/"
  },
  {
    icon: Compass,
    label: "Course",
    href: "/search"
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

  const isDashboardPage = pathname === "/"; // Check if it's the Dashboard
  const isTeacherPage = pathname?.includes("/teacher");

  // Determine the routes based on the current page
  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  if (isDashboardPage) {
    // If on the dashboard, return null or render an empty div to hide the sidebar
    return null;
  }

  return (
    <div className='flex flex-col w-full'>
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
