import React from "react";

export default function Title({ text }) {
  return (
    <div className="text-base text-center text-black text-7xl">
      <p className="font-sans select-none drop-shadow-md text-blue-100">{text}</p> 
    </div>
  );
}
