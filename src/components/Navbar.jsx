import React from 'react'
import Avatar from 'react-avatar';
import { CiCircleQuestion, CiSettings } from 'react-icons/ci';
import { IoIosSearch } from 'react-icons/io';
import { PiDotsNineBold } from 'react-icons/pi';
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-3 h-16'>
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'><RxHamburgerMenu size={'20px'}/></div>
                <img className='w-8 bg-transparent' src="https://logowik.com/content/uploads/images/gmail-new-icon5198.jpg" alt="gmail-logo" />
                <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
            </div>
        </div>
        <div className='md:block hidden w-[50%] mr-60'>
            <div className=' flex items-center bg-[#EAF1F8] px-2 py-3 rounded-full'>
                <IoIosSearch size={'24px'} className=' text-gray-700'/>
                <input 
                type='text'
                className='rounded-full w-full bg-transparent outline-none px-1'
                placeholder='Search Mail'
                />
            </div>
        </div>
        <div className=' md:block hidden'>
            <div className='flex items-center gap-2 '>
                <div className=' p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <CiCircleQuestion size={'22px'}/>
                </div>
                <div className=' p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <CiSettings size={'22px'}/>
                </div>
                <div className=' p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <PiDotsNineBold size={'22px'}/>
                </div>
                <div className='cursor-pointer'>
                    <Avatar src='https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=900' round={true} size='40'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar