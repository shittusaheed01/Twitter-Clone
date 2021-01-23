import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./navbar.css";

function Navbar(props) {
  return (
    <div className="top-nav">
      <h5 className="home">Home</h5>
      <p>
        <FontAwesomeIcon icon={faStar} />
      </p>
    </div>
  );
}




export default Navbar;