import React from 'react'
import { easeInOut, easeOut, motion } from "framer-motion";

const Categories = () => {

    const catItems = [{title :"Home",redirect:"#home" } ,{title :"Products",redirect:"#ourproducts" },{title :"Categories",redirect:"#topcat" },{title :"About Us",redirect:"#aboutus" }]
    const contact = "(808)555-0111"
  return (
    <div className='p-5 max-sm:p-2 '>
        <div className='font-light flex justify-between max-w-[75vw] max-sm:w-full max-sm:m-0 m-auto items-center'>

            <div className='flex gap-5 max-sm:px-4 max-sm:py-0 max-sm:gap-2 items-center'>
                <div span className=' max-sm:text-xs max-sm:p-2 w-26 font-semibold border-2 border-zinc-200 rounded-2xl p-2 cursor-pointer hover:bg-green-950 hover:text-white ease-in-out duration-300 transition-all '>All Categories</div>
                <div className='flex gap-5 max-sm:gap-4 items-center w-full '>
                    {catItems.map((item,index)=>(
                        <motion.a
                        initial={{y:-20 , opacity:0}}
                        animate={{y:0 , opacity:1}}
                        transition={{duration:0.3 , ease:easeOut , delay:index*0.2}}
                        className='cursor-pointer hover:underline p-0 max-sm:text-[12px]'
                         href={item.redirect}
                         
                         >{item.title}</motion.a>))}
                </div>
            </div>

            <div>
                <span className='max-sm:hidden'>contact-<span className='font-medium cursor-pointer'>{contact}</span></span>
            </div>

        </div>
    </div>
  )
}

export default Categories