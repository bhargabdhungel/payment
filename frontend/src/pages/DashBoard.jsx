import { useNavigate } from "react-router-dom";
import useLoggedIn from "../hooks/useLoggedIn";
import { useEffect, useState } from "react";
import LoadingCard from "../components/LoadingCard";
import { useRecoilValue } from "recoil";
import { searchValueAtom } from "../store/user";
import axios from "axios";
import { FaUserPlus } from "react-icons/fa";

export default function Dashboard() {
  const navigate = useNavigate();
  const { loggedIn, loading } = useLoggedIn();
  const searchVal = useRecoilValue(searchValueAtom);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!loading && !loggedIn) navigate("/login", { replace: true });
  }, [loggedIn, loading, navigate]);

  useEffect(() => {
    const search = async () => {
      if (!searchVal) return setSearchResults([]);
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          import.meta.env.VITE_SERVER + "/api/user/search?filter=" + searchVal,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setSearchResults(response.data.result);
      } catch (err) {
        // alert(err.message);
        setSearchResults([]);
      }
    };
    if (loggedIn && !loading) search();
  }, [loggedIn, loading, searchVal]);

  if (loading) return <LoadingCard />;

  if (searchResults.length > 0) {
    return(
      <div className="w-1/3 my-12 bg-red-500 p-4 border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Search Results
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {searchResults.map((result, index) => {
              const shortName = result.name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .toUpperCase();
              return (
                <li key={index} className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="relative cursor-pointer inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <span className="font-medium text-gray-600 dark:text-gray-300">
                        {shortName}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {result.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {result.username}
                      </p>
                    </div>
                    <button>
                      <FaUserPlus className="text-white" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  return <h1 className="text-white text-3xl">You have no friends right now</h1>;
}
