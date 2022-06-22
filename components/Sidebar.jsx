import React from 'react'
import Image from 'next/image'
import { ChartBarIcon , HomeIcon , DotsHorizontalIcon , ClockIcon } from '@heroicons/react/solid'
// import { DotsHorixontalIcon , HomeIcon , ClockIcon } from '@heroicons/react/solid'
import { FaMicrophoneAlt } from 'react-icons/fa'
import { RiCompassFill } from 'react-icons/ri'

const Sidebar = () => {
  return (
    <section className='fixed top-0 z-40 flex flex-col p-4 items-center h-screen w-[85px] bg-black space-y-8'>
        {/* //logo */}
      <Image src='https://rb.gy/xkacau' width={56} height={56} objectFit='contain' />
        
        {/* //Icons */}
      <div className='space-y-6 flex flex-col'>
        <HomeIcon className='sidebar-Icon text-white opacity-[0.85]' />
        <RiCompassFill className='sidebar-Icon text-2xl' />
        <FaMicrophoneAlt className='sidebar-Icon ml-1' />
        <ChartBarIcon className='sidebar-Icon' />
        <ClockIcon className='sidebar-Icon' />
        <DotsHorizontalIcon className='sidebar-Icon' />
      </div>
      
    </section>
  )
}

export default Sidebar