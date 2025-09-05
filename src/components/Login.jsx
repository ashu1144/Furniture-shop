import React from 'react'
import Navbar from './Navbar'
import OfferBanner from './OfferBanner'
import Footer from './Footer'
const Login = () => {
  return (<div>
        <OfferBanner></OfferBanner>
        <Navbar></Navbar>
        <div>
            <div className='w-[85vw]  bg-[#F0F2F3] h-[10vh] m-auto rounded-b-[60px] px-15 py-5'>
                <div className='flex gap-2 font-light'>
                    <h1>Home</h1>
                    <p>{'>'}</p>
                    <h1>login</h1>
                </div>
            </div>


            <div className='min-h-[74.2vh] min-w-full flex items-center justify-center'>
                <div className='min-w-[40vw] min-h-[20vh] shadow-zinc-400 shadow-lg p-5'>
                    <h1 className='text-center text-2xl font-semibold'>Login</h1>
                    <form action="">
                        <input required autoComplete='off' type="text" name='email' placeholder='Enter your email' className=' bg-[#F0F2F3] block p-2  w-full mt-2 rounded-lg' />
                        <input required autoComplete='off' type="text" name='email' placeholder='Enter your email' className='  bg-[#F0F2F3] block p-2 w-full mt-2 rounded-lg' />
                    </form>
                    <div className='flex justify-between mt-2'>
                       <div>
                            <input type="checkbox" id="myCheckbox" className='mt-3 scale-120 ml-2' />
                            <label htmlFor="myCheckbox" className='ml-2'>Remeber Password</label>
                        </div>
                        <h1>Forgot Password</h1>
                    </div>
                    <div className='p-2 text-white'>
                        <button className='w-full bg-[#029FAE] p-1 rounded-lg'>Login</button>
                    </div>
                </div>
            </div>

        </div>

        <Footer></Footer>
  
  </div>)
}

export default Login