// import GetStarted from "./GetStarted";
import LogoCard from "./LogoCard";
import ProfileButton from "./Avatar";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="bg-white flex justify-between px-6 py-2 max-w-screen-xl border-gray-200 dark:bg-gray-900">
      <LogoCard />
      <SearchBar />
      <ProfileButton />
    </nav>
  );
}
