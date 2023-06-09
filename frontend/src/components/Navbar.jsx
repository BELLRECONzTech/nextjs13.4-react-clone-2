import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    
        <div className='w-full h-20 flex bg-white top-0 left-0 items-center z-[100] fixed px-40 justify-between shadow-lg'>
            <Link href='/'>
            <div className=' flex gap-5  items-center'>
                <Image 
                src="/logo.png" 
                alt=""
                width={40}
                height={30} />
                <Image className=''
                src="/LaslesVPN.png"  
                alt=""
                width={100}
                height={100}
                />
            </div>
            </Link>
        <div className=''>
            <li className='flex gap-20 items-center'>
            <Link href='/#about'>
            <ul className='cursor-pointer hover:md:underline text-[#4F5665]'> About </ul>
            </Link>
            <Link href="/#Features">
            <ul className='cursor-pointer hover:md:underline text-[#4F5665]  '>Features</ul>
            </Link>
            <Link href="/#Pricing">
            <ul className='cursor-pointer hover:md:underline text-[#4F5665]'>Pricing</ul>
            </Link>
            <ul className='cursor-pointer hover:md:underline text-[#4F5665]'>Testimonials</ul>
            <ul className='cursor-pointer hover:md:underline text-[#4F5665]'>Help</ul>
            </li>
        </div>

        <div className=' flex items-center gap-10'>
            <h1 className=' cursor-pointer hover:md:underline text-[24px] text-[#0B132A]'>Sign in</h1>
            <button className='cursor-pointer border-2 px-6 py-3 border-[#F53855] rounded-[55px] text-[#F53855]'>Sign up</button>
    </div>
    </div>
  )
}

export default Navbar