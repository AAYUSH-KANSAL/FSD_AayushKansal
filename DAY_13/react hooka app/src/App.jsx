import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Login from './components/Login';
import Register from './components/Register';
import DashBoard from './components/DashBoard';
import Logout from './components/Logout';

const App = () => {
  const [data, setData] = useState(null); // Initialize with null or an empty object

  return (
    <div>
      {/* Optionally, you can display the user data */}
      <div>{data ? JSON.stringify(data) : 'No user logged in'}</div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="login" element={<Login regLogin={setData} />} />
            <Route path="register" element={<Register regData={setData} />} />
          </Route>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
