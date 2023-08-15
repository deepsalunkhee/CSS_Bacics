import React, { useState } from 'react';
import './Container1.css';

const Container1 = () => {
  const [ballColor, setBallColor] = useState('orange');
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const newX = e.clientX; // Adjust for ball's radius
    const newY = e.clientY; // Adjust for ball's radius
    setBallPosition({ x: newX, y: newY });
    setBallColor('white');
  };

  const handleMouseLeave = () => {
    setBallColor('orange');
  };

  return (
    <div className='container1' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div
        className='ball'
        style={{
          backgroundColor: ballColor,
          transform: `translate(${ballPosition.x}px, ${ballPosition.y}px)`,
        }}
      ></div>
    </div>
  );
};

export default Container1;
