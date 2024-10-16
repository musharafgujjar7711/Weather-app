import React, { useState } from 'react'
import { BiLocationPlus, BiSearch } from 'react-icons/bi'
import { TiMediaPlay } from 'react-icons/ti'
import Spinner from './Spinner'

function SearchandTime({weather:{location,country,weather,currentTime},setQuery,loading ,data:{weekday}}) {
    const[city,setCity]=useState("")
    const clicktoggle=()=>{
      if(city!="")setQuery({q:city})
    }
    const onEventChange=(event)=>{
      if(event.key === "Enter"){
        setQuery({q:city})
        setCity('')
      }
         }
  return (
    <div className=' container'>
        <div className='mt-6 mb-9 flex items-center justify-center gap-3 '>
            {loading && <Spinner/>}
            <div className=' border flex rounded-full bg-gray-500 items-center md:mt-14'>
            <input type="text" onKeyDown={onEventChange}  onChange={(e)=>setCity(e.currentTarget.value)} value={city} placeholder='search here for city weather....' className='p-1 md:p-3 md:w-[300px] w-[190px] outline-none rounded-l-full  text-2xl py-2 px-2 gap-3 text-black'  name="" id="" />
            <BiSearch onClick={clicktoggle}  size={30} className='w-14 ease-in-out cursor-pointer text-xl text-white'/>
            </div>
           
            <div className=' flex items-center gap-4 md:mt-14'>
               
                <BiLocationPlus size={30} className=' text-red-500 transition duration-150 ease-out hover:ease-in cursor-pointer'/>
            </div>
           
           
        </div>
        <div className=' text-center text-white font-poppins text-2xl'>
          {currentTime}-{weekday}
        </div>
        <div className=' text-center font-poppins  mt-9 flex items-center justify-center gap-8'>
         <h2 className='text-4xl font-medium text-white'>{location}-{country.slice(0,3)}</h2>
         <p className=' text-blue-500 font-bold text-xl'>{weather}</p>
        </div>
    </div>
  )
}

export default SearchandTime