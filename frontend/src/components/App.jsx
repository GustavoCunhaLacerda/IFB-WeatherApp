import "primeicons/primeicons.css";
import React from "react";

import Home from "./views/Home";

export default function App() {
  return (
    <div className="App flex items-center justify-center h-screen bg-gradient-to-b from-blue-600 via-blue-600 to-blue-500">
      <Home />
    </div>
  );
}
