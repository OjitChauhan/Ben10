import React from 'react'
import ben from "../image/Ben-10-Omnitrix_674-removebg-preview.png"
import {motion} from "motion/react"
import green from "../image/green.png"
import k from "../image/k-removebg-preview.png"
import g from "../image/g-removebg-preview.png"
import "@fontsource/poppins/700-italic.css";



const Bes = () => {
    const [click,useClick]=React.useState(true)
    const [clickk,useClickk]=React.useState(true)
    const [clickkk,useClickkk]=React.useState(true)
  return (
    <div className='bg-black'> 


     <div className='w-screen overflow-hidden h-[250px]  bg-opacity-70'>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-[80%] relative  flex h-[140px] '>
               
                <motion.div 
                 animate={{rotateX:click?[0,180,360,360]:[360,180,0,0],opacity:click?[1,1,0,1]:[1,1,0,1]}} 
                className='w-[60%]  border-2 border-[#203354] h-full  bg-white items-center flex justify-center'>
                    {click?
                    <div className='text-[#203354] font-bold max-sm:text-sm' style={{fontFamily:"Poppins"}}>Click <br />On Image</div>
                    :<div>
                    <div className=' font-bold max-sm:text-sm' style={{fontFamily:"Poppins"}}>Click <br /> To Read</div>    
                        <motion.div whileTap={{scale:1.2}}   whileHover={{scale:1.2}} className='bg-transparent border-2 border-black flex space-x-2 items-center px-1 rounded-full'>
                                         <div><img src={green} className='w-[20px] text-[#203354] h-[20px] rounded-full' alt="" /></div>
                                         <div className='font-normal text-[#203354] ' style={{fontFamily:"Poppins"}}> Detail</div>
                                       </motion.div>
                    </div>}
                </motion.div>
                 <div className='w-[40%] flex justify-center pr-2 rounded-lg h-full border-[4px]  border-[#203354] bg-[#AAFF00]'>
                 <div className='absolute top-[-15px] bg-black border-2 border-[#203354] rounded-lg w-[190px] h-[190px]' onClick={()=>useClick(!click)}><img src={ben} className='w-[110px] h-[170px]' alt="" /></div>

                </div>
            </div>

        </div>
        
    </div>

    








    <div className='w-screen h-[250px]  bg-opacity-70'>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-[80%] relative  flex h-[140px] '>
               
                <motion.div 
                 animate={{rotateX:clickk?[0,180,360,360]:[360,180,0,0],opacity:clickk?[1,1,0,1]:[1,1,0,1]}} 
                className='w-[60%]  border-2 border-[#203354] h-full  bg-white items-center flex justify-center'>
                    {clickk?
                    <div className='text-[#203354] font-bold max-sm:text-sm' style={{fontFamily:"Poppins"}}>Click <br />On Image</div>
                    :<div>
                    <div className=' font-bold max-sm:text-sm' style={{fontFamily:"Poppins"}}>Click <br /> To Read</div>    
                        <motion.div whileTap={{scale:1.2}}   whileHover={{scale:1.2}} className='bg-transparent border-2 border-black flex space-x-2 items-center px-1 rounded-full'>
                                         <div><img src={green} className='w-[20px] text-[#203354] h-[20px] rounded-full' alt="" /></div>
                                         <div className='font-normal text-[#203354] ' style={{fontFamily:"Poppins"}}> Detail</div>
                                       </motion.div>
                    </div>}
                </motion.div>
                 <div className='w-[40%] flex justify-center pr-2 rounded-lg h-full border-[4px]  border-[#203354] bg-[#FF8DA1]'>
                 <div className='absolute top-[-15px] bg-black border-2 border-[#203354] rounded-lg w-[190px] h-[190px]' onClick={()=>useClickk(!clickk)}><img src={g} className='w-[110px] h-[170px]' alt="" /></div>

                </div>
            </div>

        </div>
        
    </div>











  <div className='w-screen h-[250px]  bg-opacity-70'>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-[80%] relative  flex h-[140px] '>
               
                <motion.div 
                 animate={{rotateX:clickkk?[0,180,360,360]:[360,180,0,0],opacity:clickkk?[1,1,0,1]:[1,1,0,1]}} 
                className='w-[60%]  border-2 border-[#203354] h-full  bg-white items-center flex justify-center'>
                    {clickkk?
                    <div className='text-[#203354] font-bold max-sm:text-sm' style={{fontFamily:"Poppins"}}>Click <br />On Image</div>
                    :<div>
                    <div className=' font-bold max-sm:text-sm' style={{fontFamily:"Poppins"}}>Click <br /> To Read</div>    
                        <motion.div whileTap={{scale:1.2}}   whileHover={{scale:1.2}} className='bg-transparent border-2 border-black flex space-x-2 items-center px-1 rounded-full'>
                                         <div><img src={green} className='w-[20px] text-[#203354] h-[20px] rounded-full' alt="" /></div>
                                         <div className='font-normal text-[#203354] ' style={{fontFamily:"Poppins"}}> Detail</div>
                                       </motion.div>
                    </div>}
                </motion.div>
                 <div className='w-[40%] flex justify-center pr-2  rounded-lg h-full border-[4px]  border-[#203354] bg-[#0059b3]'>
                 <div className='absolute top-[-15px] bg-black border-2 border-[#203354] rounded-lg w-[190px] h-[190px]' onClick={()=>useClickkk(!clickkk)}><img src={k} className='w-[110px] h-[170px]' alt="" /></div>

                </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Bes