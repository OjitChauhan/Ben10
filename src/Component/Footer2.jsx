import React from 'react';
import { FaUserAlt, FaStar, FaInstagramSquare, FaYoutube, FaFacebook } from 'react-icons/fa';
import { motion } from "framer-motion";
import green from "../image/green.png";
import red from "../image/red.jpg";
import t from "../image/Wallpaper - Ben10 Shirt Logo by Kalangozilla on DeviantArt.jpeg"
import 'typeface-poppins';

const Footer2 = () => {
  const [click, setClick] = React.useState(false);
  const hell = [green, red];

  return (
    <div className="w-full overflow-hidden bg-[#AAFF00] p-5 flex flex-wrap justify-around gap-6">
      
      {/* Fan Form */}
      <motion.div
       
        className="w-[100%] sm:w-[300px] shadow-[#23395d] shadow-lg h-auto sm:h-[400px] backdrop-blur-xl bg-black/20 rounded-xl p-4 flex flex-col justify-center items-center space-y-6"
      >
        <div className="text-2xl font-bold"  style={{ fontFamily: "monoton" }}>Fan Form</div>
        <div className="space-y-5 w-full">
          <div className="border-b-2 border-black flex p-1 items-center">
            <FaUserAlt />
            <input type="text" className="ml-2 outline-none text-xl bg-transparent w-full" />
          </div>
          <div className="border-b-2 border-black flex p-1 items-center">
            <FaUserAlt />
            <input type="text" className="ml-2 outline-none text-xl bg-transparent w-full" />
          </div>
          <div className="border-2 border-black rounded-lg flex p-1 items-center">
            <textarea
              rows="5"
              placeholder="Place Review"
              className="resize-none ml-2 outline-none bg-transparent w-full"
            ></textarea>
          </div>
          <div className="border-2 h-[50px] overflow-hidden  w-[80%] relative items-center text-gray-900  flex justify-around rounded-full border-black">
            <motion.div className="opacity-50" animate={{ opacity: click ? 1 : 0 }} style={{ fontFamily: 'Poppins' }}>Submitted</motion.div>
            <motion.div animate={{ opacity: click ? 0 : 1 }} className="opacity-50" style={{ fontFamily: 'Poppins' }}>Click to Submit</motion.div>
            <motion.div
              className="absolute left-1 w-full rounded-full"
              animate={{ x: click ? "80%" : "0%" }}
              transition={{ duration: 0.4, ease: 'linear' }}
            >
              <img
                src={click ? hell[0] : hell[1]}
                onClick={() => setClick(true)}
                className="rounded-full w-[40px] h-[40px] bg-black cursor-pointer"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Review & Social */}
      <div className="space-y-6 w-full sm:w-[300px]">
        
        {/* Review Card */}
        <div className="bg-green-900/60 backdrop-blur-lg text-white rounded-xl shadow-lg p-6 w-full transition-transform transform hover:scale-105">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={t}
              alt="avatar"
              className="w-12 h-12 rounded-full border-2 border-green-400"
            />
            <div>
              <h4 className="text-lg font-semibold">Ojit</h4>
              <div className="flex items-center space-x-1">
                {Array(5).fill(0).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-4 w-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-500'}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-green-100 text-sm" style={{fontFamily:"poppins"}}>
            Ben 10 is the ultimate hero! This site brings back so many memories. Love the alien transformation animations!
          </p>
        </div>

        {/* Social Icons */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          className="flex justify-center items-center bg-red-700 rounded-lg py-2 w-full"
        >
          <div className="flex space-x-4 text-2xl text-white">
            <FaInstagramSquare />
            <FaYoutube />
            <FaFacebook />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer2;