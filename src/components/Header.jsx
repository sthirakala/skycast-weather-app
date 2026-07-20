import { FaCloudSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="brand">
          <FaCloudSun className="header-icon" />

          <div>
            <h1 className="header-title">
              SkyCast
            </h1>

            <p className="header-subtitle">
              Your Daily Weather Guide
            </p>
          </div>

        </div>
        <nav className='nav'>
          <NavLink 
            to="/" 
            className="nav-link"
          >
            Today's Forecast
          </NavLink>
          <NavLink 
            to="/hourly" 
            className="nav-link"
          >
            Hourly Forecast
          </NavLink>
          <NavLink 
            to="/weekly" 
            className="nav-link"
          >
            Weekly Forecast
          </NavLink>
        </nav>

      </div>

    </header>
  );
};

export default Header;