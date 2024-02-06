import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import LoadingCard from "./LoadingCard";

export default function LoginCard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  if (loading) return <LoadingCard />;
  return (
    <div className="mx-auto my-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form
        className="space-y-6"
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          const data = {
            emailOrUsername: e.target.emailOrUsername.value,
            password: e.target.password.value,
          };
          try {
            await signInWithEmailAndPassword(
              auth,
              data.emailOrUsername,
              data.password
            );
            setLoading(false);
            navigate("/", { replace: true });
          } catch (err) {
            setLoading(false);
            console.log(err.message);
          }
        }}
      >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign in
        </h5>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email or UserName
          </label>
          <input
            name="emailOrUsername"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="email or username"
            required
            autoComplete="username"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                // checked = {remember}
                defaultChecked={true}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                // onChange={() => setRemember(!remember)}
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <a
            className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500 cursor-pointer"
            onClick={() => {
              navigate("/reset");
            }}
          >
            Lost Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login to your account
        </button>
        <div
          className="w-full text-black cursor-pointer bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-200 dark:hover:bg-gray-400 dark:focus:ring-blue-800"
          onClick={async () => {
            try {
              await signInWithPopup(auth, provider);
              navigate("/", { replace: true });
            } catch (err) {
              console.log(err.message);
            }
          }}
        >
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="google"
            className="inline-block me-2"
          />
          Continue with Google
        </div>

        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{" "}
          <a
            className="text-blue-700 hover:underline dark:text-blue-500 cursor-pointer"
            onClick={() => {
              navigate("/signup", { replace: true });
            }}
          >
            Create account
          </a>
        </div>
      </form>
    </div>
  );
}
