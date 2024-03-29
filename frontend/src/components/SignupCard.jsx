import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingCard from "./LoadingCard";

export default function SignupCard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  if (loading) return <LoadingCard />;
  return (
    <div className="mx-auto my-auto w-full flex justify-center max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form
        className="space-y-4 w-5/6"
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          const data = {
            name: e.target.name.value,
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
          };
          try {
            const response = await axios.post(
              import.meta.env.VITE_SERVER + "/api/user/signup",
              data
            );
            alert(response.data.message);
            setLoading(false);
            navigate("/login", { replace: true });
          } catch (err) {
            if (err.response.data) alert(err.response.data.message);
            else alert(err.message);
            setLoading(false);
          }
        }}
      >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign up
        </h5>
        <div>
          <label className="block text-sm mb-1 font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Alice"
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            UserName
          </label>
          <input
            type="text"
            name="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="aliceandbob"
            autoComplete="username"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="alice@bob.com"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            autoComplete="current-password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Account
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Already Registered?{" "}
          <a
            className="text-blue-700 hover:underline dark:text-blue-500 cursor-pointer"
            onClick={() => {
              navigate("/login", { replace: true });
            }}
          >
            Login
          </a>
        </div>
      </form>
    </div>
  );
}
