import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <button
        onClick={() => {
          navigate("/login", { replace: true })
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      > Login</button>
    </div>
  );
}