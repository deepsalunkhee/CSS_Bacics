import React, { useState, useEffect } from 'react';
import './Container2.css';

const NUM_BALLS = 100; // Define the number of balls

const Container2 = () => {
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    // Initialize the balls with random positions and velocities
    const initialBalls = Array.from({ length: NUM_BALLS }, (_, index) => ({
      id: index,
      position: {
        x: Math.random() * (window.innerWidth - 20), // Subtract ball diameter
        y: Math.random() * (window.innerHeight - 20), // Subtract ball diameter
      },
      velocity: {
        x: (Math.random() - 0.5) * 3, // Random horizontal velocity (-1.5 to 1.5)
        y: (Math.random() - 0.5) * 3, // Random vertical velocity (-1.5 to 1.5)
      },
    }));
    setBalls(initialBalls);
  }, []);

  const updateBallPositions = () => {
    setBalls(prevBalls =>
      prevBalls.map(ball => {
        const updatedPosition = {
          x: ball.position.x + ball.velocity.x,
          y: ball.position.y + ball.velocity.y,
        };

        // Bounce back from container borders
        if (updatedPosition.x <= 0 || updatedPosition.x >= window.innerWidth - 20) { // Subtract ball diameter
          ball.velocity.x = -ball.velocity.x;
        }
        if (updatedPosition.y <= 0 || updatedPosition.y >= window.innerHeight - 20) { // Subtract ball diameter
          ball.velocity.y = -ball.velocity.y;
        }

        return {
          ...ball,
          position: updatedPosition,
        };
      })
    );
  };

  useEffect(() => {
    const interval = setInterval(updateBallPositions, 5); // Update every 16ms (approx. 60 fps)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container2'>
      {balls.map(ball => (
        <div
          key={ball.id}
          className='ball'
          style={{
            transform: `translate(${ball.position.x}px, ${ball.position.y}px)`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Container2;
