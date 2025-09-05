import React from 'react'
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'
import cat1 from '../assets/Topcat/image (4).png'
import cat2 from '../assets/Topcat/image (5).png'
import cat3 from '../assets/Topcat/image (6).png'
import {easeOut, motion } from "framer-motion";


const TopCatogories = () => {

    const topcatList = [
        {id:0,img:cat1,titile:"Wing Char"},
        {id:0,img:cat2,titile:"Wooden chair"},
        {id:0,img:cat3,titile:"Desl chair"},
        {id:0,img:cat1,titile:"Wing Char"},
        {id:0,img:cat2,titile:"Wooden chair"},
        {id:0,img:cat3,titile:"Desl chair"},
        {id:0,img:cat1,titile:"Wing Char"},
        {id:0,img:cat2,titile:"Wooden chair"},
        {id:0,img:cat3,titile:"Desl chair"},
        {id:0,img:cat1,titile:"Wing Char"},
        {id:0,img:cat2,titile:"Wooden chair"},
        {id:0,img:cat3,titile:"Desl chair"},
        {id:0,img:cat1,titile:"Wing Char"},
        {id:0,img:cat2,titile:"Wooden chair"},
        {id:0,img:cat3,titile:"Desl chair"},
        {id:0,img:cat1,titile:"Wing Char"},
        {id:0,img:cat2,titile:"Wooden chair"},
        {id:0,img:cat3,titile:"Desl chair"},
    ]


  return (
    <div id='topcat' className='w-full overflow-x-hidden my-auto'>
        <div className='flex items-center justify-between max-w-[70vw] m-auto'>
                <h1 className='text-2xl font-semibold'>Top Categories</h1>
        </div>

        <motion.div
          initial={{x:"-245vw"}} animate={{x:"0vw"}} transition={{ease:"linear" ,repeat:Infinity , duration:50}}
         style={{transform:"translateX(-300vw)"}} className='w-[340vw] flex gap-5 py-5'>
            {topcatList.map((el)=>(<div
             className='w-80 h-80 rounded-2xl overflow-hidden relative '>
                <img src={el.img} className='object-cover w-full h-full' alt="" />
                <div className='absolute z-999 bottom-0 p-2 w-full bg-zinc-900/50 text-white'>{el.titile}</div>
            </div>))}
        </motion.div>

    </div>
  )
}

export default TopCatogories