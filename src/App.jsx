import { useState, useEffect } from "react";
import stateAbbreviations from "./utils/stateAbbreviations";
import Header from "./components/Header";
import Today from "./pages/Today";
import Hourly from "./pages/Hourly";
import {Routes, Route} from "react-router-dom";
import Weekly from "./pages/Weekly";


const API_URL = import.meta.env.VITE_API_URL;
const GEO_URL = import.meta.env.VITE_GEOCODING_URL;
const VISUAL_KEY = import.meta.env.VITE_VISUAL_CROSSING_KEY; 

const App = () => {
  const [cityInput, setCityInput] = useState(() => {
  const saved = localStorage.getItem("lastLocation");
  return saved ? JSON.parse(saved).city : "";
});

const [stateInput, setStateInput] = useState(() => {
  const saved = localStorage.getItem("lastLocation");
  return saved ? JSON.parse(saved).state : "";
});

  const [location, setLocation] = useState(() => {
    const savedLocation = localStorage.getItem("lastLocation");

    return savedLocation
      ? JSON.parse(savedLocation)
      : {
          city: "",
          state: "",
       };
  });

  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

   const handleSubmit = (e) => {
  e.preventDefault();

  const newLocation = {
    city: cityInput,
    state: stateInput,
  };

  setLocation(newLocation);

  localStorage.setItem(
    "lastLocation",
    JSON.stringify(newLocation)
  );
};


  useEffect(() => {
    const fetchWeather = async () => {
      if (!location.city) return;

      try {
        setLoading(true);
        setError("");

        const normalizedState = stateAbbreviations[location.state.toUpperCase()] || location.state;

        const geoRes = await fetch(
          `${GEO_URL}?name=${encodeURIComponent(location.city)}&count=100&countryCode=US`
        );

        if (!geoRes.ok) {
          throw new Error("Failed to find location");
        }

        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
          throw new Error("City not found");
        }

      
        const place = geoData.results.find((item) =>
    item.admin1?.toLowerCase() === normalizedState.toLowerCase());


        const {
          latitude,
          longitude,
          name,
          country,
          admin1,
        } = place;


        
        const weatherRes = await fetch(
  `${API_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code,precipitation_probability_max,uv_index_max,sunrise,sunset&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto`
);


        if (!weatherRes.ok) {
          throw new Error("Failed to fetch weather");
        }


        const weatherData = await weatherRes.json();

        const moonRes = await fetch(
`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?unitGroup=us&key=${VISUAL_KEY}&include=days&elements=datetime,moonphase,moonrise,moonset`
);


if (!moonRes.ok) {
  throw new Error("Failed to fetch moon data");
}


const moonData = await moonRes.json();




        setWeather({
          ...weatherData,
          moon: moonData.days,
          location: `${name}, ${admin1}, ${country}`,
        });



      } catch (err) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };


    fetchWeather();

  }, [location]);


  return (
    <>

      <Header/>
      <Routes>
        <Route
          path='/'
          element={
            <Today
              cityInput ={cityInput}
              setCityInput={setCityInput}
              stateInput={stateInput}
              setStateInput={setStateInput}
              handleSubmit={handleSubmit}
              loading={loading}
              error={error}
              weather={weather}
            ></Today>
          }
        
        
        >
          </Route>
          <Route
          path='/hourly'
          element={
            <Hourly
              cityInput ={cityInput}
              setCityInput={setCityInput}
              stateInput={stateInput}
              setStateInput={setStateInput}
              handleSubmit={handleSubmit}
              loading={loading}
              error={error}
              weather={weather}
            ></Hourly>
          }
        
        
        >
          </Route>
        <Route
          path='/weekly'
          element={
            <Weekly
              cityInput ={cityInput}
              setCityInput={setCityInput}
              stateInput={stateInput}
              setStateInput={setStateInput}
              handleSubmit={handleSubmit}
              loading={loading}
              error={error}
              weather={weather}
            ></Weekly>
          }
        
        
        >
          </Route>



      </Routes>
    </>
  );
};

export default App;