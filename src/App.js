import React, { useState, useEffect } from "react";
import "./App.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import EventContainer from "./components/EventContainer";
import StatsSection from "./components/StatsSection";
import { EVENTS, SPONSOR } from "./config/constants";
import menuIcon from "./assets/menu.png";
import closeIcon from "./assets/close.png";
import Sponsor from "./components/Sponsor";

function App() {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };


  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src=''/>
        </div>
        <div className={`nav-links ${isNavOpen ? "active" : ""}`}>
          <a href="#team">Home</a>
          <a href="#themes">About Us</a>
          <a href="#sponsor">Service</a>
          <a href="#about">Careers</a>
        </div>
        <div>
          <button className="register-btn">Get a Free Quote</button>
        </div>
        <button className="nav__button" onClick={handleNavToggle}>
          <img
            src={isNavOpen ? closeIcon : menuIcon}
            alt={isNavOpen ? "Close Menu" : "Open Menu"}
            width="25"
            height="25"
          />
        </button>
      </nav>

      {/* Main Content */}
      <main className="main-content">
          <div className="hero-content">
            <h1>"Yukt- Many minds, one masterpiece"</h1>
        </div>

        
      </main>
      <div className="about-us">
        <h1 className="about-title">About Us</h1>
        <section className="about-content">
        <p>Yukt delivers web & app development,<br/> UI/UX design, video editing, and<br/> software solutions with innovation and<br/> precision.<br/>
        “Your Vision, Our Team"</p>
        <iframe src="youtube.com"></iframe>
        </section>
      </div>

      <div className="expertise">
        <h1 className="expertise-title">Our Expertise</h1>
        <section>
          <div className="expertise">
            <div className="expertise-content">
              <div className="mid-logo">
                <img src="logo.jpeg"></img>
              </div>

                <div className="circles circle-1">
                  <h3>UI/UX<br/>Designing</h3>
                </div>
                <div className="circles circle-2">
                  <h3>Web<br/>Development</h3>
                </div>
                <div className="circles circle-3">
                  <h3>App <br/>Development</h3>
                </div>
                <div className="circles circle-4">
                  <h3>Graphic<br/>Designing</h3>
                </div>

            </div>
            
          </div>
        </section>
      </div>
      <div className="timeline-section">
          <h1>What Sets Us Apart</h1>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">28 February 2025</div>
              <div className="timeline-content">
                <h3 className="right-timeline">Track Release</h3>
                <p className="right-timeline">
                  Get ready to innovate! On January 1, we’ll unveil the
                  hackathon tracks, each designed to spark creativity and tackle
                  real-world challenges. Gear up to choose your path and make a
                  difference!
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">1 March 2025</div>
              <div className="timeline-content">
                <h3 className="left-timeline">Rolling Acceptance Idea Submission</h3>
                <p className="left-timeline">
                  Submit your innovative ideas early, as we have limited seats!
                  We’re reviewing submissions as they come in, and you’ll be
                  notified about your selection status within 36 hours. Don’t
                  miss this opportunity!
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">28 February 2025</div>
              <div className="timeline-content">
                <h3 className="right-timeline">Track Release</h3>
                <p className="right-timeline">
                  Get ready to innovate! On January 1, we’ll unveil the
                  hackathon tracks, each designed to spark creativity and tackle
                  real-world challenges. Gear up to choose your path and make a
                  difference!
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">1 March 2025</div>
              <div className="timeline-content">
                <h3 className="left-timeline">Rolling Acceptance Idea Submission</h3>
                <p className="left-timeline">
                  Submit your innovative ideas early, as we have limited seats!
                  We’re reviewing submissions as they come in, and you’ll be
                  notified about your selection status within 36 hours. Don’t
                  miss this opportunity!
                </p>
              </div>
            </div>
          </div>
        </div> 
        <div className="contact-container">
          <div className="b-card">
            <div className="input-det">
              <label>First Name</label>
              <input type="text"></input>
            </div>

            <div className="input-det">
              <label>Last Name</label>
              <input type="text"></input>
            </div>

            <div className="input-det">
              <label>Email</label>
              <input type="text"></input>
            </div>

            <div className="input-det">
              <label>Phone Number</label>
              <input type="text"></input>
            </div>

            <div className="text-det">
              <label>Write your message</label>
              <textarea type="text"></textarea>
            </div>

            <div className="send-message">
            <button type="submit">Send Message</button>
            </div>
          </div>
          <div className="s-card">
            <h2>Contact Information</h2>
            <h3>Say something to start a chat</h3>
            <img src="aa"></img><h4>+91 8486964047</h4>
            <img src="aa"></img><h4>info.vbajaj@gmail.com</h4>
            <img src="aa"></img><h4>Delhi</h4>

            <img src="aa"></img>
            <img src="aa"></img>
            <img src="aa"></img>
              </div>
          
        </div>
      
      <hr className="hori-line"></hr>
      <footer>
        <div className="left-side">
        <h3>Reach Us</h3>
        <img src="aa"></img><h4>+91 8486964047</h4>
            <img src="aa"></img><h4>info.vbajaj@gmail.com</h4>
            <img src="aa"></img><h4>Delhi</h4>
        </div>

        <div className="mid-side">
        <h3>Company</h3>
          <h4>About</h4>
          <h4>Contact Us</h4>
          <h4>Careers</h4>
        </div>

        <div className="right-side">
        <h3>Quick Links</h3>
          <a><h4>InstaGram</h4></a>
          <a><h4>Linkedin</h4></a>
          <a><h4>Twitter</h4></a>
        </div>
        
      </footer>

    </div>
    
  );
}

export default App;
