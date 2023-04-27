// CardProject.js

import React from 'react';
import './CardProject.css';

const CardProject = ({ imageSrc, heading, subHeading, description }) => {
  return (
    <div className='CardContainer'>
        <div className="CardProjectContainer">
        <div className="ImageContainer">
            <div className="ImageSquare">
            <img src={imageSrc} alt={heading} className="Image" />
            </div>
        </div>
        <div className="DescriptionContainer">
            <h2 className="Heading">{heading}</h2>
            <h3 className="SubHeading">{subHeading}</h3>
            <p className="Description">{description}</p>
        </div>
        </div>
    </div>
  );
};

export default CardProject;
