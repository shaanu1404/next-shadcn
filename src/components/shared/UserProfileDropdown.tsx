"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DrawerAvatarButton from "@/components/shared/DrawerAvatarButton";
import LogoutAlert from "@/components/shared/LogoutAlert";

type UserProfileDropdownProps = {
  showEmail?: boolean;
};

const UserProfileDropdown = ({
  showEmail = true,
}: UserProfileDropdownProps) => {
  const [openLogoutAlert, setOpenLogoutAlert] = useState<boolean>(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <DrawerAvatarButton showEmail={showEmail} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenLogoutAlert(true)}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <LogoutAlert open={openLogoutAlert} onOpenChange={setOpenLogoutAlert} />
    </>
  );
};

export default UserProfileDropdown;
