import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { searchResultAtom, searchValueAtom} from "../store/user";
import { FaUserPlus } from "react-icons/fa";
import { showSearchResultsAtom } from "../store/state";
import { useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

export default function Dashboard() {
  const [showSearchResult, setShowSearchResult] = useRecoilState(
    showSearchResultsAtom
  );
  const setSearchValue = useSetRecoilState(searchValueAtom);
  const res = useRecoilValue(searchResultAtom);
  const resultRef = useRef();

  useOutsideClick(resultRef, () => {
    setShowSearchResult(false);
    setSearchValue("");
  });

  const name = res.name;
  const username = res.username;
  const shortName = name
    ?.split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <>
      {showSearchResult && (
        <div
          ref={resultRef}
          className="w-1/3 z-20 absolute top-0 mt-2 p-4 border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="flex items-center rounded-xl">
            <div className="relative cursor-pointer inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {shortName}
              </span>
            </div>
            <div className="flex-1 min-w-0 ms-4">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {name}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {username}
              </p>
            </div>
            <FaUserPlus
              className="text-white"
              onClick={() => {
                console.log("clicked");
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
