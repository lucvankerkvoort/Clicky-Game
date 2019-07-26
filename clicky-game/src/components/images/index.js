import React from "react";
import { Card } from "../card";
export class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: 0, highscore: 0 };
  }
  render() {
    let images = [
      "https://i2.wp.com/freepngimages.com/wp-content/uploads/2014/10/190px-Joe_Swanson.png?fit=190%2C288",
      "https://www.pngkey.com/png/full/0-3734_fg-blackjesus-family-guy-jesus-png.png",
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Peter_Griffin.png/220px-Peter_Griffin.png",
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Lois_Griffin.png/170px-Lois_Griffin.png",
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Meg_Griffin.png/185px-Meg_Griffin.png",
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Brian_Griffin.png/195px-Brian_Griffin.png",
      "https://vignette.wikia.nocookie.net/familyguyfanon/images/0/02/Stewie_Griffin.png/revision/latest?cb=20161119043926",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/86cf185c-ad61-4faa-9c63-de77f6c62a3c/dazgmak-b37f6f86-dfe0-42a0-88ec-ea3609523b2f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg2Y2YxODVjLWFkNjEtNGZhYS05YzYzLWRlNzdmNmM2MmEzY1wvZGF6Z21hay1iMzdmNmY4Ni1kZmUwLTQyYTAtODhlYy1lYTM2MDk1MjNiMmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VRNUv6PtAKQ6JZmogd4OBHTDxMVYLGNYORtK_PP5818",
      "https://vignette.wikia.nocookie.net/familyguyfanon/images/2/2e/Giant_chicken_animation.png/revision/latest?cb=20161127195400",
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Glenn_Quagmire.png/220px-Glenn_Quagmire.png",
      "https://vignette.wikia.nocookie.net/simpsons/images/a/ae/Mayor_Adam_West.png/revision/latest?cb=20180109220259",
      "https://vignette.wikia.nocookie.net/familyguyfanon/images/1/15/Consuela.png/revision/latest?cb=20161215031734"
    ];
    const cards = images.map(img => <Card image={img} />);
    return (
      <div className="container">
        <div className="row" id="images">
          {cards}
        </div>
      </div>
    );
  }
}
