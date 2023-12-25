// DivCard.js

import React from "react";
import PropTypes from "prop-types";
import "./divcard.css"; // Import the corresponding CSS file

const DivCard = (props) => {
  const cardStyle = {
    backgroundColor: props.cardColor
  };

  return (
    <div className="div-card" style={cardStyle}>
      <img src={props.img} alt={props.title} className="div-card-image" />
      <div className="div-card-content">
        <h3 className="div-card-title">{props.title}</h3>
        <p className="div-card-text">{props.content}</p>
      </div>
    </div>
  );
};



export default DivCard;
