import React, { useState } from 'react'
import { BiLocationPlus, BiSearch } from 'react-icons/bi'
import { TiMediaPlay } from 'react-icons/ti'
import Spinner from './Spinner'
import { FaMoon, FaSun } from 'react-icons/fa'

function SearchandTime({weather:{location,country,weather,currentTime},setQuery,loading, isNightMode, toggleNightMode ,data:{weekday}}) {
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
        
            {loading && <Spinner/>}
             
            <div className=' flex items-center  justify-between py-5 px-5 md:gap-0 gap-6 rounded-xl shadow-2xl'>
          <div>
          <button onClick={toggleNightMode} className=" ">
          {isNightMode ? <FaSun size={30} className='text-yellow-400' /> : <FaMoon size={30} className='text-black' />}
        </button>
          </div>
        
            <div className=' border flex  items-center rounded-full '>
            <div>
            <BiSearch onClick={clicktoggle}  size={30} className='md:w-14 w-10 ease-in-out cursor-pointer text-xl '/>
            </div>
           <div>
           <input type="text" onKeyDown={onEventChange}  onChange={(e)=>setCity(e.currentTarget.value)} value={city} placeholder='search here for city weather....' className='p-1 bg-inherit md:p-3 lg:w-[500px] w-[140px]  sm:w-[300px] placeholder-gray-500  outline-none md:text-2xl   text-lg md:py-2 md:px-2 gap-3 '  name="" id="" />
           </div>
           
            </div>
           
            <div className='flex items-center md:border rounded-2xl py-2 px-2 md:bg-slate-300 lg:bg-green-500 font-poppins'>
               
                <BiLocationPlus  size={30} className=' text-red-500 transition duration-150 ease-out hover:ease-in cursor-pointer'/>
                <p className='  text-xl lg:text-xl sm: hidden  lg:block'> Current locaton</p>
            </div>
           
          
           
        </div>
       <div className='shadow-2xl text-center mt-10 '>
       <div className=' text-center font-poppins  mt-9 flex items-center justify-center gap-8'>
         <h2 className='text-4xl font-medium '>{location}-{country.slice(0,3)}</h2>
         <p className=' text-blue-500 font-bold text-xl'>{weather}</p>
        </div> 
       <div className=' text-center  font-poppins text-2xl lg:mt-20 mt-8 sm:mt-14 flex flex-col items-center md:flex-row md:justify-center'>
       <b>{weekday}</b>-<span className='text-gray-900'>{currentTime}</span>
        </div>
       </div>
    </div>
  )
}

export default SearchandTime