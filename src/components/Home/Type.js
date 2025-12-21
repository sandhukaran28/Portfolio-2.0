import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Engineer (Frontend-leaning)",
          "Building with React, Next.js & TypeScript",
          "API-driven systems with Node.js & AWS",
          "Performance-focused, scalable UI",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
