import { useRecoilValue } from "recoil";
import { searchResultsAtom } from "../store/user";
import AddUser from "./AddUser";

export default function SearchResultsCard() {
  const searchResults = useRecoilValue(searchResultsAtom);
  return (
    <div className="w-1/3 z-20 absolute top-0 mt-2 p-4 border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
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
                  <AddUser username={result.username} name = {result.name}/>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
