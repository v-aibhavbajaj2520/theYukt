import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const StatsSection = () => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    setStartCounting(true);
  }, []);

  return (
    <section className="stats-section">
      <div className="stat-item">
        <div className="stat-icon">
          <span role="img" aria-label="Registrations">👤</span>
        </div>
        <h2>
          {startCounting && <CountUp start={0} end={800} duration={3} />}+
        </h2>
        <p>Registrations</p>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <span role="img" aria-label="Attendees">👨‍💻</span>
        </div>
        <h2>
          {startCounting && <CountUp start={0} end={200} duration={3} />}+
        </h2>
        <p>Attendees</p>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <span role="img" aria-label="Colleges">🏛️</span>
        </div>
        <h2>
          {startCounting && <CountUp start={0} end={30} duration={3} />}+
        </h2>
        <p>Colleges</p>
      </div>
    </section>
  );
};

export default StatsSection;
