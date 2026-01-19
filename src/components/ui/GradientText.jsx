import React from 'react';

const GradientText = ({ 
  children, 
  className = "", 
  colors = ["#60A5FA", "#3B82F6", "#93C5FD", "#60A5FA"], // Blue shades
  animationSpeed = 8 
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    backgroundSize: "200% auto",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    animation: `shine ${animationSpeed}s linear infinite`,
  };

  return (
    <span className={`inline-block ${className}`} style={gradientStyle}>
      {children}
      <style jsx>{`
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </span>
  );
};

export default GradientText;
