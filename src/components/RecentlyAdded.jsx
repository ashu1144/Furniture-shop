import React from 'react'
import { FeatureProductsList } from '../Constant'
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'
import cart from '../assets/cart.png'
import {easeOut, motion } from "framer-motion";
import { useState } from 'react'
import useIsMobile from './useIsMobile'
const RecentlyAdded = () => {

  const ismobile = useIsMobile()

  const [count, setCount] = useState(0)
  const move=(position)=>{
        if(position == "right"){
            setCount( count<2 ? count + 1 : 0) 
        }
        else{
            setCount( count>0 ? count - 1 : 2 )
        }

    }


  return (
    <motion.div
    initial={{y:30 , opacity:0}}
    whileInView={{y:0 , opacity:1}}
    transition={{duration:0.3 , ease:easeOut , delay:0.2}}
    viewport={{ once: true }}
    className='w-[70vw] max-sm:w-[100vw] m-auto py-5 max-sm:px-2'>

      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>Featured Products</h1>
        <div>
          <button className='mr-5 p-1 border-2 border-gray-400 rounded-full' onClick={()=>move("left")} ><img src={leftArrow} alt="" /></button>
          <button className='p-1 border-2 border-gray-400 rounded-full' onClick={()=>move("right")} ><img src={rightArrow} alt="" /></button>
        </div>
      </div>
      {/* 'style={{transform: `translateX(-${count * (ismobile ? 100 : 85)}vw)`}} */}
      <div className='overflow-hidden'>
      <div style={{transform:`translateX(${-count*(ismobile?98:70)}vw)  `}} className='flex gap-3 py-5 transition-all duration-300 ease-in-out w-[210vw]'>
        {FeatureProductsList.map((el)=>(
          <div className='hover:scale-103 duration-300 min-w-50 '>
            {/* img */}
            <div className='rounded-md'>
              <img src={el.img} alt="" />
            </div>
            {/* desc */}
            <div className='flex justify-between items-center p-1 max-sm:w-42 '>
              <div>
                <h1 className='font-semibold'>{el.title}</h1>
                <p className='text-sm' >{el.price}</p>
              </div>

              {/* cart */}
              <div>
                  <button><img src={cart} alt="" /></button>
              </div>

            </div>

 
        </div>))}
      </div>
      </div>


      
    </motion.div>
  )
}

export default RecentlyAdded