import React from 'react';

function ProfileImg(props) {
  return (
    <div className="profile-img" style= {style.imgDiv}>
      <img style={style.img} src={props.src} alt={props.alt}/>
    </div>
  );
}



const style = {
  imgDiv : {
  // width: "80%",
  overflow: "hidden",
  border: "1px solid gray",
  borderRadius: "100%",
  maxWidth: "50px",
  cursor:"pointer",
  width:"50px",
  height:"50px"
},
img : {
  display: "block",
  width: "100%",
  // width:"400px",
  // height:"400px"
}
}

export default ProfileImg;