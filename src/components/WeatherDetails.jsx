import {
  FaDroplet,
  FaWind,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa6";

import "./css/WeatherDetails.css";


const WeatherDetails = ({ weather }) => {

  const details = [
    {
      icon: <FaDroplet />,
      label: "Humidity",
      value: `${weather.current.relative_humidity_2m}%`
    },
    {
      icon: <FaWind />,
      label: "Wind",
      value: `${weather.current.wind_speed_10m} mph`
    },
    {
      icon: <FaArrowUp />,
      label: "High",
      value: `${weather.daily.temperature_2m_max[0]}°F`
    },
    {
      icon: <FaArrowDown />,
      label: "Low",
      value: `${weather.daily.temperature_2m_min[0]}°F`
    }
  ];


  return (
    <div className="details-grid">

      {details.map((item) => (
        <div className="detail-card" key={item.label}>

          <div className="detail-icon">
            {item.icon}
          </div>

          <p>{item.label}</p>

          <h3>{item.value}</h3>

        </div>
      ))}

    </div>
  );
};


export default WeatherDetails;