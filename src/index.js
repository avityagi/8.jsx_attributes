import React from "react";
import ReactDOM from "react-dom";

const image = "https://picsum.photos/id/237/200/300";
ReactDOM.render(
  <div>
    <h1 className="header">My Favourite Foods</h1>
    <div>
      <img src={image + "?grayscale"} alt="lorem picsum" />
    </div>
  </div>,
  document.getElementById("root")
);
