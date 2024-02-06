// import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";
import LoadingCard from "./LoadingCard";
import LoginCard from "./LoginCard";

export default function Dashboard() {
  const { user, loading } = useAuth();
  // const addData = async () => {
  //   try {
  //     const docRef = await addDoc(collection(db, "users"), {
  //       username: "bhargabdhungel",
  //       email: "bhargabdhungel@gmail.com",
  //       isCoding: true,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  // addData();

  // const docRef = doc(db, "users", "PZINZcvho3lWdJ2qRQd7");
  // console.log(docRef);

  // .......................................................................................
  // const readData = async () => {
  //   try {
  //     const snap = await getDocs(collection(db, "users"));
  //     snap.forEach((doc) => {
  //       console.log(doc.id, " => ", doc.data());
  //     });
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  // readData();

  // const docRef = doc(db, "users", "PZINZcvho3lWdJ2qRQd7");
  // console.log(docRef);

  // const collectionRef = collection(db, "users");
  // console.log(collectionRef);

  // const addData = async () => {
  //   try {
  //     const docRef = await addDoc(collection(db, "users"), {
  //       username: "bhargabdhungel",
  //       email: "lkjasfj",
  //       isCoding: true,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  // addData();

  if (loading) return <LoadingCard />;
  if (!user) return <LoginCard />;
  return (
    <div>
      <h1>hi</h1>
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
      {/* Dropdown menu */}
      {/* <div
        id="dropdownAvatar"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>Bonnie Green</div>
          <div className="font-medium truncate">name@flowbite.com</div>
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
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-2">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div> */}
    </div>
  );
}
