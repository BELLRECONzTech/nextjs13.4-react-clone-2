import Image from 'next/image'
import React from 'react'

const Pricing = () => {
  return (
    <div className='md:w-full lg:h-full'>
        {/* HEAD */}
        <div id='Pricing' className='md:flex flex-col items-center gap-10' data-aos="zoom-in">
            <h1>Huge Global Network of Fast VPN</h1>
            <p className='text-[#4F5665]'>See  <a className='font-bold text-[#4F5665]'> LaslesVPN </a> everywhere to make it easier for you when you move locations.</p>
        </div>
        {/* IMG MAPS */}
        <div className='md:w-full lg:h-full   flex justify-center mt-20'data-aos="zoom-out-down">
                <Image 
                src="/map.png" 
                alt=""
                width={1200}
                height={1000}/>
        </div>
        {/* SPONSOR LOGO */}
        <div className='md:w-full lg:h-full flex justify-center my-10' data-aos="flip-left" data-aos-once="false">
            <Image 
            src="/Sponsored.png" 
            alt=""
            width={1100}
            height={200}/>
        </div>
    </div>
  )
}

export default Pricing