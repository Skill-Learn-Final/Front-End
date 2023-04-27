import React from "react";

const Circle = ({ size, color, opacity, delay }) => (
  <div
    className={`w-${size} h-${size} rounded-full absolute animate-pulse`}
    style={{
      background: `radial-gradient(circle, ${color} 0%, rgba(255, 255, 255, 0) 70%)`,
      opacity: opacity,
      animationDelay: `${delay}s`,
    }}
  ></div>
);

export const CircleGroup = ({ count }) => {
  return (
    <div className="absolute z-[0] w-full h-full">
      <div className="relative w-full h-full">
        {[...Array(50)].map((_, index) => {
          const size = Math.random() * 20 + 10;
          const color = `hsl(${Math.random() * 360}, 80%, 80%)`;
          const position = Math.random() * 360;
          const distance = Math.random() * 100 + 50;
          const style = {
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "50%",
            backgroundColor: color,
            position: "absolute",
            left: `50%`,
            top: `50%`,
            transform: `translate(-50%, -50%) rotate(${position}deg) translate(${distance}px)`,
          };
          return <div key={index} style={style} />;
        })}
      </div>
    </div>
  );
};
