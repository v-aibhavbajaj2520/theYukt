import React, { useState, useEffect } from "react";
import ".//App.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin  } from "react-icons/fa";
import EventContainer from "./components/EventContainer";
import StatsSection from "./components/StatsSection";
import { EVENTS, SPONSOR } from "./config/constants";
import menuIcon from "./assets/menu.png";
import closeIcon from "./assets/close.png";
import Sponsor from "./components/Sponsor";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
// import Glassmorphism from "./components/Glassmorphism";
import FloatingProjects from "./components/FloatingProjects";




function App() {

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
          <a href="#about">Services</a>
          <a href="#sponsor">Projects</a>
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

      
        <section className="expertis">
        <h1 className="expertise-title">Our Expertise</h1>
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
      

      <section className="projects-section">
        <FloatingProjects/>
      </section>

      <div className="timeline-section">
          <h1>What Sets Us Apart</h1>
          <div className="timeline">
            <div className="timeline-item">
            <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="right-timeline">One-Stop Solution</h3>
                <p className="right-timeline">
                No need to hire multiple freelancers. We handle web & app development, UI/UX design, and video editing all in one place!
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>

              <div className="timeline-content">
                <h3 className="left-timeline">Expert Team, Hassle-Free Execution</h3>
                <p className="left-timeline">
                We carefully handpick skilled developers, designers, and editors to ensure high-quality results while you focus on your business.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="right-timeline">Cost-Effective & Flexible Pricing</h3>
                <p className="right-timeline">
                Affordable packages with customized pricing based on your project needs whether a startup or an enterprise.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="left-timeline">On-Time Project Delivery</h3>
                <p className="left-timeline">
                Strict timelines and structured workflow to ensure your project is delivered on time, every time!
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="left-timeline">Seamless Communication & Support</h3>
                <p className="left-timeline">
                Get regular updates and direct communication with a dedicated project manager for a smooth experience
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="left-timeline">Scalable & Future-Proof Solutions</h3>
                <p className="left-timeline">
                We build modern, scalable solution tech limitations. your business can grow without tech limitations.
                </p>
              </div>
            </div>
          </div>
        </div> 

        {/* Contact Us */}
        <div className="contact-container">
          <div className="b-card">
            <div className="upper-inp" id="upper-1">
              <div className="input-det">
                <label>First Name</label>
                <input type="text"></input>
              </div>

              <div className="input-det">
                <label>Last Name</label>
                <input type="text"></input>
              </div>
            </div>

            <div className="upper-inp" id="upper-2">
              <div className="input-det">
                <label>Email</label>
                <input type="text"></input>
              </div>

              <div className="input-det">
                <label>Phone Number</label>
                <input type="text"></input>
              </div>
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
            <div className="in-s-card">
              <h2>Contact Information</h2>
              <h3>Say something to start a chat</h3>
              
              <div className="contact-info">
                <div className="type-fills">
                <BsFillTelephoneFill /><h4>+91 8486964047</h4>
                </div>
                <div className="type-fills">
                <MdMailOutline /><h4>info.vbajaj@gmail.com</h4>
                </div>
                <div className="type-fills">
                <FaLocationDot /><h4>Uttar Pradesh</h4>
                </div>
                
                
                </div>

                <div className="social-links">
                <a href=""><FaTwitter/></a>  
                <a href="https://www.instagram.com/"><FaInstagram/></a>  
                <a href="https://www.linkedin.com/company/the-yukt/"><FaLinkedin/></a>  
                </div>
              </div>
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
