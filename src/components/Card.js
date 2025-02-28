import React from "react";

const Card = ({ index, backgroundImage }) => {
  return (
    <a 
      href="https://forms.gle/HGkMqFUbbyHhgLM17" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div
        className={`event event-${index + 1}`}
        key={index}
        style={{ backgroundImage: backgroundImage }}
      > 
      </div>
    </a>
  );
};

export default Card;
