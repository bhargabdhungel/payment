import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/DashBoard';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className='dark:bg-gray-600'>
      <Routes >
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App;
