
import { SignInButton } from "@clerk/nextjs"; // Import Clerk's SignInButton component

export default async function Dashboard() {
  // Fetch courses without requiring a userId
    return (
     
        <SignInButton mode="modal">
          {/* Single child for SignInButton */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Log In
          </button>
        </SignInButton>
  
    );
  }



