import { useState, useEffect } from "react";
import { ContainerTable } from "./styles";
import Card from "../../components/Card";
import PlayerCards from "../../components/PlayerCards";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const Table: React.FC = () => {
  const cards = [
    { number: 1, color: "#DB3C28" },
    { number: 2, color: "#DB3C28" },
    { number: 3, color: "#DB3C28" },
    { number: 4, color: "#DB3C28" },
    { number: 5, color: "#DB3C28" },
    { number: 6, color: "#DB3C28" },
    { number: 7, color: "#DB3C28" },
    { number: 8, color: "#DB3C28" },
    { number: 9, color: "#DB3C28" },
    { number: 1, color: "#1275BA" },
    { number: 2, color: "#1275BA" },
    { number: 3, color: "#1275BA" },
    { number: 4, color: "#1275BA" },
    { number: 5, color: "#1275BA" },
    { number: 6, color: "#1275BA" },
    { number: 7, color: "#1275BA" },
    { number: 8, color: "#1275BA" },
    { number: 9, color: "#1275BA" },
    { number: 1, color: "#8BBD44" },
    { number: 2, color: "#8BBD44" },
    { number: 3, color: "#8BBD44" },
    { number: 4, color: "#8BBD44" },
    { number: 5, color: "#8BBD44" },
    { number: 6, color: "#8BBD44" },
    { number: 7, color: "#8BBD44" },
    { number: 8, color: "#8BBD44" },
    { number: 9, color: "#8BBD44" },
    { number: 1, color: "#F5D93D" },
    { number: 2, color: "#F5D93D" },
    { number: 3, color: "#F5D93D" },
    { number: 4, color: "#F5D93D" },
    { number: 5, color: "#F5D93D" },
    { number: 6, color: "#F5D93D" },
    { number: 7, color: "#F5D93D" },
    { number: 8, color: "#F5D93D" },
    { number: 9, color: "#F5D93D" },
  ];
  const [cardSelected, setCardSelected] = useState<any>(0);
  const [cardsPlayerOne, setCardsPlayerOne] = useState<any>([]);
  const [cardsPlayerTwo, setCardsPlayerTwo] = useState<any>([]);
  const [currentCard, setCurrentCard] = useState<any>([]);
  const [currentPlayer, setCurrentPlayer] = useState<any>(
    (Math.random() * (2 - 1) + 1).toFixed(0)
  );
  const [lastAsk, setLastAsk] = useState<any>("0");
  const [playerOneSkin, setPlayerOneSkin] = useState<any>("default");
  const [playerTwoSkin, setPlayerTwoSkin] = useState<any>("minimalist");
  const [gameFinished, setGameFinished] = useState<any>(false);
  const [loading, setLoading] = useState<any>();
  const [newCards, setNewCards] = useState<any>(false);

  initializeApp();

  const db = getFirestore();

  useEffect(() => {
    setLoading(true);
    try {
      onSnapshot(doc(db, "uno", "cards"), (doc) => {
        setCardsPlayerOne(doc.data().playerOne);
        setCardsPlayerTwo(doc.data().playerTwo);
        setPlayerOneSkin(doc.data().playerOneSkin);
        setPlayerTwoSkin(doc.data().playerTwoSkin);
        setCurrentCard(doc.data().currentCard);
        setLastAsk(doc.data().lastAsk);
        setCurrentPlayer(doc.data().currentPlayer);
      });

      setLoading(false);
    } catch (err) {
      alert(err);
    }
  }, [db]);

  useEffect(() => {
    (cardsPlayerOne.length === 0 || cardsPlayerTwo.length === 0) &&
      setGameFinished((prevState: any) => !prevState);
  }, [cardsPlayerOne, cardsPlayerTwo]);

  useEffect(() => {
    let initialCards = [];
    for (var i = 0; i < 7; i++) {
      const randomNumber = (Math.random() * (35 - 0) + 0).toFixed(0);
      initialCards.push({
        number: cards[Number(randomNumber)].number,
        color: cards[Number(randomNumber)].color,
      });
      setCardsPlayerOne(initialCards);
      setNewCards((prevState: any) => !prevState);
    }
  }, [gameFinished]);

  useEffect(() => {
    let initialCards = [];
    for (var i = 0; i < 7; i++) {
      const randomNumber = (Math.random() * (35 - 0) + 0).toFixed(0);
      initialCards.push({
        number: cards[Number(randomNumber)].number,
        color: cards[Number(randomNumber)].color,
      });
      setCardsPlayerTwo(initialCards);
      setNewCards((prevState: any) => !prevState);
    }
  }, [gameFinished]);

  useEffect(() => {
    (async () => {
      await setDoc(doc(db, "uno", "cards"), {
        playerOne: cardsPlayerOne,
        playerTwo: cardsPlayerTwo,
        playerOneSkin: playerOneSkin,
        playerTwoSkin: playerTwoSkin,
        currentCard: currentCard,
        lastAsk: lastAsk,
        currentPlayer: currentPlayer,
      });
    })();
  }, [loading, gameFinished, cardsPlayerTwo]);

  useEffect(() => {
    const randomNumber = (Math.random() * (35 - 0) + 0).toFixed(0);
    setCardSelected(Math.random() * (35 - 0) + 0);
    setCurrentCard(cards[Number(randomNumber)]);
  }, [gameFinished]);

  async function playCard(props: any) {
    alert(props);
  }

  return (
    <ContainerTable>
      {cardsPlayerTwo && (
        <>
          <PlayerCards
            playerCards={cardsPlayerTwo}
            skin={playerTwoSkin}
            lastAsk={currentPlayer}
            player={2}
          />
          <Card
            color={currentCard.color}
            number={currentCard.number}
            playCard={() => playCard}
            skin="default"
          />
          <PlayerCards
            playerCards={cardsPlayerOne}
            skin={playerOneSkin}
            lastAsk={currentPlayer}
            player={1}
          />
        </>
      )}
    </ContainerTable>
  );
};

export default Table;
