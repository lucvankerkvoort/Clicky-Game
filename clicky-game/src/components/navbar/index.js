import React from "react";
import "./style.css";

export class Navbar extends React.Component {
  render() {
    console.log("props inside Navbar", this.props);

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <Link className="navbar-brand" to="/"> */}
        <p>Clicky Game</p>
        {/* </Link> */}
        <p>Click Any Image To Begin!</p>
        <p onChange={this.handleHighScore}>
          Current Score {this.props.score} || High Score {this.props.highScore}
        </p>
      </nav>
    );
  }
}
