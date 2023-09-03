"use client";
import React from "react";
import matic from "@/public/assets/matic.png";
import world from "@/public/assets/world.png";
import Image from "next/image";
import bluebv from "@/public/assets/bluebv.jpeg";
import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { BsFillArrowLeftCircleFill} from "react-icons/bs";
import CardNft from "@/components/CardNft";
import Select from 'react-select';
import {ArrowDown2} from "iconsax-react"
const Filter = () => {
  const [isopen, setIsopen] = useState(true);
  const type=[
    {
      id:"1",
      type:"Rarity",
      options:[
        { value: 'common', label: 'Common' },
        { value: 'epic', label: 'Epic' },
        { value: 'rare', label: 'Rare' },
        { value: 'legendary', label: 'Legendary' },
        { value: 'volcanic', label: 'Volcanic' },
        { value: 'icy', label: 'Icy' },
        { value: 'mossy', label: 'Mossy' },
        { value: 'sandy', label: 'Sandy' },
        { value: 'woody', label: 'Woody' },
      ]
    },{
      id:"2",
      type:"Runes",
      options:[
        { value: 'common', label: 'Common' },
        { value: 'epic', label: 'Epic' },
        { value: 'rare', label: 'Rare' },
      ]
    }  ];
    const [state, setState] = useState({ Rarity: false, Runes: false });
    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = (selectedOption) => {
      setSelectedOption(selectedOption);
      console.log(`Option selected:`, selectedOption);
    }
    const handleButtonClick = (property) => {
      setState((prevState) => ({
        ...prevState,
        [property]: !prevState[property],
      }));
    };
  return (
    <div className="flex justify-start items-start flex-col min-[600px]:flex-row gap-7 mt-4 text-white ">
      {/*Sidebar */}
      <div
        className={`${
          isopen ? "w-[100%] min-[660px]:w-[56%] lg:w-[24%] xl:w-86" : "w-20"
        } h-screen duration-300 relative border-r-2 bg-gray-950 p-3 border-gray-800 flex flex-col gap-4`}
      >
        <button
          type="button"
          onClick={() => {
            setIsopen(!isopen);
          }}
        >
          <BsFillArrowLeftCircleFill
            className={`absolute top-10 hidden min-[660px]:block -right-3 z-20  text-gray-400 w-6 h-6 cursor-pointer ${
              !isopen && "rotate-180"
            }`}
          />
        </button>
        {isopen ? (
          <p className="font-semibold text-gray-400 flex gap-2">
            FILTERS
            <IoFilterSharp className="text-gray-400 w-6 h-6" />
          </p>
        ) : (
          <div>
            <IoFilterSharp className="text-gray-400 w-6 h-6" />
          </div>
        )}
        {isopen && (
          <div className="mt-5 flex flex-col  gap-3 bg-gray-900 p-3 rounded-lg items-center m-0">
            <Image
              src={bluebv}
              alt="bluebv"
              className={`${isopen ? "w-8 h-8 min-[660px]:w-24 min-[660px]:h-20" : ""} rounded-lg`}
            />
            <div className="flex flex-col gap-1">
              <p className="text-xl font-extrabold text-gray-200 text-center">
                Beast Verse
              </p>
              <div className="flex flex-row gap-5 ">
                <section className="items-center flex gap-2">
                  <Image
                    src={matic}
                    width={20}
                    height={20}
                    className="rounded-md font-extrabold  "
                    alt="matic"
                  />
                  0.00 floor
                </section>
                <section className="items-center flex gap-2">
                  <Image
                    src={matic}
                    width={20}
                    height={20}
                    className="rounded-md font-extrabold "
                    alt="matic"
                  />
                  0.0k volume
                </section>
              </div>
            </div>
          </div>
        )}
        {/*Filtering */}
        {isopen && 
          type.map((item)=>(
            <div className="flex flex-col gap-2 border-b-2 border-gray-700 ">
          <div className="flex justify-between w-[100%] mx-auto items-center  p-3" onClick={() => handleButtonClick(item.type)}
          key={item.id}>
          <p className="font-bold text-lg">{item.type}</p>
          <ArrowDown2 className="text-gray-200 font-bold" size={20}/>   
          </div>
          {
            state[item.type] && (<div className="flex justify-center w-[100%] mx-auto items-center  p-3">
            <Select options={item.options} className="w-[100%] mx-auto  bg-gray-700" onChange={handleChange} 

            isMulti /> 
            </div>)
          }
          </div>))}
      </div>
      {/*Card mapping*/}
      <div className="flex flex-wrap gap-3">
      <CardNft img={world} type="legendary" price="12"/>
      <CardNft img={world} type="legendary" price="12"/>
      <CardNft img={world} type="legendary" price="12"/>
      <CardNft img={world} type="legendary" price="12"/>
      <CardNft img={world} type="legendary" price="12"/>
      <CardNft img={world} type="legendary" price="12"/>
      <CardNft img={world} type="legendary" price="12"/>

      </div>
    </div>
  );
};

export default Filter;