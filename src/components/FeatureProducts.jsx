import React from 'react'
import { FeatureProductsList } from '../Constant'
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'
import cart from '../assets/cart.png'
import {easeOut, motion } from "framer-motion";
import { useState } from 'react'
const FeatureProducts = () => {

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
    className='w-[70vw] m-auto'>

      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>Featured Products</h1>
        <div>
          <button className='mr-5 p-1 border-2 border-gray-400 rounded-full' onClick={()=>move("left")} ><img src={leftArrow} alt="" /></button>
          <button className='p-1 border-2 border-gray-400 rounded-full' onClick={()=>move("right")} ><img src={rightArrow} alt="" /></button>
        </div>
      </div>

      <div className='overflow-hidden'>
      <div style={{transform:`translateX(${-count*70}vw)  `}} className='flex gap-3 py-5 transition-all duration-300 ease-in-out w-[210vw]'>
        {FeatureProductsList.map((el)=>(
          <div className='hover:scale-103 duration-300 '>
            {/* img */}
            <div className='rounded-md'>
              <img src={el.img} alt="" />
            </div>
            {/* desc */}
            <div className='flex justify-between items-center p-1 '>
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

export default FeatureProducts