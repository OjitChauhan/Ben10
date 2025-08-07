import React from "react";
import green from "../image/green.png";
import red from "../image/red.jpg";
import blue from "../image/blue.png";
import one from "../image/1.png";
import { motion, spring } from "motion/react";
import "@fontsource/poppins";

const Villian = () => {
  const [click, setClick] = React.useState(false);
  const a = [green, red, blue];
  setTimeout(() => {
    setCount((prev) => (prev === 2 ? 0 : prev + 1));
  }, 2000);

  const [count, setCount] = React.useState(0);
  return (
    <div className="w-full h-[95vh]  bg-black flex items-center justify-center flex-col space-y-20">
      <div className="space-y-5 flex flex-col items-center">
        <div
          className="text-white text-3xl max-sm:text-2xl font-bold"
          style={{ fontFamily: "poppins" }}
        >
          Explore The Ben Adventure
        </div>
        <motion.div
          whileTap={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          onClick={() => setClick(!click)}
          whileHover={{ opacity: 1 }}
          className="bg-transparent h-[40px] w-[220px] opacity-75 border-2 border-white flex space-x-2 items-center px-1 py-1 rounded-full"
        >
          <div>
            <img
              src={click ? green : red}
              className="w-[30px] h-[30px] rounded-full"
              alt=""
            />
          </div>
          <div className="font-sans text-white text-xl">Explore the World</div>
        </motion.div>
      </div>
      <div>
        <div className="w-[260px] h-[260px] relative  border-t-transparent border-l-transparent border-r-transparent border-b-transparent border-[4px] rounded-full bg-transparent   flex items-center justify-center">
          <motion.div
            animate={{ rotate: [0, 90, 180, 240, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-[260px] h-[260px]  relative border-l-transparent border-[4px] border-r-transparent border-b-transparent   rounded-full bg-transparent  border-[#203354] flex items-center justify-center"
          >
            <div className="flex items-center overflow-hidden absolute  right-5 top-8   w-[20px] h-[20px]   bg-[#AAFF00] rounded-full">
              {" "}
            </div>
          </motion.div>

          <div className="flex absolute  border-t-transparent border-l-transparent border-r-transparent border-b-transparent items-center justify-center max-sm:w-[210px] border-[4px] max-sm:h-[210px] border-[#203354] border-2 rounded-full ">
            <motion.div
              animate={{ rotate: [0, 90, 180, 240, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="flex absolute  border-l-transparent border-r-transparent border-[4px] border-t-transparent items-center justify-center w-[210px] border-[6px] h-[210px] border-[#203354]  border-2 rounded-full "
            >
              <div className="flex items-center absolute  bottom-5 left-4  w-[20px] h-[20px]  bg-orange-800 rounded-full">
                {" "}
              </div>
            </motion.div>

            <div className=" flex items-center  justify-center border-t-transparent border-l-transparent border-r-transparent border-b-transparent   border-[#203354] w-[170px] h-[170px] border-2 rounded-full ">
              <motion.div
                animate={{ rotate: [0, 90, 180, 240, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className=" flex items-center absolute inset-13 justify-center border-t-transparent border-r-transparent border-b-transparent border-[4px]   border-[#203354] w-[170px] h-[170px] border-2 rounded-full "
              >
                <div className="flex items-center absolute  top-4 left-1 w-[20px] h-[20px]   bg-blue-500 rounded-full"></div>
              </motion.div>

              <div className="flex relative    items-center justify-center border-r-transparent border-l-transparent border-b-transparent border-t-transparent  border-[#203354]  border-[6px] :w-[110px] h-[110px] border-2 rounded-full ">
                <motion.div
                  animate={{ rotate: [0, 90, 180, 240, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="flex relative    items-center justify-center border-t-transparent border-l-transparent border-b-transparent max-sm:border-[4px] border-[#203354]  border-[4px] w-[110px] h-[110px] border-2 rounded-full "
                >
                  <div className="flex items-center absolute bottom-0 right-[-2px]  w-[20px] h-[20px] bg-red-800  rounded-full">
                    {" "}
                  </div>
                </motion.div>

                <img
                  src={a[count]}
                  className="  absolute inset-19  w-[80px] h-[80\px] border-[3px] border-[#203354] p-1 rounded-full "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Villian;
