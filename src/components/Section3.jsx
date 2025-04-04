import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import logo from '../assets/flowers.png'
function Section3() {
  return (
    <>
            <div className='md:w-full flex md: bg-white gap-2'>
                    <div className='  md:w-1/2 '>
                       <img src={logo} alt='{logo}'className='md:h-[70%] w-[70%]]'/>
                    </div>
                    <div className='md:w-1/2 md:p-20'>
                       <h2 className='text-black text-4xl font-bold shadow-md shadow-yellow-400 rounded-md'>Work together</h2>
                       <p className='mt-5'>With whitepace, share your notes with your colleagues and collaborate on them.
                        You can also publish a note to the internet and share the URL with others.</p>
                       <button className='bg-blue-400 p-4 flex items-center mt-5 rounded-md text-white'>Let's Go <FaArrowRightLong className='ml-2' /></button>
                    </div>
                  </div>
    
    
    
        </>
  )
}

export default Section3