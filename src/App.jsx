import React from 'react'
import {motion} from "motion/react"
import Nav from './Component/Nav'
import Remote from "./Component/Remote"
import Comany from './Component/Comany'
import Footer from "./Component/Footer"
import Footer2 from './Component/Footer2'
import Uncle from './Component/Uncle'
import Grand from './Component/Grand'
import Footer3 from './Component/Footer3'
import Villian from './Component/Villian'
import Bes from './Component/Bes'
import Navu from "./Component/Navu"



const App = () => {
  return (
    <div className='bg-black  w-screen h-screen' style={{padding: 0,margin:0,boxSizing:'border-box'}}>
      
       <Nav/>
       
       <div>
       <Remote/>
       </div>
      <div>
      
       <Comany/>
       </div>
       <br />
       <br />
      <br />
      <br/>
      
       <br />
       <Footer/>
       
      <Villian/>
      
       <Uncle/>
        <Bes/>
        
     <Grand/>
     <Footer2/> 
     <Footer3/>
    
    
     
     
     
      
    </div>
  )
}

export default App

