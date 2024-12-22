import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; // Import Contact

function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <About />
        <Projects />
        <Contact /> {/* Add Contact Section */}
      </main>
    </div>
  );
}

export default App;
