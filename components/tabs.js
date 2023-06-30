"use client"
import React,{useState} from 'react'

const tabs = () => {
    const[activeTab,setActiveTab]=useState('items');
    const selected="text-blue-500";
    const notSelected="text-gray-300";
  return (
    <div className=' '>
      <div className='flex flex-row items-center gap-5 bg-gray-900 text-white w-full py-4'>
      <button className={`text-xl font-bold ${activeTab==='items'?selected:notSelected}`} onClick={()=>setActiveTab('items')}>Items</button>
        <button className={`text-xl font-bold ${activeTab==='activity'?selected:notSelected}`} onClick={()=>setActiveTab('activity')}>Activity</button>
      </div>
      
    </div>
  )
}

export default tabs
