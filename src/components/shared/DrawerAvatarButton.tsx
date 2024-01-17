import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DrawerAvatarButton() {
  return (
    <div className="w-full flex items-center space-x-2">
      <Avatar>
        <AvatarImage src="https://static.vecteezy.com/system/resources/previews/016/293/983/original/profile-avatar-ui-element-template-user-account-editable-isolated-dashboard-component-flat-user-interface-visual-data-presentation-web-design-widget-for-mobile-application-with-dark-theme-vector.jpg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-black dark:text-white font-bold text-sm">
          shanu1404
        </h3>
        <h6 className="text-gray-700 dark:text-gray-400 text-xs truncate">
          shanu14tnt@gmail.com
        </h6>
      </div>
    </div>
  );
}
