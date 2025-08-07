import React, { useState } from 'react'
import azmuth from "../image/azmuth.jpg"
import { motion } from "framer-motion"
import green from "../image/green.png"
import red from "../image/red.jpg"
import '@fontsource/monoton';

const Uncle = () => {
  const [click,setClick]=useState(false)
  return (
    <div className=' bg-black pb-10'>
      <div className='w-full overflow-hidden flex justify-center px-4'>
        <div className='w-full max-w-6xl bg-[#AAFF00] shadow-2xl shadow-[#23395d] rounded-full flex flex-col md:flex-row items-center justify-between py-6 px-6 md:px-10 space-y-6 md:space-y-0'>
          
          {/* Text Section */}
          <motion.p
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{ fontFamily: "monoton" }}
            className='text-[8vw] md:text-[4vw] font-bold text-gray-700'
          >
            Azmuth
          </motion.p>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='w-[150px] md:w-[190px] h-[150px] md:h-[190px] flex items-center justify-center bg-black border-2 border-[#AAFF00] rounded-full'
          >
            <img src={azmuth} className="w-[100px] md:w-[120px] h-[100px] md:h-[120px]" alt="Azmuth" />
          </motion.div>

          {/* Button Section */}
          <div className='flex flex-col items-center md:items-end space-y-2'>
            <div className='text-sm md:text-base opacity-50' style={{fontFamily:"poppins"}}>
              Click Here to Read
            </div>
            <motion.div
              whileTap={{ scale: 1.2 }}
              whileInView={{ scale: 1.1 }}
              whileHover={{ scale: 1.2 }}
              onClick={()=>setClick(!click)}
              className='bg-transparent border-2 cursor-pointer border-black flex items-center space-x-2 px-3 py-1 rounded-full'
            >
              <img src={click?green:red}  className='w-[20px] h-[20px] rounded-full' alt="Green Icon" />
              <div className='text-sm md:text-base font-normal' style={{fontFamily:"poppins"}}>Detail</div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Uncle

