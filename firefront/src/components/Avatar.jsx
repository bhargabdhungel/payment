import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Picture from "./Picture";
import { useState } from "react";

export default function Avatar() {
  // const name = auth.currentUser.displayName;
  // const email = auth.currentUser.email;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const name = "bhargab dhungel";
  const email = "bhargabdhungel@gmail.com";
  return (
    <div className="relative">
      {/* <button
        id="dropdownUserAvatarButton"
        data-dropdown-toggle="dropdownAvatar"
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        type="button"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="user photo"
        />
      </button> */}
      <Picture
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      />
      {/* Dropdown menu */}
      <div
        id="dropdownAvatar"
        className={`z-10 absolute right-2 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-800 dark:divide-gray-500 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>{name}</div>
          <div className="font-medium truncate">{email}</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownUserAvatarButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Transactions
            </a>
          </li>
        </ul>
        <div className="py-2">
          <a
            className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            onClick={async () => {
              setIsOpen(false);
              try {
                await auth.signOut();
                navigate("/login", { replace: true });
              } catch (err) {
                console.error(err);
              }
            }}
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
}
