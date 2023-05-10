import Image from 'next/image'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const Helps = () => {
  return (
    <div id='help' className='w-full h-full'>
      <div className='w-auto h-20 grid grid-cols-1 text-center gap-10 m-auto mt-20 ' data-aos="flip-left" data-aos-once="true" >
        <h1 className='text-[#0B132A]'>Trusted by Thousands of Happy Customer</h1>
        <h2 className='text-[#4F5665]'>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</h2>
      </div>

      {/* CARD 3 ! */}
      <div className='w-full h-full grid grid-cols-3 gap-10 px-20 my-10' data-aos="zoom-in-down"
      data-aos-once="true">
        <div className='w-full md:h-[20rem] my-[10rem] border-[2px] rounded-[2rem] gap-10 hover:border-[#F53838]'>
          <div className='flex m-10 gap-4'>
            <Image className=''
            src="/Ellipse1.png" 
            alt=""
            width={50}
            height={50}/>
            <div className=''>
            <span className='font-bold text-[#0B132A]'>Viezh Robert</span>
            <p className='text-[#4F5665] text-sm'>Warsaw, Poland</p>
            </div>

              <div className=' flex items-center gap-5 ml-auto'>
                <p>4.5 </p>
                <AiFillStar style={{color: 'yellow'}} size={20}/>
              </div>
            </div>
            <div className='m-10 text-justify'>
                <a className='text-[#0B132A] text-[1.5rem]'>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</a>
              </div>
        </div>
        
        <div className='w-full md:h-[20rem] my-[10rem] border-[2px] rounded-[2rem] gap-10 hover:border-[#F53838]'>
          <div className='flex m-10 gap-4' >
            <Image className=''
            src="/Ellipse1.png" 
            alt=""
            width={50}
            height={50}/>
            <div className=''>
            <span className='font-bold text-[#0B132A]'>Viezh Robert</span>
            <p className='text-[#4F5665] text-sm'>Warsaw, Poland</p>
            </div>

              <div className=' flex items-center gap-5 ml-auto'>
                <p>4.5 </p>
                <AiFillStar style={{color: 'yellow'}} size={20}/>
              </div>
            </div>
            <div className='m-10 text-justify'>
                <a className='text-[#0B132A] text-[1.5rem]'>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</a>
              </div>
        </div>
        <div className='w-full md:h-[20rem] my-[10rem] border-[2px] rounded-[2rem] gap-10 hover:border-[#F53838]'>
          <div className='flex m-10 gap-4'>
            <Image className=''
            src="/Ellipse1.png" 
            alt=""
            width={50}
            height={50}/>
            <div className=''>
            <span className='font-bold text-[#0B132A]'>Viezh Robert</span>
            <p className='text-[#4F5665] text-sm'>Warsaw, Poland</p>
            </div>

              <div className=' flex items-center gap-5 ml-auto'>
                <p>4.5 </p>
                <AiFillStar style={{color: 'yellow'}} size={20}/>
              </div>
            </div>
            <div className='m-10 text-justify'>
                <a className='text-[#0B132A] text-[1.5rem]'>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</a>
              </div>
        </div>
      </div>

      <div className='w-full h-full flex pl-80 gap-10' >
        <div className='w-[90%] h-full '>
            <h1 className=''>Subscribe Now for Get Special Features!</h1>
            <p className='pt-5'>Let's subscribe with us and find the fun.</p>
        </div>
        <div className='w-full h-[15rem] flex items-center pl-80 ' >
              <button className='h-[60px] w-[250px]  bg-[#F53838] rounded font-bold text-white shadow-2xl shadow-[#F53838]'>Subscribe Now</button>
        </div>
      </div>
    </div>
  )
}

export default Helps