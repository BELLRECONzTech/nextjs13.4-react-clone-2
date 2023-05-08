import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='w-full h-full'>
        {/* header */}
        <div className='w-full md:max-h-28 p-8'>
            <div className='justify-items-center items-center grid grid-rows-2'>
                <h1>Choose Your Plan</h1>
                <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            </div>
        </div>

            {/* 3 grid */}
            <div className='w-full h-full'>
                <div className='grid grid-cols-3 p-28 gap-10'>
                    {/* grid 1 */}
                    <div className='w-full h-full border-[2px] border-[#DDDDDD] rounded-2xl flex flex-col items-center pt-20 gap-5'>
                        <Image
                        src="/Free.png" 
                        alt=""
                        width={200}
                        height={200}
                        />
                        <h1 className='text-2xl'>Free Plan</h1>
                        <div className='grid grid-cols-2  justify-items-center w-full items-center'>
                            <Image className=' ' 
                            src="/right.png" 
                            alt=""
                            width={30}
                            height={100} />
                            <p className='absolute text-[#4F5665]'>Unlimited Bandwitch</p>
                        </div>
                        <div className='grid grid-cols-2  justify-items-center w-full items-center'>
                            <Image className=' ' 
                            src="/right.png" 
                            alt=""
                            width={30}
                            height={100} />
                            <p className='absolute text-[#4F5665]'>Encrypted Connection</p>
                        </div>
                        <div className='grid grid-cols-2  justify-items-center w-full items-center'>
                            <Image className=' ' 
                            src="/right.png" 
                            alt=""
                            width={30}
                            height={100} />
                            <p className='absolute text-[#4F5665]'>No Traffic Logs</p>
                        </div>
                        <div className='grid grid-cols-2  justify-items-center w-full items-center'>
                            <Image className=' ' 
                            src="/right.png" 
                            alt=""
                            width={30}
                            height={100} />
                            <p className='absolute text-[#4F5665]'>Works on All Devices</p>
                        </div>

                        <div className='w-full pt-40 flex justify-center flex-col items-center gap-5 pb-20'>
                            <h1 className='text-3xl'>Free</h1>
                            <button className='font-bold  cursor-pointer border-2 px-14 py-3 border-[#F53855] rounded-[55px] text-[#F53855]'> Select</button>
                        </div>     
                    </div>
                    {/* Grid 2 */}
                    <div className='w-full h-full border-[2px] border-[#DDDDDD] rounded-2xl flex flex-col items-center pt-20 gap-5'>
                        <Image
                        src="/Free.png" 
                        alt=""
                        width={200}
                        height={200}
                        />
                        <h1 className='text-2xl'>Standard Plan</h1>
                        <div className='grid grid-cols-2  justify-items-center w-full items-center '>
                            <Image className=' ' 
                            src="/right.png" 
                            alt=""
                            width={30}
                            height={100} />
                            <p className='absolute text-[#4F5665]'>Unlimited Bandwitch</p>
                        </div>
                        <div className='grid grid-cols-2  justify-items-center w-full items-center'>
                            <Image className=' ' 
                            src="/right.png" 
                            alt=""
                            width={30}
                            height={100} />
                            <p className='absolute text-[#4F5665]'>Encrypted Connection</p>
                        </div>
                        <div className='grid grid-cols-2  justify-items-center w-full items-center'>
                            <Image className=' ' 
                            src="/right.png" 
                            alt=""
                            width={30}
                            height={100} />
                            <p className='absolute text-[#4F5665]'>Yes Traffic Logs</p>
                        </div>
                        <div className='grid grid-cols-2  justify-items-center w-full items-center'>
                            <Image className=' ' 
                            src="/right.png" 
                            alt=""
                            width={30}
                            height={100} />
                            <p className='absolute text-[#4F5665]'>Works on All Devices</p>
                        </div>
                        <div className='grid grid-cols-2  justify-items-center w-full items-center'>
                            <Image className=' ' 
                            src="/right.png" 
                            alt=""
                            width={30}
                            height={100} />
                            <p className='absolute text-[#4F5665]'>Connect Anyware</p>
                        </div>

                        <div className='w-full h-full pt-24 flex justify-center flex-col items-center gap-5 pb-20'>
                            <span className='text-3xl font-bold text-[#0B132A]'>$9 <a className=' text-3xl text-[#4F5665]'>/ mo</a> </span>
                            <button className='font-bold  cursor-pointer border-2 px-14 py-3 border-[#F53855] rounded-[55px] text-[#F53855]'> Select</button>
                        </div>     
                    </div>
                    {/* Grid 3 */}
                    <div className='w-full h-full border-[2px] border-[#DDDDDD] rounded-2xl flex flex-col items-center pt-20 gap-5 '>
                        <Image
                        src="/Free.png" 
                        alt=""
                        width={200}
                        height={200}
                        />
                        <h1 className='text-2xl'>Premium Plan</h1>
                        <div className='grid grid-cols-2  justify-items-center w-full items-center'>
                            <Image className=' ' 
                            src="/right.png" 
                            alt=""
                            width={30}
                            height={100} />
                            <p className='absolute text-[#4F5665]'>Unlimited Bandwitch</p>
                        </div>
                        <div className='grid grid-cols-2  justify-items-center w-full items-center'>
                            <Image className=' ' 
                            src="/right.png" 
                            alt=""
                            width={30}
                            height={100} />
                            <p className='absolute text-[#4F5665]'>Encrypted Connection</p>
                        </div>
                        <div className='grid grid-cols-2  justify-items-center w-full items-center'>
                            <Image className=' ' 
                            src="/right.png" 
                            alt=""
                            width={30}
                            height={100} />
                            <p className='absolute text-[#4F5665]'>Yes Traffic Logs</p>
                        </div>
                        <div className='grid grid-cols-2  justify-items-center w-full items-center'>
                            <Image className=' ' 
                            src="/right.png" 
                            alt=""
                            width={30}
                            height={100} />
                            <p className='absolute text-[#4F5665]'>Works on All Devices</p>
                        </div>
                        <div className='grid grid-cols-2  justify-items-center w-full items-center'>
                            <Image className=' ' 
                            src="/right.png" 
                            alt=""
                            width={30}
                            height={100} />
                            <p className='absolute text-[#4F5665]'>Connect Anyware</p>
                        </div>
                        <div className='grid grid-cols-2  justify-items-center w-full items-center'>
                            <Image className=' ' 
                            src="/right.png" 
                            alt=""
                            width={30}
                            height={100} />
                            <p className='absolute text-[#4F5665]'>Get New Features</p>
                        </div>

                        <div className='w-full h-full pt-24 flex justify-center flex-col items-center gap-5 pb-20'>
                            <span className='text-3xl font-bold text-[#0B132A]'>$12 <a className=' text-3xl text-[#4F5665]'>/ mo</a> </span>
                            <button className='font-bold  cursor-pointer  px-14 py-3 rounded-[55px] bg-[#F53855] text-[white]'> Select</button>
                        </div>     
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default Features