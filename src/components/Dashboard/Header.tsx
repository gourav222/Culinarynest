import { Link } from "react-router-dom";
import chef from "../../images/chef.png";
import "./Dashboard.css";
import expand from "../../images/Three-line.png";
import { useState } from "react";
import close from "../../images/close.png";
import Navigations from "./Navigations";
const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <header className="header">
      <ul>
        <li>
          <div className="header-section-1">
            <img className="chef-icon" src={chef} alt="" />
            <h3>
              <Link to={"/"}>DishDive</Link>
            </h3>
          </div>
        </li>

        <div className="header-section-2">
          <Navigations
            setShowNavigation={setShowNavigation}
            showNavigation={showNavigation}
          />
        </div>

        {!showNavigation ? (
          <div className="header-section-3">
            <button onClick={() => setShowNavigation(true)}>
              <img src={expand} alt="" />
            </button>
          </div>
        ) : (
          <div className="show-navigation">
            <button onClick={() => setShowNavigation(false)}>
              <img src={close} alt="" />
            </button>

            <div>
              <Navigations
                setShowNavigation={setShowNavigation}
                showNavigation={showNavigation}
              />
            </div>
          </div>
        )}
      </ul>
    </header>
  );
};

export default Header;
