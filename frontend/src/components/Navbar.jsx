import ProfileButton from "./ProfileButton";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r to-black from-gray-900 drop-shadow-lg text-white p-2 px-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Payment App</div>
      <ProfileButton />
    </nav>
  );
}
