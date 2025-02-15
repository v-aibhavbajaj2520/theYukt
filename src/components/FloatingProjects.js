import React, { useState, useRef } from "react";
import "./FloatingProjects.css";
import SkyGenTech from "../assets/SkyGenTech.png";
import Mosaic from "../assets/Mosaic.png";

const projects = [
  { title: "Sky Gen Tech", description: "Created a Full Stack responsive website.", img: SkyGenTech },
  { title: "Mosaic IILM", description: "It is the Culture fest of IILM, We made website for that", img: Mosaic },
  { title: "GDG IILM Website", description: "Created Website for GDG IILM.", img: "https://via.placeholder.com/300" },
];

const FloatingProjects = () => {
  const handleViewAll = () => {
    // Naye window mein projects page kholo
    window.open("/projects", "_blank");
  };
  // Naya page banane ke liye component
  const ProjectsPage = () => {
    const [filter, setFilter] = useState('all');
    
    const allProjects = [
      { 
        title: "Sky Gen Tech", 
        description: "Created a Full Stack responsive website.", 
        img: SkyGenTech,
        type: "ai"
      },
      { 
        title: "Mosaic IILM", 
        description: "It is the Culture fest of IILM, We made website for that", 
        img: Mosaic,
        type: "web"
      },
      { 
        title: "GDG IILM Website", 
        description: "Created Website for GDG IILM.", 
        img: "https://via.placeholder.com/300", 
        type: "security"
      },
      {
        title: "E-commerce Platform",
        description: "Full-featured online store solution",
        img: "https://via.placeholder.com/300",
        type: "web"
      },
      {
        title: "AI Chatbot",
        description: "Intelligent customer support bot",
        img: "https://via.placeholder.com/300",
        type: "ai"  
      }
    ];

    const filteredProjects = filter === 'all' 
      ? allProjects
      : allProjects.filter(project => project.type === filter);

    return (
      <div className="container-1">
        <h1 className="title">All Projects</h1>
        
        <div style={{marginBottom: "30px"}}>
          <button 
            onClick={() => setFilter('all')}
            style={{
              padding: "8px 16px",
              margin: "0 10px",
              backgroundColor: filter === 'all' ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            All
          </button>
          <button
            onClick={() => setFilter('web')}
            style={{
              padding: "8px 16px", 
              margin: "0 10px",
              backgroundColor: filter === 'web' ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.2)", 
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Web
          </button>
          <button
            onClick={() => setFilter('ai')}
            style={{
              padding: "8px 16px",
              margin: "0 10px", 
              backgroundColor: filter === 'ai' ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            AI
          </button>
          <button
            onClick={() => setFilter('security')}
            style={{
              padding: "8px 16px",
              margin: "0 10px",
              backgroundColor: filter === 'security' ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)", 
              color: "white",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Security
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container-1">
      <h1 className="title">Our Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <button 
        onClick={handleViewAll}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "rgba(255,255,255,0.1)",
          color: "white",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "30px",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.2)"}
        onMouseOut={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.1)"}
      >
        View All Projects
      </button>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0, scale: 1 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // Increased tilt intensity
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

    setTilt({ x, y, scale: 1.1 }); // Instant effect, no smoothing
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, scale: 1 });
  };

  return (
    <div
      ref={cardRef}
      className="floating-card"
      style={{
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${tilt.scale})`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={project.img} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
};

export default FloatingProjects;
