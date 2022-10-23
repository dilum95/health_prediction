import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.js'
import SignUp from './components/signup.js'
import Home from './pages/Home';
import Diabities from './pages/Diabities';
import Ckd from './pages/Ckd';
import Heart from './pages/Heart';
import History from './pages/History';
import Dependent from './pages/Dependent';
import Settings from './pages/Settings';
import Image from './pages/Image';
import Common from './pages/Common';
import Navigate_CKD from './pages/Navigate_CKD';
import Navigate_Common from './pages/Navigate_Common';
import Navigate_Diabities from './pages/Navigate_Diabities';
import Navigate_Heart from './pages/Navigate_Heart';



function App() {
  return (
    <Router>
      <div className="App">
       
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} /> 
              <Route path="/home" index element={<Home/>} />
              <Route path="/history/:id" element={<History/>} />
              <Route path="/dependent_list/:id" element={<Dependent/>} />
              <Route path="/settings/:id" element={<Settings/>} />
              <Route path="/image/:id" element={<Image/>} />
              <Route path="/diabities" element={<Diabities/>} />
              <Route path="/ckd" element={<Ckd/>} />
              <Route path="/heart" element={<Heart/>} />
              <Route path="/common" element={<Common/>} />
              <Route path="/n_ckd" element={<Navigate_CKD/>} />
              <Route path="/n_common" element={<Navigate_Common/>} />
              <Route path="/n_diabiies" element={<Navigate_Diabities/>} />
              <Route path="/n_heart" element={<Navigate_Heart/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App