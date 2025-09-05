import React from 'react'
import logo from '../assets/Logo.png'
import twitter from '../assets/SocialMedia/twitter.png'
import pinest from '../assets/SocialMedia/Pinest.png'
import instagram from '../assets/SocialMedia/instagram.png'
import youtube from '../assets/SocialMedia/twitter.png'
import facebook from '../assets/SocialMedia/Youtube.png'


const Footer = () => {
  return (
    <div id='aboutus' className='bg-[#F0F2F3]'>
    <div className='max-w-[70vw] m-auto flex justify-between py-10'>
        <div className='max-w-sm flex flex-col gap-5'>
            <div className='flex items-center gap-2 '>
                <img src={logo} alt="" className='inline' />
                 <span className='text-xl'>Comforty</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore error fuga debitis qui consectetur saepe enim. Esse, deleniti fugiat.</p>
            <div className='flex gap-2'>
                <img src={twitter} alt="" />
                <img src={pinest} alt="" />
                <img src={instagram} alt="" />
                <img src={youtube} alt="" />
                <img src={facebook} alt="" />
            </div>
        </div>
        <div className='flex flex-col gap-5'>
            <h1>CATEGORY</h1>
            <div className='flex flex-col gap-2'>
                <p>Sofa</p>
                <p>Armchair</p>
                <p>wing Chair</p>
                <p>wooden Chair</p>
                <p>Park Bench</p>
            </div>
        </div>
        <div className='flex flex-col gap-5'>
            <h1>SUPPORT</h1>
            <div className='flex flex-col gap-2'>
                <p>Help & Support</p>
                <p>Term & Condition</p>
                <p>Privacy</p>
                <p>Help</p>
            </div>
        </div> 
        <div className='flex flex-col gap-5  '>
            <h1>NEWS LETTER</h1>
            <div className='max-w-[220px] flex flex-col gap-2  '>
                <form action="" className='border-2 border-zinc-200' >
                    <input type="text" placeholder='Enter your opinions' />
                </form>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, provident.</p>
            </div>

        </div>

    </div>
    </div>
  )
}

export default Footer