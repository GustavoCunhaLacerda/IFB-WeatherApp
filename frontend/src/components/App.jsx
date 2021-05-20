import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import React from "react";

import Home from "./views/Home";

export default function App() {
  return (
    <div className="App bg-indigo-500 w-full h-screen">
      <Home />
    </div>
  );
}
