import React, { useEffect, useState } from 'react';
import { BiLocationPlus } from 'react-icons/bi';

const CurrentLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation(`Latitude: ${latitude.toFixed(4)}, Longitude: ${longitude.toFixed(4)}`);
          },
          (err) => {
            setError('Unable to retrieve your location.');
            console.error(err);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };

    getLocation();
  }, []);

  return (
    <div className='flex items-center md:border rounded-2xl py-2 px-2 md:bg-slate-300 lg:bg-green-500 font-poppins'>
      <BiLocationPlus size={30} className='text-red-500 transition duration-150 ease-out hover:ease-in cursor-pointer' />
      {error ? (
        <p className='text-xl lg:text-xl sm:hidden lg:block text-red-600'>{error}</p>
      ) : (
        <p className='text-xl lg:text-xl sm:hidden lg:block'>{location || 'Fetching location...'}</p>
      )}
    </div>
  );
};

export default CurrentLocation;
