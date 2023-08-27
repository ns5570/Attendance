import React from 'react'
import Login from './pages/Login'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  return (
    // <div>
    //   <Login />
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/a' element={<Dashboard />}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App