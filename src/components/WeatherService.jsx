import { DateTime } from "luxon";

// Update the fetchWeatherData function
const fetchWeatherData = async (city) => {
    const API_KEY = "68b9ebe8c6564a9e88c155416241610"; // WeatherAPI Key
    const BASE_URL = "http://api.weatherapi.com/v1/";

    // Function to get formatted time in 12-hour format with AM/PM
    const convertSecondsToTime = (seconds) => {
        return DateTime.fromSeconds(seconds).toFormat('hh:mm a');
    };

    // Fetch current weather data
    const currentUrl = `${BASE_URL}current.json?key=${API_KEY}&q=${city}&aqi=no`;
    const currentResponse = await fetch(currentUrl);
    const currentData = await currentResponse.json();

    // Fetch forecast data (next 7 days)
    const forecastUrl = `${BASE_URL}forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`;
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    // Prepare the response object
    const weatherData = {
        current: {
            humidity: currentData.current.humidity,
            location: currentData.location.name,
            last_updated_epoch: convertSecondsToTime(currentData.current.last_updated_epoch),
            country: currentData.location.country,
            temp: currentData.current.temp_c,
            weather: currentData.current.condition.text,
            icon: currentData.current.condition.icon,
            wind: currentData.current.wind_kph,
            visibility: currentData.current.vis_km,
            currentTime: currentData.location.localtime,
            feelslike_c: currentData.current.feelslike_c,

        },
        hourlyForecast: forecastData.forecast.forecastday[0].hour.slice(0, 5).map(item => ({
            time: item.time,
            last_updated_epoch: convertSecondsToTime(currentData.current.last_updated_epoch),
            temp: item.temp_c,
            weather: item.condition.text,
            icon: item.condition.icon,
        })),
        dailyForecast: forecastData.forecast.forecastday.slice(0, 5).map(item => {
            const date = new Date(item.date);
            return {
                date: item.date,
                weekday: date.toLocaleDateString('en-US', { weekday: 'long' }),
                maxTemp: item.day.maxtemp_c,
                minTemp: item.day.mintemp_c,
                weather: item.day.condition.text,
                icon: item.day.condition.icon,
            };
        }),
    };

    console.log("Weather Data:", weatherData);
    return weatherData;
};
export default fetchWeatherData;



