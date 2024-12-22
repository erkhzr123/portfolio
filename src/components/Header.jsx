import React, { useState, useEffect } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY;

      // Highlight active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Show header only after reaching the About section
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top + window.scrollY;
        setIsScrolled(scrollPosition >= aboutTop - 50); // Adjust threshold as needed
      }
    };

    // Prevent scrolling when the menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto"; // Reset overflow on cleanup
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 right-0 z-20 w-full md:w-[18%] md:rounded-lg md:backdrop-blur-lg md:bg-[rgba(26,26,26,0.5)] p-4 ${isScrolled ? "opacity-100 visible" : "opacity-0 invisible"} transition-all duration-500 ease-in-out`}>
      <div className="flex justify-between items-center md:justify-end">
        {/* Hamburger Icon for Mobile */}
        <button className="block md:hidden text-gray-300 hover:text-[rgba(255,77,90,0.8)]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div className={`fixed top-0 left-0 w-screen h-screen bg-[rgb(26,26,26)] text-white flex flex-col justify-center items-center space-y-6 py-10 transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"} md:hidden`}>
          {["home", "about", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`text-2xl font-semibold capitalize transition-colors duration-300 ${activeSection === section ? "text-[rgba(255,77,90,0.8)]" : "text-gray-300 hover:text-[rgba(255,77,90,0.8)]"}`}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {section}
            </a>
          ))}

          {/* Close Button */}
          <button onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold text-gray-300 hover:text-[rgba(255,77,90,0.8)] mt-auto border-2 border-[rgba(255,77,90,0.8)] rounded-lg px-6 py-2 transition duration-300 hover:bg-[rgba(255,77,90,0.2)]">
            Close
          </button>
        </div>

        {/* Inline Navigation for Larger Screens */}
        <nav className="hidden md:flex justify-end space-x-6">
          {["home", "about", "projects", "contact"].map((section) => (
            <a key={section} href={`#${section}`} className={`text-lg font-semibold capitalize transition-colors duration-300 ${activeSection === section ? "text-[rgba(255,77,90,0.8)]" : "text-gray-300 hover:text-[rgba(255,77,90,0.8)]"}`}>
              {section}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
