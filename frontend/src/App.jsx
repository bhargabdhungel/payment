import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/DashBoard';
import Navbar from './components/Navbar';
import LoginCard from './components/LoginCard';
import SignupCard from './components/SignupCard';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-start">
      <Navbar />
      <div className="dark:bg-gray-700 grow flex justify-center items-center">
        <Routes >
          <Route path="/" element={<Dashboard/>} />
          <Route path="/login" element={<LoginCard />} />
          <Route path="/signup" element={<SignupCard />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
