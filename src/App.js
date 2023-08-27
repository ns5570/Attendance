import React from 'react';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
      {/* Closing the Dashboard component tag */}
    </BrowserRouter>
  );
}

export default App;
