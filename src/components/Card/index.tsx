import { useState, useEffect } from "react";
import { ContainerCard } from "./styles";

interface CardProps {
  number: any;
  color: string;
  playCard?: any;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <ContainerCard color={props.color} onClick={() => props.playCard(props)}>
      <h1 style={{ color: "#fff" }}>{props.number}</h1>
    </ContainerCard>
  );
};

export default Card;
