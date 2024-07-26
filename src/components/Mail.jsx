import React from 'react'
import {
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdDeleteOutline,
    MdOutlineReport,
    MdOutlineMarkEmailUnread,
    MdOutlineWatchLater,
    MdOutlineAddTask,
    MdOutlineDriveFileMove }
    from 'react-icons/md'
import { BiArchive } from 'react-icons/bi' 
import { motion } from 'framer-motion'   
import { IoMdArrowBack, IoMdMore } from 'react-icons/io'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'

const Mail = () => {
    const navigate = useNavigate()
    const {selectedEmail} = useSelector(store => store.appSlice)
    const params = useParams()
    const deleteMailById = async (id) => {
        try {
            await deleteDoc(doc(db, 'emails', id))
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <motion.div 
    initial={{opacity:0, y:20}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5}}
    className='flex-1 bg-white rounded-xl mx-5'>
        <div className='flex items-center justify-between px-4'>
            <div className='flex items-center gap-2 py-2 text-gray-700'>
                <div onClick={() => navigate('/')} className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <IoMdArrowBack/>
                </div>
                <div className='p-2 rounded-full hover:bg-yellow-200 cursor-pointer'>
                    <MdOutlineReport/>
                </div>
                <div onClick={() => deleteMailById(params.id)} className='p-2 rounded-full hover:bg-red-200 cursor-pointer'>
                    <MdDeleteOutline/>
                </div>
                <div className='p-2 rounded-full hover:bg-blue-200 cursor-pointer'>
                    <MdOutlineMarkEmailUnread/>
                </div>
                <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <MdOutlineWatchLater/>
                </div>
                <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <MdOutlineAddTask/>
                </div>
                <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <MdOutlineDriveFileMove/>
                </div>
                <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <IoMdMore/>
                </div>
               
            </div>
            <div className='flex items-center gap-2'>
                 <button className='hover:rounded-full hover:bg-gray-100'><MdKeyboardArrowLeft size={'24px'}/></button>
                 <button className='hover:rounded-full hover:bg-gray-100'><MdKeyboardArrowRight size={'24px'}/></button>
            </div>
        </div>
        <div className='h-[90vh] overflow-y-auto p-4'>
            <div className='flex items-center justify-between bg-white gap-1'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-xl font-medium'>{selectedEmail?.subject}</h1>
                    <span className='text-sm bg-gray-200 rounded-md px-2'>inbox</span>
                </div>
                <div className='flex-none text-gray-400 text-sm'>
                    <p>{new Date(selectedEmail?.createdAt?.seconds*1000).toUTCString()}</p>
                </div>
            </div>
            <div className='text-gray-500 text-sm'>
                <h1>{selectedEmail?.to}</h1>
                <span>to me</span>
            </div>
            <div className='my-10'>
                <p>{selectedEmail?.message}</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Mail