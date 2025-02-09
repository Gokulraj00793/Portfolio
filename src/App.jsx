import React from "react";

import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertice from "./components/Expertice";
import Work from "./components/Work";
import Certification from "./components/Certification";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero id="hero" className="" />
      <About id="about" />
      <Expertice id="expertise" />
      <Certification id="certification" />
      <Work id="work" />
      <Contact id="contact" />
    </>
  );
}

{
  /* <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertice" element={<Expertice />} />
          <Route path="/work" element={<Work />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router> */
}
