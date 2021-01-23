import React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faLink,
  faComment,
  faRetweet,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

import ProfileImg from "../../constants/ProfileImg";

import "./Newtweets.css"


function Newtweets({name, handle, image, alt, tweet, tweetLink, tweetLinkImg, tweetLinkURL, comment, retweet, likes }) {
  console.log()
  return (
    <div className="tweets-card">
      <ProfileImg src={image} alt={alt} />

      <div className="tweet-card-container">
        <div className="tweep">
          <p className="tweep-name">
            {name} <span className="user-handle">@{handle}</span>
          </p>
          <p className="tweep-more">
            <FontAwesomeIcon icon={faEllipsisH} />
          </p>
        </div>
        <p className="tweet-details">{tweet}</p>

        {tweetLinkImg === "" ? (
          ""
        ) : (
          <div className="tweet-link">
            <div className="link-img-div">
              <img className="link-img" src={tweetLinkImg} alt={alt} />
            </div>
            <div className="link-p">
              <p className="link-details">{tweetLink}</p>
              <p className="link-url">
                <FontAwesomeIcon icon={faLink} />
                <span>{tweetLinkURL}</span>
              </p>
            </div>
          </div>
        )}

        <div className="tweet-engagement">
          <p>
            <FontAwesomeIcon icon={faComment} /> <span>{comment}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faRetweet} />
            <span>{retweet}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faHeart} />
            <span>{likes}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faHeart} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newtweets;
