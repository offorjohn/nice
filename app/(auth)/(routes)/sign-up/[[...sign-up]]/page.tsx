import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <SignedIn>
        <h1>Welcome back, user!</h1>
      </SignedIn>
      <SignedOut>
        <p>Please sign in to access this page.</p>
      </SignedOut>
    </>
  );
}