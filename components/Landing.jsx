import React from 'react'
import darkbg from '@/public/assets/darkbg.jpg'
import Image from 'next/image'
import logo from '@/public/assets/BVlogo.png'
import { ImTwitter } from 'react-icons/im'
import { SiDiscord } from 'react-icons/si'
import { Link1 } from 'iconsax-react'
import Tabs from '@/components/tabs'
import Link from 'next/link'
const Landing = () => {
  return (
    <div className="">
  <div
    className=" bg-cover bg-no-repeat bg-center px-4  "
    style={{ backgroundImage: `url(${darkbg.src})` }}
  >
    
  <div className="flex flex-col ">
  <div className=" ml-5 mt-[8.4rem]">
    <div className="flex gap-3">
      <Image src={logo} alt="world" width={120} height={120} />
      <div className="flex gap-3 flex-row justify-center items-center">
        <Link href="https://twitter.com/realbeastverse"><ImTwitter className="text-gray-300 hover:text-white font-extrabold w-7 h-7"/></Link>
        <SiDiscord className="text-gray-300 hover:text-white font-extrabold w-7 h-7"/>
        <Link1 size="24"  className="text-gray-300 hover:text-white font-extrabold w-7 h-7"/>
      </div>
    </div>
    <div></div>
    <div className='flex flex-col gap-1 mb-5'>
    <h1 className="font-extrabold text-[1.6rem] lg:text-[2.2rem] decoration-4 text-white p-2">Beast Verse MarketPlace</h1>
    <div className="text-gray-200 w-[85%] lg:w-[55%] text-[1rem] lg:text-[1.2rem] p-2">Beast Verse is a Play-to-earn PvP NFT game, built on the Polygon Blockchain. We are creating a virtual world where players can explore different terrains, choose their favorite beasts, and fight to victory. Our use of the Polygon Blockchain ensures that the game is secure and transparent, which is essential for players who value their personal information and assets. So, jump into your favorite terrain, choose your favorite beasts, and
     fight your way through to become the Mightiest of All Masters!</div>
    </div>
    
  </div>
</div>
  </div>
  
</div>



  )
}

export default Landing
