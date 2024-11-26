"use client";
import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./SearchInput";
import { isTeacher } from "@/lib/teacher";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const NavbarRoutes = () => {
   const { userId } = useAuth();
   const pathname = usePathname();

   const { theme, setTheme } = useTheme();

   const isTeacherPage = pathname?.startsWith("/teacher");
   const isPlayerPage = pathname?.includes("/courses");
   const isSearchPage = pathname === "/search";

   return (
      <>
         {isSearchPage && (
            <div className="hidden md:block">
               <SearchInput />
            </div>
         )}
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
