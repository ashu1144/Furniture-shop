import React from 'react'
import cart from '../assets/cart.png'
import {easeOut, motion } from "framer-motion";
const ProductGrid = ({products}) => {
  return (
    <div className='grid grid-cols-4 grid-rows-2 gap-2 py-5'>
        {products.map((el,index)=>( <motion.div 
          initial={{y:20 , opacity:0}}
          whileInView={{y:0 , opacity:1}}
          transition={{duration:0.3 , ease:easeOut , delay:index*0.2}}
          viewport={{once:true}}
        
        className='hover:scale-103 duration-100 ease-in-out'>
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
        
         
                </motion.div>))}
        
    </div>
  )
}

export default ProductGrid