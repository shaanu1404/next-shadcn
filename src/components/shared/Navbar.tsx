import Link from "next/link";
import AppDrawerButton from "@/components/shared/AppDrawerButton";
import UserProfileDropdown from "./UserProfileDropdown";

export default function Navbar() {
  return (
    <header className="py-2">
      <nav className="flex items-center justify-between">
        <AppDrawerButton />
        <ul className="flex items-center space-x-4">
          <li>
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm"
            >
              About
            </Link>
          </li>
          <li>
            <UserProfileDropdown showEmail={false} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
