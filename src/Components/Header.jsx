import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed w-full flex items-center justify-end z-10 py-20 px-10'>
        <button className='bg-black px-11 py-3 rounded-full border-4 text-m hover:bg-gray-500 font-[anzo3] font-semibold'>Hire me</button>
        <i className="ri-more-2-fill text-2xl ml-2"></i>
    </div>
  )
} 

export default Header