import React from 'react'
import { BsSunrise } from 'react-icons/bs'
import { CiTempHigh } from 'react-icons/ci'
import { GiSunrise, GiWaterDrop } from 'react-icons/gi'
import { WiWindBeaufort12 } from 'react-icons/wi'

function Temp({weather:{icon,temp ,feelslike_c,humidity,wind }}) {
    return (
        <div className=' container'>
            <div className=' flex items-center justify-around mt-10 flex-col md:flex-row md:mt-32'>

               
              
              <div className='temp '>
                    <h1 className=' font-poppins font-bold md:text-6xl text-2xl text-white hidden md:block'>{temp.toFixed()}°C</h1>
                </div>
                <div className='text-yellow-300  hidden md:block' >
                   <img src={icon}  className='' alt="" />
                </div>
             
              
               
              <div className=' md:hidden flex items-center gap-20'>
              <div className=' '>
                    <h1 className=' font-poppins font-bold md:text-6xl text-4xl text-white'>{temp.toFixed()}°C</h1>
                </div>
                <div className='text-yellow-300 '>
                <img src={icon}  className='' alt="" />  
                </div>
              </div>
              

                <div className=''>
                    <ul className='flex items-center gap-4 mt-8 md:mt-0 '>
                        <li className=' flex items-center gap-3 text-white md:text-3xl'><CiTempHigh size={28} className='text-red-700'/>{feelslike_c.toFixed()}°C </li>
                        <li className=' flex items-center gap-3 text-white md:text-3xl'> <GiWaterDrop size={28} className='text-blue-600 '/> {humidity}%</li>
                        <li className=' flex items-center gap-3  md:text-3xl text-white'><WiWindBeaufort12  size={28} className='text-indigo-700-400'/> {wind.toFixed()}km/hr</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Temp