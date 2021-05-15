import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const showNavBar = () => {
    setShowNav(!showNav);
  };

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">My Movies app</Link>
          </div>

         
         
            <ul className={ showNav ? "nav-links-responsive" : "nav-links"}>
              <li>
                <Link to="/">Watch List</Link>
              </li>
              <li>
                <Link to="/watched">Watched</Link>
              </li>
              <li className="btn">
                <Link to="/add">+ Add</Link>
              </li>
            </ul>
         

          <span className="burger-icon" >
            {
              showNav ? 
            <i className="fa-fw fa fa-times" onClick={showNavBar}></i> : <i className="fas fa-bars" onClick={showNavBar}></i>
            }
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
