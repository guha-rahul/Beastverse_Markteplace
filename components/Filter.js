"use client"
import React from 'react'
import {HiFilter} from 'react-icons/hi'
import {useState} from 'react'
import {BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill} from 'react-icons/bs'
import bluebv from '@/public/assets/bluebv.jpeg'
const Filter = () => {
    const [isopen, setIsopen] = useState(true);
  return (
    <div className='flex text-white mr-6'> 
      {/*Sidebar */}
        <div className={`${isopen?"w-60":"w-20"} h-screen  relative border-2 bg-gray-950  border-gray-700`} >
        <button type="button" onClick={()=>{console.log("HEllo")}}>        
        <BsFillArrowLeftCircleFill className={`absolute top-20 -right-3 z-50  text-white w-8 h-8 cursor-pointer `}/>
        </button>
        Hiii
        </div>
    </div>
  )
}

export default Filter
