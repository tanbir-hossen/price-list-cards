import React, { useEffect, useState } from "react";
import PriceCards from "../PriceCards/PriceCards";

const Prices = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div className="mx-12">
      <h2 className="text-5xl text-center text-purple-950 bg-purple-300 font-bold p-4 mt-4">
        Affordable Gym Membership Prices
      </h2>
      <div className="grid grid-cols-3 gap-3">
      {prices.map(price => <PriceCards key={price.id} price={price}></PriceCards>)}
      </div>
    </div>
  );
};

export default Prices;
