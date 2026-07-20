import SearchBar from "../components/SearchBar";
import CurrentWeather from "../components/CurrentWeather";
import WeatherDetails from "../components/WeatherDetails";
import Loading from "../components/Loading";

const Today = ({cityInput, setCityInput, stateInput, setStateInput, handleSubmit, loading, error, weather}) => {
    return ( 
        <>
        <SearchBar
        searchCity = {cityInput}
        setSearchCity = {setCityInput}
        searchState = {stateInput}
        setSearchState = {setStateInput}
        onSubmit = {handleSubmit}
      />
      {loading &&  <Loading/>}

      {error && <p>{error}</p>}


      {weather && (
        <>
          <CurrentWeather weather = {weather}/>
          <WeatherDetails weather = {weather}/>

        </>
      )}
      </>
    );
};
export default Today;