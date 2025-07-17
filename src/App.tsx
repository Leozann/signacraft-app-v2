import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/styles/App.scss';

// import all components
import MainPage from './pages/MainPage';
import StartButton from "./layout/app/StartButton";
import SignatureX from "./layout/app/SignatureX";
// import SignatureKeyPage from "./pages/SignatureKeyPage";

function App() {
  // routes configuration
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}> {/* nested routes */}
          <Route index element={<StartButton/>} />
          <Route path="/signature" element={<SignatureX/>} />
        </Route>
        {/* <Route path="/admin/signature-key" element={<SignatureKeyPage/>} /> */}
      </Routes>
    </Router>
  )
}

export default App;
