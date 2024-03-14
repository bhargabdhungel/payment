import LogoCard from "./LogoCard";
import ProfileButton from "./Avatar";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="h-[10vh] bg-white flex justify-between items-center px-6 py-2 border-gray-200 dark:bg-gray-900">
      <LogoCard />
      <SearchBar />
      <ProfileButton />
    </nav>
  );
}
