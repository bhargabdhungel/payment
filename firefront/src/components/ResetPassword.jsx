import { useState } from "react";
import LoadingCard from "./LoadingCard";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  if (loading) return <LoadingCard />;
  return (
    <form
      className="w-full flex flex-col gap-6 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          await sendPasswordResetEmail(auth, e.target.email.value);
          setLoading(false);
          alert("Password reset link sent to your email");
          navigate("/login", { replace: true });
        } catch (err) {
          setLoading(false);
          console.log(err.message);
        }
      }}
    >
      <h5 className="text-xl font-medium text-gray-900 dark:text-white">
        Reset Password
      </h5>
      <input
        name="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="email"
        required
        autoComplete="email"
      />
      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Send Reset Link
      </button>
    </form>
  );
}
