import React from 'react';
import { FaChessKing } from "react-icons/fa";
import { motion } from "motion/react";

const Footer = () => {
  const a = "@Developed By Ojit Chauhan";
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div className="w-full h-[60px] flex justify-center items-center bg-[#AAFF00] overflow-hidden">
      <div className="flex items-center space-x-3 overflow-hidden">
        <div className="text-gray-600 cursor-pointer text-[3vh] opacity-80">
          <FaChessKing />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2, duration: 1,repeat:Infinity }
            }
          }}
          className="text-gray-600 text-[2vh] opacity-80 whitespace-nowrap overflow-hidden"
        >
          {a.split("").map((item, index) => (
            <motion.span
              style={{ fontFamily: "Poppins" }}
              key={index}
              variants={stagger}
              className="inline-block"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;