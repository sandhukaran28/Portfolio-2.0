import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Engineer",
          "Building AI-Powered Products",
          "React, Vue, TypeScript, Node.js",
          "Claude API & LLM Integrations",
          "Remote-Ready, Brisbane Based",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
