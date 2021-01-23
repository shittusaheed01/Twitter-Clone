import React, { useState } from "react";
import "../../App.css";

import TweetField from "./Tweetfield/TweetField";
import Navbar from "./Navbar/Navbar";
import Newtweets from "./Newtweets/Newtweets";
import ProfileImg from "../constants/ProfileImg";
import data from "../twitterapi";

function TweetsField() {
  const [tweetsList, settweetsList] = useState(data);
  const [tweetVal, settweetVal] = useState("");
  const handleChange = (e) => {
    settweetVal(e.target.value);
    // console.log(tweetVal)
  };
  const handleClick = (event) => {
    event.preventDefault();
    settweetVal("");
    let arrs = {
      name: "Saheed Shittu",
      handle: "Saheed___",
      image:
        "https://pbs.twimg.com/profile_images/1348207362151223302/I8alATdr_400x400.jpg",
      alt: "image",
      tweet: tweetVal,
      tweetLink: "",
      tweetLinkURL: "",
      tweetLinkImg: "",
      comment: 0,
      retweet: 0,
      likes: 0,
      id: tweetsList.length,
    };
    settweetsList([arrs, ...tweetsList]);
    console.log(tweetVal);
  };
  return (
    <main className="main">
      <Navbar />
      <TweetField
        onChange={handleChange}
        val={tweetVal}
        onClick={handleClick}
        image={ProfileImg}
      />
      {tweetsList.map((item) => (
        <Newtweets
          key={item.id}
          name={item.name}
          handle={item.handle}
          image={item.image}
          alt={item.alt}
          tweet={item.tweet}
          tweetLink={item.tweetLink}
          tweetLinkImg={item.tweetLinkImg}
          tweetLinkURL={item.tweetLinkURL}
          comment={item.comment}
          retweet={item.retweet}
          likes={item.likes}
        />
      ))}
      {/* <Newtweets /> */}
    </main>
  );
}

export default TweetsField;
