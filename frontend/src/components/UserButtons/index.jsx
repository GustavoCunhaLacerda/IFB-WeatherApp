import { Button } from "primereact/button";
import React from "react";

export default function UserButtons({ text }) {
  return (
    <div className="UserButtons">
      <Button
        style={{
          color: "#4e65ff",
          backgroundColor: "#fff",
        }}
      >
        ENTRAR
      </Button>
      <Button
        className="p-button-outlined"
        style={{
          color: "#fff",
        }}
      >
        CADASTRAR
      </Button>
    </div>
  );
}
