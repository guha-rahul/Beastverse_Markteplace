import React from 'react'
import Image from 'next/image'
import matic from "@/public/assets/matic.png"
const cardNft = ({img,type,price}) => {
  return (
    <div className='bg-gray-950 transition duration-200 hover:bg-gradient-to-b from-gray-950 to-gray-800 border-2 border-gray-800 w-[9.8rem] lg:w-[11.8rem] shadow-xl rounded-lg h-full p-2 flex flex-col gap-2 items-center justify-center '>
    <div className='p-2'>     
     <Image src={img}  className='rounded-md w-full h-36 object-contain  mt-4'/>
    </div>
        <h1 className='text-gray-100 text-center text-[1.2rem] font-medium'>{type}</h1>
        <div className='bg-gray-900/100 flex flex-row gap-2 mb-3 p-1.5 rounded-lg w-[65%] items-center justify-center'>
        <Image src={matic} width={20} height={20} className='rounded-md'/>
        <h1 className='text-gray-100  text-lg font-medium'>{price}</h1>
        </div>
    </div>
  )
}

export default cardNft