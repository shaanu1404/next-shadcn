import AppDrawerButton from "@/components/shared/AppDrawerButton";

export default function Navbar() {
  return (
    <header className="py-2">
      <nav className="flex items-center justify-between">
        <AppDrawerButton />
      </nav>
    </header>
  );
}
