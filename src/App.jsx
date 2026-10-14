import { useState } from "react";
import SocialLinks from "./components/SocialLinks";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#0f172a" : "#f8fafc",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
      }}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
