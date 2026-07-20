import weatherIcons from "../utils/weatherIcons";
import "./css/HourlyWeather.css"

const HourlyWeather = ({ weather }) => {

  if (!weather?.hourly) {
    return <p>No hourly data available.</p>;
  }
  const hours = weather.hourly.time;
  const currentTime = new Date();

  const currentHourIndex = hours.findIndex((time) => {
    return new Date(time).getHours() === currentTime.getHours();
  });


  const startIndex = currentHourIndex === -1 ? 0 : currentHourIndex;


  return (
    <div className="hourly-container">
      <h2>Hourly Forecast</h2>
 <div className="hourly-list">
    {hours.slice(startIndex, startIndex + 24).map((time, index) => {

        const actualIndex = startIndex + index;


        const weatherInfo =
          weatherIcons[weather.hourly.weather_code[actualIndex]] || weatherIcons[2];

        const WeatherIcon = weatherInfo.icon;


        return (
          <div
            key={time}
            className="hour-card"
          >

            <p className="hour">
              {new Date(time).toLocaleTimeString([], {
                hour: "numeric",
              })}
            </p>


            <WeatherIcon
              className="hour-icon"
              style={{ color: weatherInfo.color }}
            />
            <h3>
              {Math.round(weather.hourly.temperature_2m[actualIndex])}°F
            </h3>
            <p>
              Feels like {Math.round(weather.hourly.apparent_temperature[actualIndex])}°F
            </p>
            <p>
              Chance of Rain: 
              {weather.hourly.precipitation_probability[actualIndex]}%
            </p>
            <p>
              Precipitation:
              {weather.hourly.precipitation[actualIndex]} in
            </p>

          </div>
        );

      })}

      </div>

    </div>
  );
};

export default HourlyWeather;