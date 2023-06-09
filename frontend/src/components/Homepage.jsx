import Image from 'next/image'
import React from 'react'

const Homepage = () => {
  return (
    <div id='/about' className='md:w-full h-full '>
      <div className='flex m-[17vh] pt-20'>
        <div className='md:max-w-[1000px] w-[1600px] md:h-[40vh] flex flex-col p-4 gap-10 ' data-aos="fade-right" data-aos-mirror="true" data-aos-duration="2000">
            <h1 className='max-w-[700px] '>Want anything to be easy with LaslesVPN.</h1>
            <span className='max-w-[620px] '>Provide a network for all your needs with ease and fun using <a className='font-bold text-[#0B132A]'>LaslesVPN</a> discover interesting features from us.</span>
            <button className='h-[60px] w-[250px] bg-[#F53838] rounded font-bold text-white shadow-2xl shadow-[#F53838]'>Get Started</button>
        </div>
        <div className='w-full' data-aos="fade-left" data-aos-mirror="true" data-aos-duration="2000">
        <Image
        src="/main.png"
        alt=""
        width={900}
        height={800} />
        </div>
        </div>
        <div className=' h-[20vh] w-full'>
          <div className='flex justify-center  ' data-aos="zoom-in" data-aos-mirror="true" data-aos-duration="1000">
            <div className='border-r border-[#F53838]  items-center grid grid-cols-2 px-20 ' >
                <Image className=' m-10' 
                src="/user.png"  
                alt=""
                width={50}
                height={50} />
                <div className='pt-3'>
                <h1 className='text-3xl text-[#0B132A]'>90+</h1>
                <p className='text-[#4F5665]'>Users</p>
                </div>
            </div>

            <div className='border-r border-[#F53838]  items-center grid grid-cols-2 px-20  '>
                <Image className=' m-10' 
                src="/location.png"  
                alt=""
                width={50}
                height={50} />
                <div className='pt-3'>
                <h1 className='text-3xl text-[#0B132A]'>30+</h1>
                <p className='text-[#4F5665]'>Locations</p>
                </div>
            </div>

            <div className='  items-center grid grid-cols-2 px-20 '>
                <Image className=' m-10' 
                src="/Server.png"  
                alt=""
                width={50}
                height={50} />
                <div className='pt-3'>
                <h1 className='text-3xl text-[#0B132A]'>50+</h1>
                <p className='text-[#4F5665]'>Servers</p>
                </div>
            </div>
          </div>
      </div>
    </div>
        
  )
}

export default Homepage