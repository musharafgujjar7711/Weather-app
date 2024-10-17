import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SearchandTime from './components/SearchandTime';
import Temp from './components/Temp';
import Sunset from './components/Sunset';
import HourandDay from './components/HourandDay';
import fetchWeatherData from './components/WeatherService';
import Spinner from './components/Spinner';

function App() {
    const [isNightMode, setIsNightMode] = useState(false);
    const [weather, setWeather] = useState(null);
    const [query, setQuery] = useState({ q: "lahore" });
    const[loading ,setLoading]=useState(true)

    const fetchApi = async () => {
       
        const data = await fetchWeatherData(query.q);
        setLoading(true)
        setWeather(data);
        console.log(data)
        setLoading(false)
    };


    const toggleNightMode = () => {
        setIsNightMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        fetchApi();
    }, [query]);

    useEffect(() => {
        if (isNightMode) {
            document.body.style.backgroundColor = "#94a3b8";
            document.body.style.color = "#1E1E1E";
        } else {
            document.body.style.background = "#0f172a";

            document.body.style.color = "#fff";
        }
    }, [isNightMode]);

    return (
      <div>
         {loading && <Spinner/>}
      {/* <Navbar toggleNightMode={toggleNightMode} isNightMode={isNightMode} setQuery={setQuery} /> */}
     
         { weather && (
              <>
                 
                
                 <SearchandTime   toggleNightMode={toggleNightMode} isNightMode={isNightMode} data={weather.dailyForecast[0]} loading={loading} setQuery={setQuery} weather={weather.current}  />
                 
                
                <Temp isNightMode={isNightMode} weather={weather.current}  />
                
                   <Sunset data={weather.dailyForecast[0]} />
                  <HourandDay title="3 hours to forecast" data={weather.hourlyForecast} />
                  <HourandDay title="Daily forecast" data={weather.dailyForecast} />
              </>
          )
        }
  </div>
    );
}

export default App;
