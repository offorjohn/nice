"use client";
import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./SearchInput";
import { isTeacher } from "@/lib/teacher";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs"; // Clerk login button

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const { theme, setTheme } = useTheme();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/courses");

  return (
    <>
      <div className="flex gap-x-2 ml-auto items-center">
        <SearchInput />
      </div>

      <div className="mt-1 ml-auto">
        <SignInButton mode="modal">
          <Button className="bg-transparent hover:bg-transparent border-none nt-[600]">
            Sign   In
          </Button>
        </SignInButton>
      </div>

      <div className="flex gap-x-2 ml-auto items-center">
        {/* Theme Toggle Button */}
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Conditional Buttons */}
        {isTeacherPage || isPlayerPage ? (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href="/teacher/courses">
            <Button size="sm" variant="ghost">
              Teacher mode
            </Button>
          </Link>
        ) : null}

        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};
