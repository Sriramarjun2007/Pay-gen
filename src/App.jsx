import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Feature from "./components/Feature";
import Generateslip from "./pages/Generateslip";
import History from "./pages/History";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<>
          <Home />
          <Feature/>
          </>
          } />
        <Route path="/generateslip" element={<Generateslip/>}/>
          <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}

export default App;