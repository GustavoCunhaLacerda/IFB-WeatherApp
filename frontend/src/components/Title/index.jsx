import React from "react";

export default function Title({ text }) {
  return (
    <div className="text-base text-center text-gray-800 text-7xl py8">
      <p className="font-sans select-none">{text}</p> 
    </div>
  );
}
