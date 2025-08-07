import React from 'react';
import { motion } from "framer-motion";
import first from "../image/first.png";
import second from "../image/second.png";
import third from "../image/thrd.png";
import fourth from "../image/fourth.png";
import fifth from "../image/fiive.png";

const Remote = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prev) => (prev === 4 ? 0 : prev + 1));
    }, 3000);
    return () => clearTimeout(timer);
  }, [count]);

  const images = [first, second, third, fourth, fifth];

  return (
    <div className="w-screen overflow-hidden mb-7 max-sm:mb-0  pb-2 bg-black px-4 py-6">
      <div className="flex flex-row max-sm:flex-col justify-around max-lg:flex-row items-center pt-2 gap-10  h-auto ">
        
        {/* Omnitrix Core */}
        <div>
          <div className="relative w-[250px] sm:w-[280px] md:w-[300px] lg:w-[320px] h-[250px] sm:h-[280px] md:h-[300px] lg:h-[320px] rounded-full border-[25px] sm:border-[30px] lg:border-[35px] border-white/10 backdrop-blur-lg bg-transparent">
            <motion.div
              className="absolute w-full h-full rounded-full border-[25px] sm:border-[30px] lg:border-[35px] border-[#AAFF00] bg-transparent"
              animate={{ opacity: [1, 0.7, 1, 0.6] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <motion.div
                className="absolute w-full h-full rounded-full border-[20px] sm:border-[22px] lg:border-[25px] border-[#32612D] bg-transparent"
                animate={{ rotate: [90, 180, 240, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-400 absolute top-1 border-4 border-[#354A21]"></div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-400 absolute bottom-1 right-4 border-4 border-[#354A21]"></div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-400 absolute right-1 border-4 border-[#354A21]"></div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-400 absolute bottom-1 border-4 border-[#354A21]"></div>
              </motion.div>
              <motion.div className="relative">
                <div className="absolute h-full flex items-start justify-center w-full">
                  <img
                    src={images[count]}
                    className="w-[100px] sm:w-[110px] md:w-[120px] h-[120px] sm:h-[125px] md:h-[130px] pt-10"
                    alt=""
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Side Button */}
        <div className="h-[250px]  relative w-[30px] max-sm:w-[300px] max-sm:h-[40px]  bg-[#AAFF00] flex items-center justify-center bg-opacity-75">
          <motion.div
            whileInView={{ scale: 1.2 }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.2 }}
            className="absolute w-[100px] sm:w-[110px] max-sm:w-[80px] max-sm:h-[80px] md:w-[120px] lg:w-[125px] h-[100px] sm:h-[110px] md:h-[120px] lg:h-[125px] bg-white rounded-full text-black font-bold font-sans shadow-md shadow-[#AAFF00] text-5xl sm:text-6xl flex items-center justify-center"
          >
            <div >10</div>
          </motion.div>
        </div>

        {/* Info Card */}
        <div>
          <motion.div className="w-[260px] max-sm:w-[240px] max-sm:h-[260px] max-sm:pt-10   shadow-[#23395d] pb-2 h-[420px]  bg-[#AAFF00] border-2 border-black rounded-xl">
            <motion.div
              className="w-full h-full space-y-5 flex flex-col justify-center items-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <motion.div
                className="font-bold text-3xl sm:text-4xl"
                animate={{ opacity: [1, 0.6, 0.7, 0.9] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                Omnitrix
              </motion.div>
              <div className="w-[220px] sm:w-[230px] md:w-[250px] text-gray-900 opacity-50 text-sm sm:text-base text-center">
                The Omnitrix is a powerful alien device from the Ben 10 universe that allows its user to transform into various alien species by accessing their DNA
              </div>
              <motion.button
                whileTap={{ scale: 1.2 }}
                whileHover={{ scale: 1.1 }}
                className="bg-transparent border-2 border-black max-sm:py-1 max-sm:px-2 font-bold px-4 py-2 sm:px-5 sm:py-2 rounded-full"
              >
                More Details
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Remote;