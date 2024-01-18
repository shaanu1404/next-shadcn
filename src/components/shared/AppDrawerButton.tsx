import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import UserProfileDropdown from "@/components/shared/UserProfileDropdown";

export default function AppDrawerButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu size={20} strokeWidth={1.5} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-[280px] flex flex-col">
        <div className="flex-1">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
          </SheetHeader>
        </div>
        <Separator />
        <SheetFooter>
          <UserProfileDropdown />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
