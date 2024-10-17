import React from 'react'
import { BsSunrise } from 'react-icons/bs'
import { CiTempHigh } from 'react-icons/ci'
import { GiSunrise, GiWaterDrop } from 'react-icons/gi'
import { WiWindBeaufort12 } from 'react-icons/wi'

function Temp({weather:{icon,temp ,feelslike_c,humidity,wind }}) {
    return (
        <div className=' container'>
            <div className=' flex items-center justify-around mt-10 flex-col md:flex-row md:mt-32 shadow-2xl '>

               
              
              <div className=' flex items-center'>
              <div className='temp flex-1'>
                    <h1 className=' font-poppins font-bold md:text-6xl text-2xl  hidden md:block'>{temp.toFixed()}°C</h1>
                </div>
                <div className='text-yellow-300  hidden md:block flex-1' >
                   <img src={icon}   className='w-[300px]' alt="" />
                </div>
              </div>
             
              
               
              <div className=' md:hidden flex items-center gap-20'>
              <div className=' '>
                    <h1 className=' font-poppins font-bold md:text-6xl text-4xl '>{temp.toFixed()}°C</h1>
                </div>
                <div className='text-yellow-300 '>
                <img src={icon}  className='' alt="" />  
                </div>
              </div>
              

                <div className=''>
                    <ul className='flex items-center gap-4 mt-8 md:mt-0 '>
                        <li className=' flex items-center gap-3 md:text-3xl'><CiTempHigh size={28} className='text-red-700'/>{feelslike_c.toFixed()}°C </li>
                        <li className=' flex items-center gap-3  md:text-3xl'> <GiWaterDrop size={28} className='text-blue-600 '/> {humidity}%</li>
                        <li className=' flex items-center gap-3  md:text-3xl '><WiWindBeaufort12  size={28} className='text-indigo-700-400'/> {wind.toFixed()}km/hr</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Temp