import LoadingCard from "../components/LoadingCard";
// import Navbar from "../components/Navbar";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-start">
      <div className="dark:bg-gray-700 grow flex justify-center items-center">
        <LoadingCard />
      </div>
    </div>
  );
}
