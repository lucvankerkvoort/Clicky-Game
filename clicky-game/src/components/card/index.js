import React from "react";

let pictures = [];
let numbers = 0;

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (pictures.indexOf(this.props.image) === -1) {
      numbers++;
      pictures.push(this.props.image);
      this.props.onClick(numbers);
    } else {
      pictures = [];
      numbers = 0;
      this.props.onClick(numbers);
    }
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
