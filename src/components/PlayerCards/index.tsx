import { useState, useEffect } from "react";
import { ContainerPlayerCards, PlusNumber } from "./styles";
import Card from "../Card";

interface PlayerCardsProps {
  playerCards: any;
}

const PlayerCards: React.FC<PlayerCardsProps> = (props) => {
  return (
    <ContainerPlayerCards>
      {props.playerCards.map(
        (item: { color: string; number: number }, index: any) =>
          index < 7 && <Card color={"#000"} number={"UNO"} />
      )}
      {props.playerCards.length > 7 && (
        <PlusNumber>+{props.playerCards.length - 7}</PlusNumber>
      )}
    </ContainerPlayerCards>
  );
};

export default PlayerCards;
