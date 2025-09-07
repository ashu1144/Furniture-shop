import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import Login from './components/Login'
import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink , useLocation } from 'react-router-dom';



function App() {
  const location = useLocation();

  return (
    <>
     <Routes>
            <Route path="/login" element={<Login></Login>} />
      </Routes>
       {location.pathname !== '/Login'  && <Home />}

    
    </>
  )
}

export default App
