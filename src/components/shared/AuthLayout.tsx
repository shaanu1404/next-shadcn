"use client";

import { useSession, signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import AppLoading from "@/components/shared/AppLoading";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  const handleSignin = () => {
    signIn("github");
  };

  if (status === "loading") {
    return <AppLoading />;
  }

  if (!session) {
    return (
      <main className="flex justify-center items-center flex-col min-h-screen space-y-4">
        <p className="text-xl font-medium text-center">
          You are not logged in. Please login to enjoy the app.
        </p>
        <Button variant="outline" onClick={handleSignin}>
          Signin
        </Button>
      </main>
    );
  }

  return children;
}
