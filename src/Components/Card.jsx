import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"


function Card({data , reference}) {
  return (
    <motion.div drag dragConstraints = {reference} className='bg-zinc-900 h-72 w-52 overflow-hidden rounded-[30px] text-white p-6 relative'>
        <FaRegFileAlt />
        <p className=' font-semibold mt-5 text-sm leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full  left-0 '>
            <div className='flex justify-between items-center px-4 mb-3'>
            <h6>{data.filesize}</h6>
            <span className='bg-zinc-700 p-1 rounded-full flex items-center justify-center'>
            {data.close ? <IoMdClose/>: <MdOutlineFileDownload size=".7em" color='#fff'/>}
             
            </span>
            </div>
            <div className='tag w-full py-3 bg-green-600 flex justify-center items-center '>
                <h3 className='text-sm font-semibold'>Downlaod Now</h3>
            </div>
        </div>    
        </motion.div>
  )
}

export default Card