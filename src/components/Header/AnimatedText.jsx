import React from "react";
import { motion } from "framer-motion";

const AnimatedCharacters = ({ text }) => {
  const item = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.60 }
    }
  };
  const [firstName, lastName] = text.split(" ");
  const words = [firstName.split('').concat("\u00A0"), lastName.split('').concat("\u00A0")];

  return (
    <div>
      {words.map((word, i) => (
        word.map((c, j) => (
          <span key={j} className='text-header-size max-sm:text-4xl mx-sm:mt-auto overflow-hidden inline-block' >
            <motion.span className="inline-block" variants={item} >{c}</motion.span>
          </span>
        ))
      ))}
    </div>
  );
};

export default AnimatedCharacters;
