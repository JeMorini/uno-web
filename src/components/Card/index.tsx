import { ContainerCard, Circle, Logo, Number, MiniNumber } from "./styles";

interface CardProps {
  number: any;
  color: string;
  playCard?: any;
  skin: any;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <ContainerCard
      color={props.color}
      skin={props.skin}
      onClick={() => props.playCard(props)}
    >
      {props.number === "UNO" ? (
        <Circle color="red" skin={props.skin}>
          <Logo skin={props.skin}>UNO</Logo>
        </Circle>
      ) : (
        <>
          <MiniNumber color="top">{props.number}</MiniNumber>
          <Circle color="#fff" skin={props.skin}>
            <Number color={props.color}>{props.number}</Number>
          </Circle>
          <MiniNumber color="bottom">{props.number}</MiniNumber>
        </>
      )}
    </ContainerCard>
  );
};

export default Card;
