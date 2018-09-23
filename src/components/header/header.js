import React from "react";
import "./header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Your Score: {props.score}   Top score: {props.highscore}
    </div>
  </div>
);

export default Header;