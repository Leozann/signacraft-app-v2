// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/styles/App.scss'

// import all components
import MainPage from './pages/MainPage'
// import SignatureInputForm from "./layout/app/SignatureInputForm";
import StartButton from "./layout/app/StartButton";
import SignatureX from "./layout/app/SignatureX";

function App() {
  // routes configuration
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}> {/* nested routes */}
          <Route path="/" element={<StartButton/>} />
          <Route path="/signature" element={<SignatureX/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
