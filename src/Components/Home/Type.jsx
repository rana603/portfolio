import React from "react";
import './Style.css'

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Typewriter 
      options={{
        strings: ["Full Stack Developer", "MERN Stack Developer","Hard Working","dedicated"  ],
        // strings: ["Passionate about changing the world with technology"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
};
