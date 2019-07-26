import React from "react";
import "./style.css";

export class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <Link className="navbar-brand" to="/"> */}
        <p>Clicky Game</p>
        {/* </Link> */}
        <p>Click Any Image To Begin!</p>
        <p>Current Score ... || High Score ... </p>
      </nav>
    );
  }
}
