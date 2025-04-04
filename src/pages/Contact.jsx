import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import logo from '../assets/clientimg.jpg'
import logo1 from '../assets/clientimg1.jpg'
import logo2 from '../assets/clientimg2.jpg'
function Contact() {
  return (
    <>
    <div className='w-full md:flex md:justify-center md:pt-10 '>
         <h2 className='text-5xl font-bold shadow-md shadow-yellow-300 rounded-md'>What Our Clients Says</h2>
    </div>
   <div className='w-full sm:flex bg-white md:p-20 sm:gap-8 '>
     <div className="lg:pt-2 pt-7 rounded-md  border-none md:w-1/3 p-5 shadow-md shadow-black-100  ">
        <div className=''>
        <FaQuoteLeft className='size-14 fill-blue-950' />
        </div>
        <p className='md:mt-5 '>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>          
        <hr className='border-[1px] md:mt-5'></hr>
        <div className="md:overflow-hidden md:rounded-full w-20 h-20 md:mt-5 flex">
                   <img src={logo} alt='{logo}' className='w-20 h-20 '/>        
                  
         </div>
         <div className=''>
         <h2 className='font-bold text-1xl '>Oberon Shaw, MCH</h2>
         <p className=''>Head of Talent Acquisition, North America</p>
         </div>
      </div>
      <div className="lg:pt-2 pt-7 rounded-md bg-blue-400 border-none md:w-1/3 p-5 shadow-black-100 shadow-md">
        <div className=''>
        <FaQuoteLeft className='size-14 fill-white' />
        </div>
        <p className='md:mt-5 text-white'>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>          
        <hr className='border-[1px] md:mt-5'></hr>
        <div className="md:overflow-hidden md:rounded-full w-20 h-20    md:mt-5">
                   <img src={logo1} alt='{logo}' className='w-20 h-20 '/>           
         </div>
         <div className=''>
         <h2 className='font-bold text-1xl text-blue-950'>Oberon Shaw, MCH</h2>
         <p className='text-white'>Head of Talent Acquisition, North America</p>
         </div>
      </div>
      <div className="lg:pt-2 pt-7 rounded-md bg-blue-400 border-none md:w-1/3 p-5 shadow-black-100 shadow-md ">
        <div className=''>
        <FaQuoteLeft className='size-14 fill-white' />
        </div>
        <p className='md:mt-5 text-white'>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>          
        <hr className='border-[1px] md:mt-5'></hr>
        <div className="md:overflow-hidden md:rounded-full w-20 h-20 md:mt-5">
                   <img src={logo2} alt='{logo}' className='w-20 h-20 '/>           
         </div>
         <div className=''>
         <h2 className='font-bold text-1xl text-blue-950'>Oberon Shaw, MCH</h2>
         <p className='text-white'>Head of Talent Acquisition, North America</p>
         </div>
      </div>
   </div>
    </>
  )
}

export default Contact