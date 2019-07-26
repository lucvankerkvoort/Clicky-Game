import React from "react";
import "./App.css";
import { Jumbotron } from "./components/jumbotron";
import { Navbar } from "./components/navbar";
import { Images } from "./components/images";

class App extends React.Component() {
  state = {
    score: 0,
    highScore: 0
  };
  render() {
    return (
      <div className="container-fluid text-center">
        <Navbar score={this.state} />
        <Jumbotron />
        <Images />
      </div>
    );
  }
}

export default App;
