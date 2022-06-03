import { useState, useEffect } from "react";
import { ContainerPlayerCards } from "./styles";
import Card from "../Card";

interface PlayerCardsProps {
  playerCards: any;
}

const PlayerCards: React.FC<PlayerCardsProps> = (props) => {
  return (
    <ContainerPlayerCards>
      {props.playerCards.map((item: { color: string; number: number }) => (
        <Card color={"#000"} number={"Uno"} />
      ))}
    </ContainerPlayerCards>
  );
};

export default PlayerCards;
