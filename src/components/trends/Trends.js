import React from 'react';


import "./trends.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faCog,
} from "@fortawesome/free-solid-svg-icons";


function Trends(props) {
  const word = "Search Twitter"
  return (
    <aside className="trends">
      <form className="trends-form">
        <input placeholder={`${word}`} className="trends-search" />
      </form>
      <div className="trends-items">
        <h4 className="trends-title">
          <span>Trends for you</span> <FontAwesomeIcon icon={faCog} />
        </h4>
        <div className="trends-ul">
          <div className="trend-card">
            <p className="trending">
              <span>Trending In Nigeria</span>{" "}
              <FontAwesomeIcon icon={faEllipsisH} />
            </p>
            <p className="trend-name">Frontend Development</p>
            <p className="trending">101k Tweets</p>
          </div>
          <div className="trend-card">
            <p className="trending">
              <span>Trending In Nigeria</span>{" "}
              <FontAwesomeIcon icon={faEllipsisH} />
            </p>
            <p className="trend-name">Tech</p>
            <p className="trending">72.2k Tweets</p>
          </div>
          <div className="trend-card">
            <p className="trending">
              <span>Trending In Nigeria</span>{" "}
              <FontAwesomeIcon icon={faEllipsisH} />
            </p>
            <p className="trend-name">Hackathon</p>
            <p className="trending">24.8k Tweets</p>
          </div>
          <div className="trend-card">
            <p className="trending">
              <span>Trending In Nigeria</span>{" "}
              <FontAwesomeIcon icon={faEllipsisH} />
            </p>
            <p className="trend-name">Netlify</p>
            <p className="trending">73.6k Tweets</p>
          </div>
          <div className="trend-card">
            <p className="trending">
              <span>Trending In Nigeria</span>{" "}
              <FontAwesomeIcon icon={faEllipsisH} />
            </p>
            <p className="trend-name">Vercel</p>
            <p className="trending">359.3k Tweets</p>
          </div>
          <div className="trend-card">
            <p className="show-more">Show more</p>
          </div>
        </div>
      </div>
      <div className="trends-footer">
        <p>Terms Of Service</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Ads info</p>
        <p>
          More <FontAwesomeIcon icon={faEllipsisH} />
        </p>
        <p>&copy; 2021 Twitter, Inc</p>
      </div>
    </aside>
  );
}

export default Trends;