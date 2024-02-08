import { useState } from "react";
import LoadingCard from "./LoadingCard";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { useRecoilState} from "recoil";
import { userAtom } from "../store/user";

export default function SetUsername() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useRecoilState(userAtom);
  if (loading) return <LoadingCard />;
  return (
    <form
      className="w-full flex flex-col gap-6 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const username = e.target.username.value;
          const validateUsername = (username) => {
            // should only contain letters numbers and underscores
            const re = /^[A-Za-z0-9_]+$/;
            return !re.test(username);
          };
          if (validateUsername(username)) {
            setLoading(false);
            alert("Username is not valid");
            return;
          }

          const docRef = doc(db, "users", user.uid);
          await setDoc(docRef, {
            username: username,
            name : user.name,
            friends: [],
          });

          // setUsername(data.username);

          setUser({ ...user, username: username });
          setLoading(false);
          navigate("/", { replace: true });
          // await sendPasswordResetEmail(auth, e.target.email.value);
          // setLoading(false);
          // alert("Password reset link sent to your email");
          // navigate("/login", { replace: true });
        } catch (err) {
          setLoading(false);
          console.log(err.message);
        }
      }}
    >
      <h5 className="text-xl font-medium text-gray-900 dark:text-white">
        Enter Your UserName
      </h5>
      <input
        name="username"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="username"
        required
        autoComplete="username"
      />
      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Continue
      </button>
    </form>
  );
}
