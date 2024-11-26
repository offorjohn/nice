import { authMiddleware } from "@clerk/nextjs";

// Configure middleware to ignore Clerk authentication on certain routes
export default authMiddleware({
  ignoredRoutes: [
    // Exclude specific routes or patterns
    "/((?!api|trpc))(_next.*|.+\\.[\\w]+$)", // Static files and Next.js assets
    "/", // Public root route
  ],
  publicRoutes: ["/api/webhook"], // Specify other public routes if needed
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
