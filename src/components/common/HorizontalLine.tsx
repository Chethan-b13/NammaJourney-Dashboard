import React from "react";

interface HorizontalLineProps {
  className?: string; // Allows custom styles
  color?: string; // Optional color for the line
  thickness?: string; // Optional thickness (e.g., "2px")
  margin?: string; // Optional margin (e.g., "16px 0")
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({
  className = "",
  color = "#E5E7EB", // Default light gray color
  thickness = "1px",
  margin = "16px 0",
}) => {
  return (
    <hr
      className={`w-full ${className}`}
      style={{
        border: "none",
        backgroundColor: color,
        height: thickness,
        margin,
      }}
    />
  );
};

export default HorizontalLine;
