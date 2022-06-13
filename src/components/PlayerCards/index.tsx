import {
  ContainerPlayerCards,
  PlusNumber,
  PerfilContainer,
  PerfilTitle,
} from "./styles";
import Card from "../Card";
import { FaArrowCircleRight } from "react-icons/fa";

interface PlayerCardsProps {
  playerCards: any;
  skin: any;
  lastAsk: any;
  player: any;
}

const PlayerCards: React.FC<PlayerCardsProps> = (props) => {
  return (
    <ContainerPlayerCards>
      {props.player === 2 && (
        <PerfilContainer player={2}>
          <img
            src={
              "https://cdn.dribbble.com/users/673318/screenshots/13978778/media/a3b77e3682e5d084ffa16d67a804cd5c.png?compress=1&resize=320x240&vertical=top"
            }
            style={{
              height: 100,
              width: 100,
              borderRadius: "50%",
              boxShadow: "10px 5px 20px black",
            }}
          />
          <PerfilTitle>Jogador 2</PerfilTitle>
        </PerfilContainer>
      )}
      {props.lastAsk == props.player && (
        <FaArrowCircleRight size={60} color="#fff" />
      )}

      {props.playerCards.map(
        (item: { color: string; number: number }, index: any) =>
          index < 7 && <Card color={"#000"} number={"UNO"} skin={props.skin} />
      )}
      {props.playerCards.length > 7 && (
        <PlusNumber>+{props.playerCards.length - 7}</PlusNumber>
      )}
      {props.player === 1 && (
        <PerfilContainer player={1}>
          <img
            src={
              "https://cdn.dribbble.com/users/673318/screenshots/13978786/media/5c307ab803776b5ae728e20e43d545fe.png?compress=1&resize=1200x900&vertical=top"
            }
            style={{
              height: 100,
              width: 100,
              borderRadius: "50%",
              boxShadow: "10px 5px 20px black",
            }}
          />
          <PerfilTitle>Jogador 1</PerfilTitle>
        </PerfilContainer>
      )}
    </ContainerPlayerCards>
  );
};

export default PlayerCards;
