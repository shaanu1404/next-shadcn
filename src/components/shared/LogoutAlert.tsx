import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import LogoutButton from "@/components/shared/LogoutButton";

type LogoutButtonProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function LogoutAlert({ open, onOpenChange }: LogoutButtonProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to logout?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <LogoutButton>Continue</LogoutButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
