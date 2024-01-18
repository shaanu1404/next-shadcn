"use client";

import { SessionProvider } from "next-auth/react";

type AuthContextWrapperProps = {
  children: React.ReactNode | React.ReactNode[];
};

export default function AuthContextWrapper({
  children,
}: AuthContextWrapperProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
