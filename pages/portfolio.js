import { useState } from "react";
import Header from "../components/Header.js";
import Card from "../components/Card.js";
import Carousel from "../components/Carousel.js";
import { cards } from "../public/cards.js";

export default function Portfolio() {
  return (
    <div className='py-4'>
      <Header />
      <div className="w-11/12 p-20 mx-auto gap-16 flex flex-col justify-center items-center">
        {cards.map((card) => {
          return <Card key={card} card={card} />;
        })}
      </div>
    </div>
  );
}
