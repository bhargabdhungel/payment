import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignupCard() {
  const navigate = useNavigate();
  return (
    <div className="w-1/3 flex justify-center mx-auto my-8 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form
        className="space-y-4 w-5/6"
        onSubmit={async (e) => {
          e.preventDefault();
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
            navigate("/login", { replace: true });
          } catch (err) {
            if (err.response.data) alert(err.response.data.message);
            else alert(err.message);
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
