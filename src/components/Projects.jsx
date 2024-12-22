import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern online store with a responsive design.",
      image: "/images/e-commerce.png",
      align: "left",
      link: "https://orthoshoptosic.netlify.app/",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my work and skills.",
      image: "/images/portfolio.png",
      align: "right",
      link: null, // No link for this project
    },
    {
      id: 3,
      title: "Task Manager",
      description: "A simple yet powerful task management tool.",
      image: "/images/taskmanager.png",
      align: "left",
      link: null, // No link for this project
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-[rgb(20,20,20)] text-white flex flex-col items-center py-16 px-8">
      {/* Section Header */}
      <div className="text-center mb-[100px] mt-[140px]">
        <h2 className="text-5xl md:text-6xl font-bold font-montserrat">Projects</h2>
        <div className="bg-[rgb(255,77,90)] bg-opacity-80 h-[12px] w-[300px] md:w-[330px] mx-auto mt-4"></div>
      </div>

      <div className="flex flex-col gap-20 max-w-7xl w-full">
        {projects.map((project, index) => (
          <div key={project.id} className={`flex flex-col md:flex-row ${project.align === "right" ? "md:flex-row-reverse" : ""} items-center gap-12 px-8`}>
            {/* Screenshot */}
            <div className="flex-shrink-0 w-full md:w-1/2">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block transition-transform duration-300 hover:scale-105">
                  <img src={project.image} alt={project.title} className="w-full h-[300px] object-cover rounded-lg shadow-lg" />
                </a>
              ) : (
                <img src={project.image} alt={project.title} className="w-full h-[300px] object-cover rounded-lg shadow-lg" />
              )}
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h3 className="text-4xl font-bold font-montserrat mb-6">{project.title}</h3>
              <p className="text-xl text-gray-400 leading-relaxed">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
