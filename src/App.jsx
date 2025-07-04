import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
          <Skills />
        <PortFolio />
      
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
