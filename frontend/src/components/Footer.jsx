import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-full bg-gradient-to-t from-gray-100 to-gray-200'>
      {/* left */}
        <div className='flex flex-col gap-5 w-[36vh] m-40 pt-20'>
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
            width={90}
            height={50} />
            <Image 
            src="/Twitter.png" 
            alt=""
            width={90}
            height={50} />
            <Image 
            src="/Instagram.png" 
            alt=""
            width={90}
            height={50} />
            </div>
                  <div>
                    <p className='text-[#4F5665] text-xl'>©2020LaslesVPN</p>
                  </div>
        </div>
        {/* middle left */}
        <div>

        </div>
        {/* middle right */}
        <div>
          
        </div>
        {/* right */}
        <div>

        </div>
    </div>
  )
}

export default Footer