import React from "react";
import "./App.css";
import { Jumbotron } from "./components/jumbotron";
import { Navbar } from "./components/navbar";
import { Images } from "./components/images";

const scoreNumbers = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: 0, highScore: 0 };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(score) {
    scoreNumbers.push(score);
    const highScore = Math.max(...scoreNumbers);
    this.setState({
      score: score,
      highScore: highScore
    });
  }

  render() {
    return (
      <div className="container-fluid text-center">
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Jumbotron />
        <Images score={this.state.score} onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
