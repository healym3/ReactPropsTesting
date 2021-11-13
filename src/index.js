import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      tel="+15234564"
      email="hohw@beyonce.com"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    />
    <Card
      name="Jack"
      tel="+111111"
      email="Jack@gmail.com"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    />
    <Card name="Mac" tel="+18325556844" email="mhhealy@g" img="" />
  </div>,
  document.getElementById("root")
);
