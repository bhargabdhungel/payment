import Navbar from "../components/Navbar";
import SignupCard from "../components/SignupCard";

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col justify-start">
      <Navbar/>
      <div className="dark:bg-gray-700 grow flex justify-center items-center">
        <SignupCard/>
      </div>
    </div>
  );
}
