import React from "react";
import "./style.css";

export class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { highScore: 0 };
    // this.handleHighScore = this.handleHighScore.bind(this);
  }

  //   handleHighScore() {
  //     const scores = [];
  //     scores.push(this.props.score);
  //     console.log({ scores });
  // this.setState({ highScore: highScore });
  //   }
  render() {
    console.log("props inside Navbar", this.props);

    // {
    //   this.handleHighScore();
    // }
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <Link className="navbar-brand" to="/"> */}
        <p>Clicky Game</p>
        {/* </Link> */}
        <p>Click Any Image To Begin!</p>
        <p>
          Current Score {this.props.score} || High Score {this.props.score}
        </p>
      </nav>
    );
  }
}
