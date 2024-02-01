import { useNavigate } from "react-router-dom";

export default function GetStarted() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="text-white px-4 py-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={()=>{
        navigate('/login');
      }}
    >
      Get started
    </button>
  );
}