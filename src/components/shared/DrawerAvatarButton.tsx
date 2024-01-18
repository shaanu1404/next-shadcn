"use client";

import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { extractInitials } from "@/lib/utils/textUtils";

type DrawerAvatarButtonProps = {
  showEmail: boolean;
};

const defaultProfileImage =
  "https://static.vecteezy.com/system/resources/previews/016/293/983/original/profile-avatar-ui-element-template-user-account-editable-isolated-dashboard-component-flat-user-interface-visual-data-presentation-web-design-widget-for-mobile-application-with-dark-theme-vector.jpg";

function DrawerAvatarButton({ showEmail = true }: DrawerAvatarButtonProps) {
  const { data: session } = useSession();

  return (
    <div className="w-full flex items-center space-x-2 hover:text-accent-foreground cursor-pointer">
      <Avatar>
        <AvatarImage
          src={
            session?.user?.image ? session?.user?.image : defaultProfileImage
          }
        />
        <AvatarFallback>
          {extractInitials(session?.user?.name ? session.user.name : "")}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <h3 className="text-black dark:text-white font-bold text-sm">
          {session?.user?.name}
        </h3>
        {showEmail && (
          <h6 className="text-gray-700 dark:text-gray-400 text-xs w-full truncate">
            {session?.user?.email}
          </h6>
        )}
      </div>
    </div>
  );
}

export default DrawerAvatarButton;
