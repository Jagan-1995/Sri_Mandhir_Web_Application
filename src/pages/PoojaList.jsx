import React from "react";
import "./poojaList.css";
import PoojaCard from "../components/PoojaCard";
import temple1 from "../static/images/temple1.jpg";
import temple2 from "../static/images/temple2.jpg";
import temple3 from "../static/images/temple3.jpg";

export default function PoojaList() {
  const cardData = [
    {
      id: 1,
      image: temple1,
      title: "Temple 1",
      description: "This is the description for card 1.",
    },
    {
      id: 2,
      image: temple2,
      title: "Temple 2",
      description: "This is the description for card 2.",
    },
    {
      id: 3,
      image: temple3,
      title: "Temple 3",
      description: "This is the description for card 3.",
    },
  ];

  return (
    <div className="poojalist_container">
      <h1 className="title">Pooja Lists</h1>

      <div className="poojaCards">
        {cardData.map((card) => (
          <PoojaCard
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
