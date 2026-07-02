import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Feature from "./components/Feature";
import Generateslip from "./pages/Generateslip";
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
      </Routes>
    </>
  );
}

export default App;