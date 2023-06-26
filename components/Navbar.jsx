import React from 'react'
import Image from 'next/image'
import Wallet from './Wallet'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center mx-auto bg-gray-900 text-white p-4'>
       Beast Verse
        <Wallet />
    </div>
  )
}

export default Navbar
