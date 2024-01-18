"use client";

import { signOut } from "next-auth/react";
import { AlertDialogAction } from "@/components/ui/alert-dialog";

type LogoutButtonProps = {
  children: React.ReactNode;
};

export default function LogoutButton({ children }: LogoutButtonProps) {
  const handleLogout = () => signOut();

  return (
    <AlertDialogAction onClick={handleLogout}>{children}</AlertDialogAction>
  );
}
