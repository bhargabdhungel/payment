// import { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
// import { useSetRecoilState } from "recoil";
// import { searchResultsAtom} from "../store/user";
// import useDebounce from "../hooks/useDeboune";
// import axios from "axios";

export default function SearchBar() {
  // const [searchInput, setSearchInput] = useState("");
  // const [searchValue, setSearchValue] = useState("");

  // const setSearchResults = useSetRecoilState(searchResultsAtom);

  // useDebounce(() => {
  //   setSearchValue(searchInput);
  // }, 1000);

  // useEffect(() => {
  //   const search = async () => {
  //     if (!searchValue) return setSearchResults([]);
  //     const token = localStorage.getItem("token");
  //     try {
  //       const response = await axios.get(
  //         import.meta.env.VITE_SERVER + "/api/user/search?filter=" + searchValue,
  //         {
  //           headers: {
  //             Authorization: token,
  //           },
  //         }
  //       );
  //       setSearchResults(response.data.result);
  //     } catch (err) {
  //       console.error("err :: ", err.message);
  //       setSearchResults([]);
  //     }
  //   };
  //   search();
  // }, [searchValue, setSearchResults]);

  return (
    <form
      className="flex items-center w-1/2"
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   setSearchValue(searchInput);
      // }}
    >
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <FaUserPlus className="text-white" />
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search username or email"
          required
          // onChange={(e) => {
          //   setSearchInput(e.target.value);
          // }}
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
}
