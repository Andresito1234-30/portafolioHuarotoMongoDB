import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Estudiante de Ingeniería de Sistemas",
          "Cursando IV ciclo",
          "En la Universidad Nacional de Cañete",
          "Andresito papu",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
