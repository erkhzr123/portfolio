import React from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const Contact = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id="contact" className="relative min-h-screen text-white flex flex-col items-center py-16 px-8">
      {/* Particles Background */}
      <Particles
        id="tsparticles-contact"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 50 },
            color: { value: ["#ffffff", "#ff4d5a"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.5,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false },
            },
            size: {
              value: 5,
              random: true,
              anim: { enable: true, speed: 3, size_min: 0.1, sync: false },
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outMode: "out",
              bounce: false,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 400, lineLinked: { opacity: 1 } },
              bubble: { distance: 400, size: 40, duration: 2, opacity: 0.8 },
              repulse: { distance: 100 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="relative text-5xl md:text-6xl font-bold font-montserrat inline-block">
          Contact
          {/* Underline */}
          <span className="absolute left-0 bottom-[-10px] w-[80%] h-[10px] bg-[rgb(255,77,90)]"></span>
        </h2>
      </div>

      {/* Contact Text */}
      <div className="text-center max-w-2xl mb-12">
        <p className="text-lg md:text-xl text-gray-400">Have a question or want to work together? Leave your details, and I'll get back to you as soon as possible.</p>
      </div>

      {/* Contact Form */}
      <form action="https://formsubmit.co/dimitrijebeslac@gmail.com" method="POST" className="max-w-lg w-full bg-transparent flex flex-col gap-8">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold font-montserrat mb-2 text-gray-400">
            Name
          </label>
          <input type="text" id="name" name="name" className="w-full p-3 bg-[rgb(20,20,20)] border-b-2 border-gray-500 text-white focus:outline-none focus:border-[rgb(255,77,90)]" required />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-semibold font-montserrat mb-2 text-gray-400">
            Email
          </label>
          <input type="email" id="email" name="email" className="w-full p-3 bg-[rgb(20,20,20)] border-b-2 border-gray-500 text-white focus:outline-none focus:border-[rgb(255,77,90)]" required />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-semibold font-montserrat mb-2 text-gray-400">
            Message
          </label>
          <textarea id="message" name="message" rows="5" className="w-full p-3 bg-[rgb(20,20,20)] border-b-2 border-gray-500 text-white focus:outline-none focus:border-[rgb(255,77,90)] resize-none" required></textarea>
        </div>

        {/* Submit Button */}
        <div className="relative">
          <button type="submit" className="text-[rgb(255,77,90)] font-bold font-montserrat tracking-widest relative group">
            SUBMIT
            <span className="absolute left-0 bottom-[-5px] w-full h-[2px] bg-[rgb(255,77,90)] group-hover:h-[4px] transition-all duration-300"></span>
          </button>
        </div>

        {/* Hidden Inputs for FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
      </form>
    </section>
  );
};

export default Contact;
