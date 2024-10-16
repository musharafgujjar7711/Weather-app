import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaMoon, FaSun } from 'react-icons/fa';

const cities = ['lahore', 'karachi', 'london', 'new delhi'];

function Navbar({ isNightMode, toggleNightMode, setQuery }) {
  const [currentCity, setCurrentCity] = useState(0);

  const toggleNextClick = () => {
    setCurrentCity((prevIndex) => (prevIndex + 1) % cities.length);
  };

  const togglePrevClick = () => {
    setCurrentCity((prevIndex) => (prevIndex - 1 + cities.length) % cities.length);
  };

  // Update query whenever currentCity changes
  useEffect(() => {
    setQuery({ q: cities[currentCity] });
  }, [currentCity, setQuery]);

  return (
    <div className='relative'>
      <div
        className='container py-5 px-5 text-black'
        style={{ backgroundColor: isNightMode ? "#333" : "#e9d5ff", color: isNightMode ? "#fff" : "#451a03" }}
      >
        <button onClick={toggleNightMode} className="absolute top-4 md:right-11 right-4 ">
          {isNightMode ? <FaSun size={30} className='text-yellow-400' /> : <FaMoon size={30} className='text-black' />}
        </button>

        <div className='flex items-center md:justify-around gap-7 capitalize font-poppins font-bold'>
          <div className='hidden md:flex gap-20 capitalize'>
            {cities.map((city, index) => (
              <button key={index} className='cursor-pointer hover:text-gray-300 lg:text-3xl' onClick={() => setQuery({ q: city })}>
                {city}
              </button>
            ))}
          </div>

          <div className='md:hidden flex items-center justify-around w-full'>
            <button onClick={togglePrevClick} className="cursor-pointer hover:text-gray-300">
              <FaChevronLeft size={30} className='text-gray-500' />
            </button>

            <button className='cursor-pointer hover:text-gray-300 lg:text-3xl capitalize ' onClick={() => setQuery({ q: city })}>
              {cities[currentCity]}
            </button>

            <button onClick={toggleNextClick} className="cursor-pointer hover:text-gray-300">
              <FaChevronRight size={30} className='text-gray-500' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;



