import React from 'react';

import "./tweetfield.css"
import image from "../../../images/linkedin.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faSmile,
  faCalendar,
  faStream,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

import ProfileImg from "../../constants/ProfileImg";

function TweetField(props) {

  return (
    <div className="tweet-container">
      <div className="text-container">
        <div className="img-div">
          <ProfileImg src={image} alt="profile image" />
        </div>
        <textarea value={props.val} onChange={e => props.onChange(e)}  className="textarea" placeholder="What's happening" />
      </div>
      <div className="icons-div">
        <div>
          <p>
            <FontAwesomeIcon icon={faImage} />
          </p>
          <p>
            <FontAwesomeIcon icon={faSquare} />
          </p>
          <p>
            <FontAwesomeIcon icon={faStream} />
          </p>
          <p>
            <FontAwesomeIcon icon={faSmile} />
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendar} />
          </p>
        </div>
        <button onClick={props.onClick}>Tweet</button>
      </div>
    </div>
  );
}

export default TweetField;