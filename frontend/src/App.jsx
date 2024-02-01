import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';
// import { Routes, Route } from 'react-router-dom'
// import Dashboard from './pages/DashBoard';
// import Login from './pages/Login';
// import Signup from './pages/Signup';

function App() {
  const [data, setData] = useState();
  console.log(data);
  useEffect(() => {
    axios.get(import.meta.env.VITE_SERVER + '/').then((res) => {
      setData(res.data);
    }).catch((err) => {
      setData(err.message);
    });
  },[]);
  return (
    <div className='dark:bg-gray-600'>
      <h1 className='text-5xl text-white'>
        this is data from backend {data ? data : 'loading...'}
      </h1>
      <h2>
        {data ? data : 'loading...'}
      </h2>
      {/* <Routes >
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> */}
    </div>
  )
}

export default App;
