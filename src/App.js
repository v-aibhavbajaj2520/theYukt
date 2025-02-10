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

  useEffect(() => {
    const targetDate = new Date("2025-02-28T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h2>H25</h2>
        </div>
        <div className={`nav-links ${isNavOpen ? "active" : ""}`}>
          <a href="#team">Team</a>
          <a href="#themes">Themes</a>
          <a href="#sponsor">Sponsor Us</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <button className="register-btn">REGISTER NOW</button>
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
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-image"></div>
          <div className="hero-content">
            <h1>Hackathon 2025</h1>
            <p className="date">February 28, 2025 — March 1, 2025</p>
            <h3>Code - Compete - Conquer</h3>
            <p className="description">
              Tech for Good: Empowering communities for a Better Tomorrow
            </p>
            <div className="countdown-container">
              <h2 className="countdown-title">Live in</h2>
              <div className="countdown-wrapper">
                <div className="countdown-box">
                  <div className="countdown-value">{countdown.days}</div>
                  <div className="countdown-label">days</div>
                </div>
                <div className="countdown-box">
                  <div className="countdown-value">{countdown.hours}</div>
                  <div className="countdown-label">hours</div>
                </div>
                <div className="countdown-box">
                  <div className="countdown-value">{countdown.minutes}</div>
                  <div className="countdown-label">mins</div>
                </div>
                <div className="countdown-box">
                  <div className="countdown-value">{countdown.seconds}</div>
                  <div className="countdown-label">secs</div>
                </div>
              </div>
            </div>
            <button className="register-btn">REGISTER</button>
          </div>
        </div>

        {/* Stats Section */}
        <StatsSection />

        {/* Sponsor Section */}
        <Sponsor heading={"Sponsors"} dataArray={SPONSOR} />

        {/* Why Participate Section */}
        <div className="how-it-works">
          <h2>Why Participate in a Hackathon?</h2>
          <p>
            Unleash your creativity, build innovative projects, and collaborate
            with like-minded problem solvers. Whether you're a beginner or a
            pro, hackathons give you the chance to innovate by turning ideas
            into reality, learn from cutting-edge tech and expert mentors,
            network with developers, designers, and industry leaders, and win
            exciting prizes and recognition. Ready to build and innovate?
            Register now and make an impact.
          </p>
        </div>

        {/* Event Container Section */}
        <EventContainer heading={"Our Theme"} dataArray={EVENTS} />

        {/* Timeline Section */}
        <div className="timeline-section">
          <h2>Timeline</h2>
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
