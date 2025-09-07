import React from 'react'
import { important } from '../Constant'
const MobileSearch = () => {
  return (
    <div className=' p-2 w-[90vw] m-auto sm:hidden '>
        <form className='flex rounded-xl  bg-[#ffff] cursor-pointer hover:bg-[#F0F2F3] ease-in-out duration-300 transition-all border-2 border-gray-300  ' >
                    <input type="text" className='outline-none font-light p-2 w-[88%]' placeholder='search...' />
                    <button><img src={important.searchImg} alt="" className='size-8 p-2' /></button>
        </form>


    </div>
  )
}

export default MobileSearch