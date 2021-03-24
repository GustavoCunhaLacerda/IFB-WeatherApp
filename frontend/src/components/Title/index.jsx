import "./style.css";
import React from "react";

export default function Title({ text }) {
  return (
    <div className="Title">
      <h1>{text}</h1>
    </div>
  );
}
