import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

import Navbar from "./layout/Navbar";
import { HeroSection } from "./layout/Home/Hero";
import { Footer } from "./layout/Footer";
import { Works } from "./layout/Trabalhos/Works";


function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<HeroSection></HeroSection>}></Route>
          <Route path="/trabalhos" element={<Works></Works>}></Route>

        </Routes>
        <Footer></Footer>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
