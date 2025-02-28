import React from "react";
import Card from "./Card";

const EventContainer = ({ heading, dataArray }) => {
  return (
    <section id="events" className="events-section">
      <h2>{heading}</h2>
      <div className="events-slider">
        <div className="events-container">
          {dataArray.map((event, index) => (
            <Card
              key={index}
              backgroundImage={event.backgroundImage}
              registerLink="https://forms.gle/HGkMqFUbbyHhgLM17"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventContainer;
