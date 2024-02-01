import { useRecoilValue } from "recoil";
import { userDataAtom } from "../store/user";

export default function Avatar() {
  const userData = useRecoilValue(userDataAtom);
  const name = userData?.name;

  if (!name) {
    return (
      <div className="relative cursor-pointer w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <svg
          className="absolute w-12 h-12 text-gray-400 -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
            />
        </svg>
      </div>
    );
  }
  const shortName = name.split(" ").map((word) => word[0]).join("").toUpperCase();
  if (name) {
    return (
      <div className="relative cursor-pointer inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">{shortName}</span>
      </div>
    );
  }
}
