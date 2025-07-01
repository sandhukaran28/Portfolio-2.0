import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
           "Frontend Developer",
          "React.js Developer",
          "Next.js Enthusiast",
          "TypeScript Developer",
          "Open to Remote Roles in Australia"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
