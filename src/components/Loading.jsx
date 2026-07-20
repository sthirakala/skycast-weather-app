import "./css/Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">

      <div className="clouds">
        <div className="cloud cloud-one">
          ☁️
        </div>
        <div className="cloud cloud-two">
          ☁️
        </div>
        <div className="cloud cloud-three">
          ☁️
        </div>

      </div>

      <p>Gathering Your Forecast...</p>

    </div>
  );
};

export default Loading;