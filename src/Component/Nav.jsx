import React from 'react'
import {easeInOut, motion} from "motion/react"
import green from "../image/green.png"
import { CgProfile } from "react-icons/cg";
import logoo from "../image/images-removebg-preview.png"
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BsToggles2 } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseCircle } from "react-icons/io5";


const Nav = () => {
    const [click,setClick]=React.useState(false)
    const [clickk,setClickk]=React.useState(false)
    
    const [press,setpress]=React.useState(false)
   

    const renu=()=>{
      
      setpress(true)
      setClickk(false)

    }
    const raj=()=>{
      setpress(false)
      setClickk(false)
    }

  return (
    
    <div className='relative '>
      <div className={`relative w-screen overflow-hidden bg-opacity-75 bg-[#AAFF00] h-[130px] flex justify-between  `}>

        <div className='flex items-center ml-12'><motion.img whileHover={{scale:1.2}} whileTap={{scale:1.2}} src={logoo} className="w-[85px]  " alt="" /></div>
        
       
       
        <motion.div className=' top-2 mr-20 pt-9 relative max-sm:hidden '><motion.img 
        animate={{rotate: click?180:0}} transition={{duration:1,ease:easeInOut}} 
                           
        src={green} alt=""  className={`rounded-full shadow-lg w-[200px] shadow-[#23395d]`} onClick={()=>setClick(!click)}/>
          {click && <div >
              <motion.div 
                initial={{opacity:0}} animate={{opacity:1,x:[20,0], y:[20,0]}}  
                className="w-5 h-3 bg-[#203354] flex items-center rounded-full justify-center text-xl absolute text-slate-300 top-0 p-6"><div><CgProfile /></div></motion.div>        
              <motion.div initial={{opacity:0}} animate={{opacity:1,y:[-20,0], x:[20,0]}}   className="w-5 h-3 bg-[#203354] flex items-center rounded-full justify-center absolute text-xl text-slate-300 left-0 p-6"><div><FaSearch /></div></motion.div>        
              <motion.div initial={{opacity:0}} animate={{opacity:1,y:[-20,0], x:[-20,0]}} className="w-5 h-3 bg-[#203354]  flex items-center rounded-full justify-center absolute text-xl text-slate-300 right-0 p-6"><div><FaHome /></div></motion.div>        
              <motion.div initial={{opacity:0}} animate={{opacity:1,y:[20,0], x:[-20,0]}}  className="w-5 h-3 bg-[#203354] flex items-center rounded-full justify-center absolute text-xl text-slate-300 top-0 right-0 p-6"><div><BsToggles2 /></div></motion.div>  
       </div>    }     
        </motion.div>


        <div className='w-10 hidden max-sm:block   h-full '>
          <div className='w-full h-full flex  items-center '>
            <div className='text-black text-3xl pr-3 text-bold' onClick={renu}><CiMenuBurger /></div>
          </div>
        </div>
        
      </div>
      {press && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed    inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 "
              >

                <button
                            onClick={raj}
                            className="absolute top-5 right-5 text-2xl text-black text-2xl bg-[#AAFF00] rounded-full p-2 shadow-lg"
                          >
                            <IoCloseCircle />
                          </button>

             <motion.div className='relative' whileInView={{ rotate:[0,360] }}
                            transition={{ duration: 1.5, ease: easeInOut }}><motion.img 
        animate={{rotate: clickk?180:0}} transition={{duration:1,ease:easeInOut}}
        src={green} alt=""  className={`rounded-full shadow-lg w-[200px] shadow-[#23395d]`} onClick={()=>setClickk(!clickk)}/>
          {clickk && <div >
              <motion.div 
                initial={{opacity:0}} animate={{opacity:1,x:[20,0], y:[20,0]}}  
                className="w-5 h-3 bg-[#203354] flex items-center rounded-full justify-center text-xl absolute text-slate-300 top-[-40px] p-6"><div><CgProfile /></div></motion.div>        
              <motion.div initial={{opacity:0}} animate={{opacity:1,y:[-20,0], x:[20,0]}}   className="w-5 h-3 bg-[#203354] flex items-center rounded-full justify-center absolute text-xl text-slate-300 left-0 p-6"><div><FaSearch /></div></motion.div>        
              <motion.div initial={{opacity:0}} animate={{opacity:1,y:[-20,0], x:[-20,0]}} className="w-5 h-3 bg-[#203354]  flex items-center rounded-full justify-center absolute text-xl text-slate-300 right-0 p-6"><div><FaHome /></div></motion.div>        
              <motion.div initial={{opacity:0}} animate={{opacity:1,y:[20,0], x:[-20,0]}}  className="w-5 h-3 bg-[#203354] flex items-center rounded-full justify-center absolute text-xl text-slate-300 top-[-40px] right-0 p-6"><div><BsToggles2 /></div></motion.div>  
       </div>    }     
        </motion.div>

              </motion.div>
      )}


    </div>
  )
}

export default Nav
