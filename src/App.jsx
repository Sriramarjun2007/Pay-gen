import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Feature from "./components/Feature";
import Generateslip from "./pages/Generateslip";
import History from "./pages/History";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Howitworks from "./components/Howitworks";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Help from "./pages/Help";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<>
          <Home />
          <Feature/>
          <Howitworks/>
          <Pricing/>
          <Footer/>

          </>
          } />
        <Route path="/generateslip" element={<Generateslip/>}/>
          <Route path="/history" element={<History />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<><Help /><Footer/></>} />

      </Routes>
    </>
  );
}

export default App;