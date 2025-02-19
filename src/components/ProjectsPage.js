import React, { useState } from "react";
import "./ProjectsPage.css";
import SkyGenTech from "../assets/SkyGenTech.png";
import Mosaic from "../assets/Mosaic.png";

const allProjects = [
  { title: "Sky Gen Tech", description: "Created a Full Stack responsive website.", img: SkyGenTech, type: "ai" },
  { title: "Mosaic IILM", description: "Culture fest of IILM, We made website for that", img: Mosaic, type: "web" },
  { title: "GDG IILM Website", description: "Created Website for GDG IILM.", img: "https://via.placeholder.com/300", type: "security" },
  { title: "E-commerce Platform", description: "Full-featured online store solution", img: "https://via.placeholder.com/300", type: "web" },
  { title: "AI Chatbot", description: "Intelligent customer support bot", img: "https://via.placeholder.com/300", type: "ai" }
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" ? allProjects : allProjects.filter(p => p.type === filter);

  return (
    <div className="container-1">
      <h1 className="title">All Projects</h1>
      <div className="filters">
        {["all", "web", "ai", "security"].map(category => (
          <button 
            key={category} 
            onClick={() => setFilter(category)} 
            className={filter === category ? "active-filter" : ""}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
