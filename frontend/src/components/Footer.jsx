import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='md:w-full lg:h-full flex  bg-gradient-to-t from-gray-100 to-gray-200 '>
      {/* left */}
        <div className='flex flex-col gap-5 w-[36vh] mx-60 my-20 '>
          <div className='flex items-center gap-5'>
            <Image 
            src="/logo.png" 
            alt=""
            width={50}
            height={50} />
            <Image 
            src="/LaslesVPN.png" 
            alt=""
            width={130}
            height={50} />
            </div>
            <p className='text-[#4F5665] '> <a className='font-bold '>LaslesVPN</a> is a private virtual network that has unique features and has high security.</p>
            <div className='w-full h-full grid grid-cols-3'>
            <Image className=' '
            src="/Facebook.png" 
            alt=""
            width={75}
            height={75} />
            <Image 
            src="/Twitter.png" 
            alt=""
            width={75}
            height={75} />
            <Image 
            src="/Instagram.png" 
            alt=""
            width={75}
            height={75} />
            </div>
                  <div>
                    <p className='text-[#4F5665] text-xl'>©2020LaslesVPN</p>
                  </div>
        </div>
        {/* middle left */}
        <div className='w-[36vh] my-20'>
          <ul className='flex flex-col gap-3'>
            <li className='font-bold text-[#0B132A] mb-3'>Product</li>
            <li className='text-[#4F5665]'>Download</li>
            <li className='text-[#4F5665]'>Pricing</li>
            <li className='text-[#4F5665]' >Locations</li>
            <li className='text-[#4F5665]'>Server</li>
            <li className='text-[#4F5665]'>Countries</li>
            <li className='text-[#4F5665]'>Blog</li>
          </ul>
        </div>
        {/* middle right */}
        <div className='w-[36vh] my-20 '>
          <ul className='flex flex-col gap-3'>
            <li className='font-bold text-[#0B132A] mb-3'>Engage</li>
            <li className='text-[#4F5665]'>LaslesVPN ? </li>
            <li className='text-[#4F5665]'>FAQ</li>
            <li className='text-[#4F5665]' >Tutorials</li>
            <li className='text-[#4F5665]'>About Us</li>
            <li className='text-[#4F5665]'>Privacy Policy</li>
            <li className='text-[#4F5665]'>Terms of Service</li>
          </ul>
        </div>
        {/* right */}
        <div className='w-[36vh] my-20'>
          <ul className='flex flex-col gap-3'>
            <li className='font-bold text-[#0B132A] mb-3'>Earn Money</li>
            <li className='text-[#4F5665]'>Affiliate</li>
            <li className='text-[#4F5665]'>Become Partner</li>
          </ul>
        </div>
    </div>
  )
}

export default Footer