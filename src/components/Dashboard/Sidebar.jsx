import React from 'react';
            <img src={houtLogo} alt="" />
import houtLogo from '../../assets/authImages/houtLogo.svg'

const Sidebar = () => {
  return (
    <div className='w-[240px] min-h-screen py-[13px] '>
        <a href="#" className='mb-[22px] block px-[24px]'>
            <img src={houtLogo} alt="" />

        </a>
        <div className='flex flex-col items-start sideBarMain px-[24px]'>
        <a href="#" className='h-[43px] text-14 font-medium sideActive' >Dashboard</a>
        <a href="#" className='h-[43px] text-14 font-medium' >Products</a>
        <a href="#" className='h-[43px] text-14 font-medium' >Inbox</a>
        <a href="#" className='h-[43px] text-14 font-medium' >Order Lists</a>
        
        </div>
    </div>
  )
}

export default Sidebar