import React from "react";

export class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron bg-dark text-light">
        <h1>Clicky Game</h1>
        <p>
          Click on an image to score points, but don't click on any image more
          then once
        </p>
      </div>
    );
  }
}
