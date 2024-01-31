import Navbar from "../components/Navbar";
import LoginCard from "../components/LoginCard";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-start">
      <Navbar />
      <div className="dark:bg-gray-700 grow flex justify-center items-center">
        <LoginCard />
      </div>
    </div>
  );
}
