import SearchBar from "../components/SearchBar";
import HourlyWeather from "../components/HourlyWeather";
import { Helmet } from "react-helmet-async";
import Loading from "../components/Loading";

const Hourly = ({cityInput, setCityInput, stateInput, setStateInput, handleSubmit, loading, error, weather}) => {
    return ( 
        <>
        <Helmet>
          <title>SkyCast | Hourly Forecast</title>
        </Helmet>
        <SearchBar
        searchCity = {cityInput}
        setSearchCity = {setCityInput}
        searchState = {stateInput}
        setSearchState = {setStateInput}
        onSubmit = {handleSubmit}
      />
      {loading && <Loading/>}

      {error && <p>{error}</p>}


      {weather && ( <HourlyWeather weather ={weather}/>

      )}
      </>
    );
};
export default Hourly;