import React from "react";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { points: 1 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let points = this.state.points;
    this.setState({ points: this.state.points + 1 });
    this.props.onClick(points);
  }
  render() {
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
      <div className="card" style={cardStyle} onClick={this.handleClick}>
        <div className="card-body" />
      </div>
    );
  }
}
