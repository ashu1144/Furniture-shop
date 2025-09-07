import React from 'react'
import { useNavigate } from 'react-router-dom';
import { important } from '../Constant';

const Navbar = () => {
    const navigate = useNavigate();
    const goToLogin = () => {
    navigate('/Login');  // yeh programmatically navigate karega
  }
   const goToHome = () => {
    navigate('/');  // yeh programmatically navigate karega
  }


  return (
    <div className='flex justify-around max-sm:justify-between text-lg p-4 items-center bg-[#F0F2F3]'>
        {/* flex-1 max-w-sm */}
        <div onClick={goToHome} className='flex  font-bold items-center justify-start gap-2 cursor-pointer'>
            <span className='text-3xl max-sm:text-2xl'>Comforty</span>
            <img src={important.logoImg} alt="" className='h-8 max-sm:h-6' />
        </div>
        
        <form className='flex rounded-xl  bg-[#ffff] cursor-pointer hover:bg-[#F0F2F3] ease-in-out duration-300 transition-all max-sm:hidden  ' >
            <input type="text" className='outline-none font-light p-2 ' placeholder='search...' />
            <button><img src={important.searchImg} alt="" className='size-8 p-2' /></button>
        </form>

        <div className='flex max-sm:gap-1 gap-4 items-center justify-center'>
            
            <div className='flex gap-2 max-sm:gap-1  items-center justify-center p-2 max-sm:p-1 rounded-xl bg-[#ffff] cursor-pointer hover:bg-[#F0F2F3] ease-in-out duration-300 transition-all'>
                <span className='font-light'>Cart</span>
                <img src={important.cartImg} alt="" className='h-5' />
                <div className='  size-5 bg-green-950 rounded-full text-white text-center'><p className='text-sm'>1</p></div>
            </div>
            <div className='p-2 rounded-xl bg-[#ffff] cursor-pointer hover:bg-[#F0F2F3] ease-in-out duration-300 transition-all '>
                <img src={important.heartimg} alt="" className='h-5' />
            </div>
            <div onClick={goToLogin} className='p-2 rounded-xl bg-[#ffff] cursor-pointer hover:bg-[#F0F2F3] ease-in-out duration-300 transition-all '>
                <img src={important.profileImg} alt="" className='h-5'/>

            </div>
        </div>

        
    </div>
  )
}

export default Navbar