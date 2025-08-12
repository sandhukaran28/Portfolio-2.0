import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
      "Full Stack Engineer",
      "React.js & Next.js Developer",
      "TypeScript Specialist",
      "Frontend Architecture Enthusiast",
      "UI/UX Focused Developer",
      "API Integration Expert",
      "Agile Product Builder"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
