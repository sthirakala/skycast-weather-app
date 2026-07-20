import { useState } from "react";
import weatherIcons from "../utils/weatherIcons";
import moonIcons from "../utils/moonIcons";
import {
  WiSunrise,
  WiSunset,
  WiRaindrops,
  WiDaySunny
} from "react-icons/wi";
import "./css/WeeklyWeather.css";


const WeeklyWeather = ({ weather }) => {

  const [selectedDay, setSelectedDay] = useState(null);


  const formatDay = (date) => {
    return new Date(`${date}T12:00:00`).toLocaleDateString([], {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };


  const days = weather.daily.time;


  const moonInfo = selectedDay !== null
    ? moonIcons(weather.moon[selectedDay].moonphase)
    : null;


  const MoonIcon = moonInfo?.icon;

  return (
    <div className="daily-container">

      <h2>7 Day Forecast</h2>
      <div className="daily-grid">

        {days.slice(0, 7).map((day, index) => {


          const weatherInfo =
            weatherIcons[weather.daily.weather_code[index]]
            || weatherIcons[2];


          const WeatherIcon = weatherInfo.icon;


          return (

            <div
              key={day}
              className="daily-card"
              onClick={() => setSelectedDay(index)}
            >

              <p>
                {formatDay(day)}
              </p>


              <WeatherIcon
                className="daily-icon"
                style={{
                  color: weatherInfo.color
                }}
              />


              <h3>
                {Math.round(
                  weather.daily.temperature_2m_max[index]
                )}°F
              </h3>
              <p>
                Low:
                {Math.round(
                  weather.daily.temperature_2m_min[index]
                )}°F
              </p>
            </div>

          );

        })}

      </div>

      {selectedDay !== null && (

        <div className="daily-details">

          <h3>
            {formatDay(weather.daily.time[selectedDay])}
          </h3>


          <div className="weather-details-box">
            <div className="sun-details">


              <p className="sun-info">
                <WiRaindrops className="rain-icon"/>
                Rain Chance:
                {weather.daily.precipitation_probability_max[selectedDay]}%
              </p>

              <p className="sun-info">
                <WiDaySunny className="uv-icon"/>
                Max UV Index:
                {weather.daily.uv_index_max[selectedDay]}
              </p>


              <p className="sun-info">
                <WiSunrise className="sunrise-icon"/>
                Sunrise:

                {new Date(
                  weather.daily.sunrise[selectedDay]
                ).toLocaleTimeString([], {
                  hour:"numeric",
                  minute:"2-digit"
                })}

              </p>
              <p className="sun-info">
                <WiSunset className="sunset-icon"/>
                Sunset:

                {new Date(
                  weather.daily.sunset[selectedDay]
                ).toLocaleTimeString([], {
                  hour:"numeric",
                  minute:"2-digit"
                })}

              </p>


            </div>    
            <div className="moon-details">


              {MoonIcon && (

                <MoonIcon
                  className="moon-icon"
                  style={{
                    color: moonInfo.color
                  }}
                />

              )}


              <h4>
                {moonInfo.description}
              </h4>
            </div>


          </div>


        </div>

      )}
    </div>
  );
};


export default WeeklyWeather;