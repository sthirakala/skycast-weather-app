import weatherIcons from "../utils/weatherIcons";
import "./css/CurrentWeather.css";

const CurrentWeather = ({ weather }) => {

  const weatherInfo =
    weatherIcons[weather.current.weather_code] || weatherIcons[2];

  const WeatherIcon = weatherInfo.icon;


  return (
    <div className="current-weather">
      <div className="weather-header">

        <div>
          <h2>{weather.location}</h2>
          <p>{weatherInfo.description}</p>
        </div>

      </div>


      <div className="temperature-row">

        <div className="temperature">
          {Math.round(weather.current.temperature_2m)}
          <span>°F</span>
        </div>


        <WeatherIcon
          className="temperature-icon"
          style={{ color: weatherInfo.color }}
        />

      </div>


      <p className="feels-like">
        Feels like {Math.round(weather.current.apparent_temperature)}°F
      </p>


    </div>
  );
};


export default CurrentWeather;