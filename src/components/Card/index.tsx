import {
  ContainerCard,
  Circle,
  Logo,
  Number,
  MiniNumber,
  ImageCard,
} from "./styles";
import plusfour from "../../images/plusfour.png";

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
            {props.color !== "#000" ? (
              <Number color={props.color}>{props.number}</Number>
            ) : (
              <ImageCard style={{ width: 100, height: 100 }} src={plusfour} />
            )}
          </Circle>
          <MiniNumber color="bottom">{props.number}</MiniNumber>
        </>
      )}
    </ContainerCard>
  );
};

export default Card;
