import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginCard from "./components/LoginCard";
import Dashboard from "./components/Dashboard";
import SignupCard from "./components/SignupCard";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <div className="flex flex-col min-h-screen h-auto dark:bg-gray-700">
      <Navbar />
      <div className="flex grow justify-center flex-col items-center relative">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginCard />} />
          <Route path="/signup" element={<SignupCard />} />
          <Route path="/reset" element={<ResetPassword />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
