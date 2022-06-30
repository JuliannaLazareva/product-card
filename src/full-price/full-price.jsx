import React from "react";
import { PriceWrapper, InnerPrice } from "./styled";
import OldPrice from "/src/old-price/old-price";

function FullPrice({ price, oldPrice }) {
  const showOldPrice = oldPrice && price < oldPrice;

  return (
    <PriceWrapper>
      {showOldPrice && <OldPrice value={oldPrice} />}
      {showOldPrice && ""}
      <InnerPrice value={price} />
    </PriceWrapper>
  );
}

export default FullPrice;
