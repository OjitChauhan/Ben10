import React from 'react'
import { FaChessKing } from "react-icons/fa";
import {motion} from "motion/react"

const Footer = () => {
    const a="@Developed By Ojit Chauhan"
    const stagger={
        hidden:{opacity:0},
        visible:{opacity:1}
    }
  return (
    <div>
      <div className='w-full overflow-hidden h-[60px] flex justify-center items-center bg-[#AAFF00] '>
        <div className='flex items-center space-x-7'>
            <div className='text-gray-600 pointer-cursor text-[3vh] opacity-80'><FaChessKing /></div>
            <motion.div initial="hidden"  whileInView="visible" variants={{visible:{transition:{staggerChildren:0.2,duration:1}}}} className='text-gray-600 text-[2vh] opacity-80'>
                {a.split("").map((item,index)=>
                    <motion.span  style={{fontFamily:"poppins"}} key={index} variants={stagger}  className='inline-block'>{item}</motion.span>    
                )}
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Footer
