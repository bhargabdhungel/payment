import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Picture from "./Picture";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../store/user";
import useOutsideClick from "../hooks/useOutsideClick";

export default function Avatar() {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userAtom);
  const detailsRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClick(detailsRef, () => {
    setIsOpen(false);
  });

  const name = user.name;
  const username = user.username;
  return (
    <div className="relative" ref={detailsRef}>
      <Picture
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      />
      <div
        id="dropdownAvatar"
        className={`z-10 absolute right-2 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-800 dark:divide-gray-500 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>{name}</div>
          <div className="font-medium truncate">{username}</div>
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
          {auth.currentUser ? (
            <a
              className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              onClick={async () => {
                setIsOpen(false);
                try {
                  await auth.signOut();
                  setUser({
                    name: null,
                    email: null,
                    photoURL: null,
                    metadata: null,
                    username: null,
                    uid: null,
                  });
                  navigate("/", { replace: true });
                } catch (err) {
                  console.error(err.message);
                }
              }}
            >
              Sign out
            </a>
          ) : (
            <a
              className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              onClick={() => {
                setIsOpen(false);
                navigate("/login", { replace: true });
              }}
            >
              Sign in
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
