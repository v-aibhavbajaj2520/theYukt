import React from "react";

const Card = ({ index, backgroundImage, title, date, venue, time, buttonText }) => {
  return (
    <div
      className={`event event-${index + 1}`}
      key={index}
      style={{ backgroundImage: backgroundImage }}
    >
    </div>
  );
};

export default Card;
