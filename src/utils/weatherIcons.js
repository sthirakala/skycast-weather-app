import {
  FaSun,
  FaCloudSun,
  FaCloud,
  FaCloudRain,
  FaBolt,
  FaSnowflake,
} from "react-icons/fa";


const weatherIcons = {
  0: {
    icon: FaSun,
    description: "Clear Sky",
    color: "#F6C453"
  },

  1: {
    icon: FaCloudSun,
    description: "Mostly Clear",
    color: "#E8B84B"
  },

  2: {
    icon: FaCloudSun,
    description: "Partly Cloudy",
    color: "#D8A75A"
  },

  3: {
    icon: FaCloud,
    description: "Cloudy",
    color: "#7895A8"
  },

  51: {
    icon: FaCloudRain,
    description: "Light Rain",
    color: "#5FA8D3"
  },

  61: {
    icon: FaCloudRain,
    description: "Rain",
    color: "#4A90C2"
  },

  80: {
    icon: FaCloudRain,
    description: "Rain Showers",
    color: "#43749fff"
  },

  95: {
    icon: FaBolt,
    description: "Thunderstorm",
    color: "#7B6FA8"
  },

  71: {
    icon: FaSnowflake,
    description: "Snow",
    color: "#8CC9E8"
  }
};


export default weatherIcons;