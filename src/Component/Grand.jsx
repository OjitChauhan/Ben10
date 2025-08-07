import React from 'react';
import azmuth from "../image/grand.png";
import { motion } from "framer-motion";
import green from "../image/green.png";
import red from "../image/red.jpg"

const Grand = () => {
  const [click,setClick]=React.useState(false)
  return (
    
    <div className="pt-10 pb-10 bg-black">
      <div className="w-full h-auto flex justify-center">
        <div className="w-[95%] sm:w-[90%] md:w-[80%] bg-[#AAFF00] shadow-2xl shadow-[#23395d] rounded-full flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-6 md:gap-0">
          
          {/* Name Section */}
          <div
            style={{ fontFamily: "ComicNeue_700Bold_Italic" }}
            className="text-[6vw] sm:text-[4vw] md:text-[3vw] font-bold text-gray-700"
          >
            <motion.p
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ fontFamily: "monoton" }}
            >
              Max Tennyson
            </motion.p>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-[150px] sm:w-[170px] md:w-[190px] h-[150px] sm:h-[170px] md:h-[190px] border-2 border-[#AAFF00] bg-black rounded-full flex items-center justify-center"
          >
            <img
              src={azmuth}
              className="w-[100px] sm:w-[110px] md:w-[120px] h-[100px] sm:h-[110px] md:h-[120px]"
              alt=""
            />
          </motion.div>

          {/* Button Section */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <div className="opacity-50 text-sm sm:text-base"  style={{fontFamily:"poppins"}}>Click Here to Read</div>
            <motion.div
              whileTap={{ scale: 1.2 }}
              whileInView={{ scale: 1.1 }}
              whileHover={{ scale: 1.2 }}
               onClick={()=>setClick(!click)}
              className="bg-transparent border-2 border-black flex space-x-2 items-center px-3 py-1 rounded-full"
            >
              <img src={click?green:red} className="w-[20px] h-[20px] rounded-full" alt="" />
              <div className="font-normal text-sm sm:text-base" style={{fontFamily:"poppins"}}>Detail</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grand;