import React, { useState } from 'react'
import Slides from './Slides'
import bg1 from '../assets/background.png'
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'
import shield from '../assets/shield.png'
import box from '../assets/box.png'
import deliTruck from '../assets/truck.png'
import clock from '../assets/24-hours.png'
import {easeOut, motion } from "framer-motion";
import slideimg2 from '../assets/image1.png'
import slideimg3 from '../assets/image2.png'


const Hero = () => {

    const slideContent = [
        {id:2,
        img:slideimg3,
        desc:"Best Furniture Collection for your interior."},
        {id:1,
        img:bg1,
        desc:"Best Furniture Collection for your interior."},
        {id:2,
        img:slideimg2,
        desc:"Feel the Luxaury , Live Life In Luxary Style "},
    ]

    const feature =[{id:1,title:"Discount",desc:"Every week new sales",img:box},
        {id:2,title:"Free Delivery",desc:"100% Free for all orders",img:deliTruck},
        {id:3,title:"Great Support 24/7",desc:"We care your experiences",img:clock},
        {id:4,title:"secure Payment",desc:"100% Secure Payment Method",img:shield},
    ]
    
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
    <div id='home' className='w-full bg-white'>
        <div></div>
        <div className='max-w-[85vw] m-auto bg-[#F0F2F3] rounded-b-[100px]  relative -mb-[50px] overflow-hidden '>
           <div className='flex  h-[85vh] transition-all duration-300 ease-in-out' style={{transform:`translateX(${-count*85}vw)  `}} > {slideContent.map((el)=>(<Slides key={el.id} img={el.img} content={el.desc} ></Slides>))}</div>
            <button className='absolute left-2 top-1/2 z-999 p-2 border-2 border-zinc-500 rounded-full' onClick={()=>move("left")}><img src={leftArrow} alt="" /></button>
            <button className='absolute right-2 top-1/2 z-999 p-2 border-2 border-zinc-500 rounded-full' onClick={()=>move("right")}   ><img src={rightArrow} alt="" /></button>
        </div>
        <motion.div
            initial={{y:100 , opacity:0}}
            whileInView={{y:0 , opacity:1}}
            transition={{duration:0.3 , ease:easeOut , delay:0.1}}
            viewport={{once:"true"}}
        
        className='max-w-[70vw] m-auto bg-white flex gap-10 rounded-2xl z-10 relative p-10'>
            {feature.map((el,index)=>(
            <motion.div
                initial={{y:-20 , opacity:0}}
                whileInView={{y:0 , opacity:1}}
                transition={{duration:0.5 , ease:easeOut , delay:index*0.5}}
            className='flex gap-5 w-full items-center justify-center'>
                <div>
                    <img src={el.img} alt="" />
                </div>
                <div>
                    <div>
                        <h1 className='text-sm font-semibold'>{el.title}</h1>

                    </div>
                    <div>
                        <p className='text-xs'>{el.desc}</p>
                    </div>

                </div>

            </motion.div>))}

        </motion.div>
    </div>
  )
}

export default Hero