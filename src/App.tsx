import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import Services from "./pages/Services.tsx";
import Values from "./pages/Values.tsx";
import Questions from "./pages/Questions.tsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/values" element={<Values />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
