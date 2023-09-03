import React from 'react'
import Image from 'next/image'
//import Wallet from './Wallet'
import logo from '@/public/assets/BVlogo.png'
import Button from './Button'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center mx-auto bg-gray-900 text-white p-3'>
    <div className='flex justify-center items-center'>
    <Image src={logo} width={50} height={50} />
    <h1 className='font-semibold text-lg'>Beast Verse</h1>
    </div>
      <Button/>

        
    </div>
  )
}

export default Navbar
