import { ContainerPlayerCards, PlusNumber } from "./styles";
import Card from "../Card";

interface PlayerCardsProps {
  playerCards: any;
  skin: any;
  lastAsk: any;
  player: any;
}

const PlayerCards: React.FC<PlayerCardsProps> = (props) => {
  return (
    <ContainerPlayerCards>
      {props.lastAsk == props.player && (
        <h1 style={{ color: "#fff", fontSize: 50 }}>{">"}</h1>
      )}
      {props.playerCards.map(
        (item: { color: string; number: number }, index: any) =>
          index < 7 && <Card color={"#000"} number={"UNO"} skin={props.skin} />
      )}
      {props.playerCards.length > 7 && (
        <PlusNumber>+{props.playerCards.length - 7}</PlusNumber>
      )}
    </ContainerPlayerCards>
  );
};

export default PlayerCards;
