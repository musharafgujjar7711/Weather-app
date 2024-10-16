import React from 'react'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'

function Sunset({data:{maxTemp,minTemp}}) {
 
  return (
    <div className=' container'>
        <ul className=' flex items-center justify-center gap-16 mt-12 md:mt-32 flex-row sm:flex-row md:flex-row'>
            <li  className=' flex items-center gap-3 text-white text-2xl'><BiUpArrow size={30} className='text-yellow-300'/> {maxTemp.toFixed()}°C</li>
            <li  className=' flex items-center gap-3 text-white text-2xl'><BiDownArrow size={30} className='text-yellow-300'/>{minTemp.toFixed()}°C</li>
        </ul>
    </div>
  )
}

export default Sunset