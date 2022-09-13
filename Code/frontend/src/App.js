import React from 'react'
import { BrowserRouter,Routes, Route, Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import About from './pages/About';
import Header from './components/Header.js';




export default function App() {

  
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" index element={<Home/>} />
      <Route path="/add" element={<AddEdit />} />
      <Route path="/update/:id" element={<AddEdit />} />
      <Route path="/view/:id" element={<View/>} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}