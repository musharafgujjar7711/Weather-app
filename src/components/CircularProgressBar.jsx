import React, { useEffect, useState } from "react";

// Function to determine the color based on value
const getColor = (value) => {
  if (value < 10) return "blue";    // 0% to 10% - Blue
  if (value < 20) return "yellow";  // 10% to 20% - Yellow
  if (value < 30) return "green";   // 20% to 30% - Green
  return "red";                     // 30% and above - Red
};

// CircularProgressBar Component
const CircularProgressBar = ({ value, label }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    // Animate the progress from 0 to the given value
    let start = 0;
    const end = value;
    const duration = 3500; // Animation duration in milliseconds
    const incrementTime = (duration / end) > 0 ? (duration / end) : 1; // Time per increment

    const timer = setInterval(() => {
      if (start < end) {
        start++;
        setCurrentValue(start);
      } else {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  // Determine the color based on the current value
  const color = getColor(currentValue);

  return (
    <div className="relative flex items-center justify-center w-32 h-32"> {/* Changed size to lg */}
      {/* Background Circle */}
      <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div> {/* Increased outline width */}

      {/* Progress Circle */}
      <div
        className={`absolute inset-0 rounded-full border-8 transition-all duration-1000 ease-linear border-${color}-600`}
        style={{
          transform: `rotate(${currentValue * 3.6}deg)`, // 360 degrees is 100%
          borderTopColor: "transparent", // Makes the "hand" effect
        }}
      ></div>

      {/* Water Overflow Effect */}
      <div
        className={`absolute inset-0 rounded-full bg-${color}-200 transition-all duration-1000 ease-in-out`}
        style={{
          clipPath: `inset(${100 - currentValue}% 0 0 0)`, // Clips the div to create overflow effect
        }}
      ></div>

      {/* Display Value */}
      <span className={`absolute text-${color}-600 font-bold text-xl`}>{currentValue}%</span>
      <span className={`absolute text-${color}-600 font-bold text-sm mt-14`}>{label}</span> {/* Adjusted margin */}
    </div>
  );
};

export default CircularProgressBar;


