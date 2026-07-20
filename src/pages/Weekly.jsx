import SearchBar from "../components/SearchBar";
import WeeklyWeather from "../components/WeeklyWeather";
import { Helmet } from "react-helmet-async";
import Loading from "../components/Loading";

const Weekly = ({cityInput, setCityInput, stateInput, setStateInput, handleSubmit, loading, error, weather}) => {
    return ( 
        <>
        <Helmet>
                  <title>SkyCast | Weekly Forecast</title>
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
      {weather && ( <WeeklyWeather weather ={weather}/>

      )}
      </>
    );
};
export default Weekly;