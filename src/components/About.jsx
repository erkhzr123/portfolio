import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen text-white flex flex-col justify-center items-center p-6 bg-[rgb(26,26,26)]">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-5xl md:text-6xl font-bold font-montserrat">About</h2>
        <div className="bg-[rgb(255,77,90)] bg-opacity-80 h-[12px] w-[200px] md:w-[230px] mx-auto mt-2"></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Left Side: Image and Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src="/images/About.png" alt="About Me" className="w-[300px] md:w-[400px] h-auto rounded-lg shadow-lg mb-6" />
          <p className="text-lg md:text-xl text-gray-400">
            Hello! My name is Dimitrije, and I’m a passionate frontend web developer with a love for crafting interactive and visually appealing web applications. With expertise in modern technologies like React and Tailwind CSS, I bring creative ideas to life with clean, efficient code. I enjoy
            learning new technologies and refining my skills every day.
          </p>
        </div>

        {/* Right Side: Skills Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-8">
            {[
              { src: "/images/html-logo.png", name: "HTML" },
              { src: "/images/css-logo.png", name: "CSS" },
              { src: "/images/js-logo.png", name: "JavaScript" },
              { src: "/images/react-logo.png", name: "React" },
              { src: "/images/tailwinds-logo.png", name: "Tailwind CSS" },
              { src: "/images/sass-logo.png", name: "Sass" },
            ].map((skill) => (
              <div key={skill.name} className="relative rounded-lg p-[2px] lg:p-[1px] xl:p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform transition-transform duration-300 hover:scale-[1.1]">
                <div className="bg-gray-900 rounded-lg p-4 lg:p-6 xl:p-8 flex flex-col items-center justify-center h-full">
                  <img src={skill.src} alt={skill.name} className="w-16 h-16 mb-2 lg:w-20 lg:h-20 xl:w-24 xl:h-24" />
                  <p className="text-[14px] leading-[14px] font-[700] font-montserrat text-white lg:text-[16px] lg:leading-[16px] xl:text-[18px] xl:leading-[18px]">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
