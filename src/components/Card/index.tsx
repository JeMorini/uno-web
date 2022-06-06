import { useState, useEffect } from "react";
import { ContainerCard, Circle, Logo, Number, MiniNumber } from "./styles";

interface CardProps {
  number: any;
  color: string;
  playCard?: any;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <ContainerCard color={props.color} onClick={() => props.playCard(props)}>
      {props.number === "UNO" ? (
        <Circle color="red">
          <Logo>UNO</Logo>
        </Circle>
      ) : (
        <>
          <MiniNumber color="top">{props.number}</MiniNumber>
          <Circle color="#fff">
            <Number color={props.color}>{props.number}</Number>
          </Circle>
          <MiniNumber color="bottom">{props.number}</MiniNumber>
        </>
      )}
    </ContainerCard>
  );
};

export default Card;
