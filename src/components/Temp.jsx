import React, { useEffect, useState } from 'react'
import { BsSunrise } from 'react-icons/bs'
import { CiTempHigh } from 'react-icons/ci'
import { GiSunrise, GiWaterDrop } from 'react-icons/gi'
import { WiWindBeaufort12 } from 'react-icons/wi'
import CircularProgressBar from './CircularProgressBar'

function Temp({ weather: { icon, temp, feelslike_c, humidity, wind } }) {

    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage((prev) => {
                if (prev >= humidity) {
                    clearInterval(interval);
                    return humidity;
                }
                return prev + 1; // Increment speed, adjust as needed
            });
        }, 30); // Interval speed in ms, adjust for smoother or faster animation

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [humidity]);



    return (
        <div className=' container'>
            <div className='  mt-10 flex-col md:flex-row md:mt-32 shadow-2xl mb-7 rounded-lg'>



                <div className=' flex items-center justify-around flex-col md:flex-row'>
                    
                    <div className='text-yellow-300  ' >
                        <img src={icon} className='w-[300px] md:w-[500px]' alt="" />
                    </div>
               



                


                <div className=''>
                    <ul className='flex items-center gap-10 mt-8 md:mt-0 mb-7'>
                       


                        <li className="flex flex-col items-center text-blue-600">
                            <CircularProgressBar value={humidity} label="Humidity" color="black" />
                        </li>


                        <li className="flex flex-col items-center ">
                            <CircularProgressBar value={wind.toFixed()}  label="Wind Speed" color="blue" />
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Temp