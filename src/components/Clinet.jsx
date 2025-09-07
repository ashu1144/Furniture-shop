import React from 'react'
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'
import profile from '../assets/Profile.png'
import {easeOut, motion } from "framer-motion";
const Clinet = () => {
  return (
    <motion.div
    initial={{y:30 , opacity:0}}
    whileInView={{y:0 , opacity:1}}
    transition={{duration:0.3 , ease:easeOut , delay:0.2}}
    viewport={{ once: true }}
    
    className='bg-[#F0F2F3]'>
        <div className='max-w-[70vw] max-sm:max-w-[90vw] m-auto py-5'>

             <div className='flex items-center max-w-[70vw] m-auto justify-center pt-5'>
                            <h1 className='text-2xl font-semibold'>What Clients Say About Us</h1>
                </div>
            
            <div className='flex gap-5 py-10'>
                <motion.div
                initial={{y:30 , opacity:0}}
                whileInView={{y:0 , opacity:1}}
                transition={{duration:0.3 , ease:easeOut , delay:0.5}}
                viewport={{ once: true }} 
                 className=' bg-white rounded-2xl p-5'>
                    <div className='flex gap-3 '>
                        <div className='min-w-[1px] min-h-full bg-green-950'></div>
                        <div>
                            <p className='max-sm:line-clamp-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus facere et quos amet magni totam adipisci ullam obcaecati, ratione fugit incidunt ea commodi quaerat sit natus tempora quas, iste reprehenderit!</p>
                        </div>
                    </div>
                    <div className='mt-4 flex gap-2 items-center justify-start'>
                        <div className='w-10 h-10 rounded-full border-2 border-zinc-400 p-2 '><img src={profile} alt="" /></div>
                        <div>
                            <h py-51 className='text-sm font-semibold'>hardik pandey</h>
                            <p className='text-xs font-light'>bohot acha hai janab </p>
                        </div>
                    </div>
                </motion.div>

                 <motion.div
                 initial={{y:30 , opacity:0}}
                 whileInView={{y:0 , opacity:1}}
                 transition={{duration:0.3 , ease:easeOut , delay:0.8}}
                 viewport={{ once: true }} 
                  className=' bg-white rounded-2xl p-5'>
                    <div className='flex gap-3'>
                        <div className='min-w-[1px] min-h-full bg-green-950'></div>
                        <div>
                            <p className='max-sm:line-clamp-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus facere et quos amet magni totam adipisci ullam obcaecati, ratione fugit incidunt ea commodi quaerat sit natus tempora quas, iste reprehenderit!</p>
                        </div>
                    </div>
                    <div className='mt-4 flex gap-2 items-center justify-start'>
                        <div className='w-10 h-10 rounded-full  border-2 border-zinc-400 p-2'><img src={profile} alt="" /></div>
                        <div>
                            <h py-51 className='text-sm font-semibold'>hardik pandey</h>
                            <p className='text-xs font-light'>bohot acha hai janab </p>
                        </div>
                    </div>
                </motion.div>


              

            </div>

        </div>
    </motion.div>
  )
}

export default Clinet