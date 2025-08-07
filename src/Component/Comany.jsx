import React from 'react';
import Cn from "../image/cnn.png";
import Pogo from "../image/nick.png";
import Disney from "../image/disneyxdd.png";
import { motion } from "framer-motion";

const Comany = () => {
  const stagger = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };
  const a = [Cn, Pogo, Disney];

  return (
    
    <div className="absolute overflow-hidden bg-black w-full">
      <div className="w-full h-[120px] sm:h-[130px]md:h-[150px] bg-[#AAFF00] flex justify-center items-end">
        <div className="w-[100%] sm:w-[80%] md:w-[70%] bg-black rounded-b-full">
          <motion.div
            className="w-full h-[120px] sm:h-[130px] md:h-[150px] flex items-center justify-around"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
          >
            {a.map((item, index) => (
              <motion.div
                key={index}
                variants={stagger}
                className="w-[100px] sm:w-[120px] md:w-[150px] h-[80px] sm:h-[90px] md:h-[100px] flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
              >
                <img
                  src={item}
                  className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px] opacity-60"
                  alt=""
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Comany;

