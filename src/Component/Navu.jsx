import React from 'react';
import { easeInOut, motion } from "framer-motion";
import green from "../image/green.png";
import { CgProfile } from "react-icons/cg";
import logoo from "../image/images-removebg-preview.png";
import { FaSearch, FaHome, FaTimes } from "react-icons/fa";
import { BsToggles2 } from "react-icons/bs";

const Navu = () => {
  const [click, setClick] = React.useState(false);

  return (
    <div>
      {/* Navbar */}
      <div className="relative w-full  bg-opacity-75 bg-[#AAFF00] h-[100px] sm:h-[110px] md:h-[130px] flex justify-between items-center px-4 sm:px-8 md:px-12">
        
        {/* Logo */}
        <div className="flex items-center">
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
            src={logoo}
            className="w-[65px] sm:w-[75px] md:w-[85px]"
            alt="Logo"
          />
        </div>

        {/* Menu Button (only on small screens) */}
        <button
          onClick={() => setClick(true)}
          className="sm:hidden bg-black text-white px-4 py-2 rounded-full shadow-md"
        >
          Menu
        </button>
      </div>

      {/* Popup Overlay (only on small screens) */}
      {click && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 sm:hidden"
        >
          {/* Close Button */}
          <button
            onClick={() => setClick(false)}
            className="absolute top-5 right-5 text-white text-2xl bg-[#AAFF00] rounded-full p-2 shadow-lg"
          >
            <FaTimes />
          </button>

          {/* Circular Toggle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, ease: easeInOut }}
            className="rounded-full shadow-lg w-[200px] h-[200px] bg-black flex items-center justify-center shadow-[#23395d] relative"
          >
            <img src={green} alt="Toggle" className="w-[80%] h-[80%] rounded-full" />

            {/* Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [20, 0], y: [20, 0] }}
              className="w-5 h-3 bg-[#203354] flex items-center rounded-full justify-center text-xl absolute text-slate-300 top-0 p-6"
            >
              <CgProfile />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [-20, 0], x: [20, 0] }}
              className="w-5 h-3 bg-[#203354] flex items-center rounded-full justify-center absolute text-xl text-slate-300 left-0 p-6"
            >
              <FaSearch />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [-20, 0], x: [-20, 0] }}
              className="w-5 h-3 bg-[#203354] flex items-center rounded-full justify-center absolute text-xl text-slate-300 right-0 p-6"
            >
              <FaHome />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [20, 0], x: [-20, 0] }}
              className="w-5 h-3 bg-[#203354] flex items-center rounded-full justify-center absolute text-xl text-slate-300 top-0 right-0 p-6"
            >
              <BsToggles2 />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Navu;