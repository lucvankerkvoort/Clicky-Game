import React from "react";
import "./style.css";

export class Navbar extends React.Component {
  handleScore() {
    const guesses = [
      "Click any image to begin",
      "You guessed correctly",
      "You guessed incorrectly"
    ];
    if (this.props.score === 0 && this.props.highScore === 0) {
      return guesses[0];
    } else if (this.props.score != 0) {
      return guesses[1];
    } else if (this.props.score === 0 && this.props.highScore != 0) {
      return guesses[2];
    }
  }
  render() {
    console.log("props inside Navbar", this.props);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <Link className="navbar-brand" to="/"> */}
        <p>Clicky Game</p>
        {/* </Link> */}
        <p>{this.handleScore()}</p>
        <p onChange={this.handleHighScore}>
          Current Score {this.props.score} || High Score {this.props.highScore}
        </p>
      </nav>
    );
  }
}
