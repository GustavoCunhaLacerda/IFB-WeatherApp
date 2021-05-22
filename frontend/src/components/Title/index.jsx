import React from "react";

export default function Title({ text }) {
  return (
    <div className="text-base text-center text-gray-900 text-7xl">
      <p className="font-sans select-none">{text}</p> 
    </div>
  );
}
