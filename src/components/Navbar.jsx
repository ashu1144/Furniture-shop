import React from 'react'
import logo from '../assets/Logo.png'
import search from '../assets/search1.png'
import cart from '../assets/cart.png'
import heart from '../assets/heart 1.png'
import profile from '../assets/Profile.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const goToLogin = () => {
    navigate('/login');  // yeh programmatically navigate karega
  }
   const goToHome = () => {
    navigate('/');  // yeh programmatically navigate karega
  }


  return (
    <div className='flex justify-around text-lg p-4 items-center bg-[#F0F2F3]'>
        {/* flex-1 max-w-sm */}
        <div onClick={goToHome} className='flex  font-bold items-center justify-start gap-2 cursor-pointer'>
            <span className='text-3xl'>Comforty</span>
            <img src={logo} alt="" className='h-8' />
        </div>
        
        <form className='flex rounded-xl  bg-[#ffff] cursor-pointer hover:bg-[#F0F2F3] ease-in-out duration-300 transition-all ' >
            <input type="text" className='outline-none font-light p-2 ' placeholder='search...' />
            <button><img src={search} alt="" className='size-8 p-2' /></button>
        </form>

        <div className='flex gap-4 items-center justify-center'>
            
            <div className='flex gap-2 items-center justify-center p-2 rounded-xl bg-[#ffff] cursor-pointer hover:bg-[#F0F2F3] ease-in-out duration-300 transition-all'>
                <span className='font-light'>Cart</span>
                <img src={cart} alt="" className='h-5' />
                <div className='size-5 bg-green-950 rounded-full text-white text-center'><p className='text-sm'>1</p></div>
            </div>
            <div className='p-2 rounded-xl bg-[#ffff] cursor-pointer hover:bg-[#F0F2F3] ease-in-out duration-300 transition-all '>
                <img src={heart} alt="" className='h-5' />
            </div>
            <div onClick={goToLogin} className='p-2 rounded-xl bg-[#ffff] cursor-pointer hover:bg-[#F0F2F3] ease-in-out duration-300 transition-all '>
                <img src={profile} alt="" className='h-5'/>

            </div>
        </div>

        
    </div>
  )
}

export default Navbar