import React from "react";

export class Card extends React.Component {
  render() {
    console.log(this.props);

    const cardHover = {
      transform: "scale(1.5)"
    };
    const cardStyle = {
      width: 180,
      height: 140,
      backgroundImage: `url(${this.props.image})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      cursor: "pointer"
    };
    return (
      <div className="card" onMouseOver={cardHover} style={cardStyle}>
        <div className="card-body" />
      </div>
    );
  }
}
