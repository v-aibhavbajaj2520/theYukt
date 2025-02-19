import React from "react";
import Card from "./CardSponsor";
import CardSponsor from "./CardSponsor";

const Sponsor = ({ heading, dataArray }) => {
  return (
    <section id="events1" className="events-section1">
        <h2>{heading}</h2>
      <div className="events-slider1">
        <div className="events-container1">
          {dataArray.map((event, index) => (
            <CardSponsor
              key={index}
              backgroundImage={event.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
