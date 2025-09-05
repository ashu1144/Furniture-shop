import React from 'react'
import logo1 from '../assets/Logo/logo1.png'
import logo2 from '../assets/Logo/logo2.png'
import logo3 from '../assets/Logo/logo3.png'
import logo4 from '../assets/Logo/logo4.png'
import logo5 from '../assets/Logo/logo5.png'
import logo6 from '../assets/Logo/logo6.png'
import logo7 from '../assets/Logo/logo7.png'
import {easeOut, motion } from "framer-motion";
const Brands = () => {

    const logo = [{id:1,img:logo1},
        {id:2,img:logo2},
        {id:3,img:logo3},
        {id:4,img:logo4},
        {id:5,img:logo5},
        {id:6,img:logo6},
        {id:7,img:logo7}]

  return (
    <div className='max-w-[70vw] m-auto flex justify-between items-center'>
        {logo.map((el,index)=>(
          <motion.div
            initial={{y:20 , opacity:0}}
            whileInView={{y:0 , opacity:1}}
            transition={{duration:0.3 , ease:easeOut , delay:index*0.2}}  
          >
            <img src={el.img} alt="" />
        </motion.div>))}
    </div>
  )
}

export default Brands