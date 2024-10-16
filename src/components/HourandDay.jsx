import React from 'react';
import { BiCloudRain } from 'react-icons/bi';

function HourandDay({title,data}) {
 

  return (
    <div className='container bg-gradient-to-r from-slate-900 to-slate-700 rounded-3xl'>
      <div className='flex flex-col mt-8 md:mt-24  text-white rounded-3xl py-3 px-3 mb-10'>
        <h1 className='md:text-4xl text-xl text-white font-poppins font-bold text-center mb-4 md:text-start'>
         {title}
        </h1>
        <hr />
        <div className='flex items-center justify-between flex-col md:flex-row'>
          {data.map((forecast, index) => (
            <div key={index} className='flex md:flex-col mt-7 flex-row gap-10 md:gap-6 items-center text-xl md:text-4xl'>
              <h1>{forecast.last_updated_epoch}</h1>
              <h1>{forecast.weekday}</h1>
             <picture className=''><img src={forecast.icon} alt="" /></picture>
             
             <p>{forecast.temp} <span>{forecast.maxTemp}</span>°C</p>
             
           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HourandDay;
