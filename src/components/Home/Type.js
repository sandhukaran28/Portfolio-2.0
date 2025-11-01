import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Engineer",
          "React & Next.js Developer",
          "TypeScript and Node.js Developer",
          "Frontend Performance Optimizer",
          "UI/UX-Driven Engineer",
          "API Integration & Cloud Deployment",
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
