import React from 'react'
import { easeInOut, easeOut, motion } from "framer-motion";
const Slides = ({img,content}) => {
  return (
    <div className='relative w-full flex-shrink-0'>
        <img className='' src={img}></img>
        <motion.h1
          initial={{x:-30 , opacity:0}}
          animate={{x:0 , opacity:1}}
          transition={{duration:0.6 , ease:easeOut , delay:0.2}}
          className='absolute left-20 top-20 text-6xl p-5 font-bold w-180' >{content}</motion.h1>
    </div>
  )
}

export default Slides