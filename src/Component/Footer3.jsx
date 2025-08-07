import React from 'react'
import { FaCopyright } from "react-icons/fa";
import {motion} from "motion/react"

const Footer3 = () => {
  return (
    <div className='w-full overflow-hidden h-[40px] flex  bg-[#23395d]  items-center justify-end pr-4'>
      <div className='flex items-center'>
        <motion.div whileHover={{scale:1}} whileTap={{scale:1.3}} whileInView={{scale:1.3}} className='text-white opacity-60'><FaCopyright /></motion.div>
         <div className='text-sm py-2 px-3 text-white  opacity-60 cursor-pointer      text-opacity-40 font-bold' style={{ fontFamily: "monoton" }}>CopyRight Reserved to Ben10</div>
        </div >
      
    </div>
  )
}

export default Footer3
