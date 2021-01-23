import React from "react";

import "./sidebar.css";
import image from "../../images/linkedin.jpg";

import ProfileImg from "../constants/ProfileImg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faBell,
  faEnvelope,
  faBookmark,
  faClipboardList,
  faUser,
  faEllipsisH,
  faLeaf,
  faDove
} from "@fortawesome/free-solid-svg-icons";


function sidebar(props) {
  return (
    <div className="sidebar-container">
      <div className="sidebar-features">
        <p id="dove">
          <FontAwesomeIcon icon={faDove} />
        </p>
        <p id="home-icon">
          <FontAwesomeIcon icon={faHome} />
          {props.name ? <span>Home</span> : ""}
        </p>
        <p>
          <FontAwesomeIcon icon={faSearch} />
          {props.name ? <span>Search</span> : ""}
        </p>
        <p>
          <FontAwesomeIcon icon={faBell} />
          {props.name ? <span>Notifications</span> : ""}
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          {props.name ? <span>Messages</span> : ""}
        </p>
        <p>
          <FontAwesomeIcon icon={faBookmark} />
          {props.name ? <span>Bookmarks</span> : ""}
        </p>
        <p>
          <FontAwesomeIcon icon={faClipboardList} />
          {props.name ? <span>List</span> : ""}
        </p>
        <p>
          <FontAwesomeIcon icon={faUser} />
          {props.name ? <span>Profile</span> : ""}
        </p>
        <p id="more">
          <FontAwesomeIcon icon={faEllipsisH} />
          {props.name ? <span>More</span> : ""}
        </p>
        <p id="leaf">
          <FontAwesomeIcon icon={faLeaf} />
          {props.name ? <span>Tweet</span> : ""}
        </p>
      </div>
      <ProfileImg src={image} alt="profile picture" />
    </div>
  );
}

export default sidebar;