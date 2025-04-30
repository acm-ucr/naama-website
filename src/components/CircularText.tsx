import React from "react";

interface CircleTextProps {
  text: string;
}

const CircularText = ({ text }: CircleTextProps) => {
  return (
    <div className="flex w-full grow items-center justify-center">
      <svg
        width="22vw"
        viewBox="0 0 400 200"
        xmlns="http://www.w3.org/2000/svg"
        className="flex overflow-visible"
      >
        <path id="curve" d="M-200,250 Q200,-100 600,250" fill="transparent" />
        <text className="fill-white/50 text-4xl">
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            {text.split("").map((char, index) => (
              <tspan key={index}>{char}</tspan>
            ))}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CircularText;
