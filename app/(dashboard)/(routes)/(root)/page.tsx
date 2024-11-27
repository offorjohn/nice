"use client";

import { SignInButton } from "@clerk/nextjs"; // Clerk login button
import { Button } from "@/components/ui/button"; // ShadCN UI Button

const HomePage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4 shadow-lg">
        <h1 className="text-xl font-bold mb-4"> Temporary Sidebar</h1>
        <ul className="space-y-2">
          <li>
            <a href="/" className="text-gray-700 hover:text-blue-600">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-700 hover:text-blue-600">
              Courses
            </a>
          </li>
        </ul>
        {/* Login Button */}
        <div className="mt-8">
          <SignInButton mode="modal">
            <Button>Log In</Button>
          </SignInButton>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Work Ongoing</h2>
      </main>
    </div>
  );
};

export default HomePage;
