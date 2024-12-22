import React from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const HeroSection = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesOptions = {
    fullScreen: { enable: false },
    background: {
      color: { value: "#000000" },
    },
    particles: {
      number: {
        value: 50,
      },
      color: {
        value: ["#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1", "#955251"],
      },
      shape: {
        type: ["circle", "triangle", "polygon"],
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      size: {
        value: { min: 3, max: 7 },
        random: true,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.5,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
  };

  return (
    <div id="home" className="relative w-full h-screen bg-black flex flex-col justify-center items-center text-white overflow-hidden">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute top-0 left-0 w-full h-full z-10" />
      <div className="relative z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-montserrat" style={{ fontWeight: 300 }}>
          Hello, I'm <span style={{ color: "rgb(255, 77, 90)", fontWeight: 600 }}>Dimitrije</span>.
          <br />
          I'm a frontend web developer.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-6">Building Modern and Interactive Web Experiences</p>
        <a href="#about" className="inline-flex items-center px-6 py-3 border border-[rgb(255,77,90)] text-[rgb(255,77,90)] rounded font-montserrat text-[24px] leading-normal font-medium relative hover:animate-vibration-pulse transition duration-300">
          View My Work
          <span className="ml-2 animate-bounce">↓</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
