import { SignOutButton, useUser } from '@clerk/nextjs'

export default function Home() {
  const { user } = useUser()

  if (!user) {
    return <SignOutButton />
  }

  return <div>Welcome!</div>
}