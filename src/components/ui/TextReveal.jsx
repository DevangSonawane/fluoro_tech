import React from 'react';
import { motion } from 'framer-motion';

const TextReveal = ({ children, className = "", delay = 0 }) => {
  return (
    <div className={`overflow-hidden py-1 ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TextReveal;
