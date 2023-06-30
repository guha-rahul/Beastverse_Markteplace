"use client"
import React,{useState} from 'react'
import Activity from '@/components/Activity';
import Items from '@/components/Items';
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      if (tab === "tab1") {
        console.log("tab1 clicked");
        setTab1(true);
        setTab2(false);
      } else {
        console.log("tab2 clicked");
        setTab1(false);
        setTab2(true);
      }
    }
  }
  return (
    <div>
    <div className='flex flex-row gap-5'>
      <button className={tab1 ? "bg-gray-100 text-gray-900 px-3 py-2 rounded-t-md font-medium" : "bg-gray-900 text-gray-100 px-3 py-2 rounded-t-md font-medium"} onClick={() => toggle("tab1")}>Tab 1</button>
      <button className={tab2 ? "bg-gray-100 text-gray-900 px-3 py-2 rounded-t-md font-medium" : "bg-gray-900 text-gray-100 px-3 py-2 rounded-t-md font-medium"} onClick={() => toggle("tab2")}>Tab 2</button>
    </div>
    {
      activeTab === "tab1" ? <Activity /> : <Items />
    }
    </div>
    
  )
}

export default Tabs
