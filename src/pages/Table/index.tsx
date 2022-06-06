import { useState, useEffect } from "react";
import { ContainerTable, AskCardButton } from "./styles";
import Card from "../../components/Card";
import PlayerCards from "../../components/PlayerCards";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const Table: React.FC = () => {
  const cards = [
    { number: 1, color: "red" },
    { number: 2, color: "red" },
    { number: 3, color: "red" },
    { number: 4, color: "red" },
    { number: 5, color: "red" },
    { number: 6, color: "red" },
    { number: 7, color: "red" },
    { number: 8, color: "red" },
    { number: 9, color: "red" },
    { number: 1, color: "blue" },
    { number: 2, color: "blue" },
    { number: 3, color: "blue" },
    { number: 4, color: "blue" },
    { number: 5, color: "blue" },
    { number: 6, color: "blue" },
    { number: 7, color: "blue" },
    { number: 8, color: "blue" },
    { number: 9, color: "blue" },
    { number: 1, color: "green" },
    { number: 2, color: "green" },
    { number: 3, color: "green" },
    { number: 4, color: "green" },
    { number: 5, color: "green" },
    { number: 6, color: "green" },
    { number: 7, color: "green" },
    { number: 8, color: "green" },
    { number: 9, color: "green" },
    { number: 1, color: "yellow" },
    { number: 2, color: "yellow" },
    { number: 3, color: "yellow" },
    { number: 4, color: "yellow" },
    { number: 5, color: "yellow" },
    { number: 6, color: "yellow" },
    { number: 7, color: "yellow" },
    { number: 8, color: "yellow" },
    { number: 9, color: "yellow" },
  ];
  const [cardSelected, setCardSelected] = useState<any>(0);
  const [cardsPlayerOne, setCardsPlayerOne] = useState<any>([]);
  const [cardsPlayerTwo, setCardsPlayerTwo] = useState<any>([]);
  const [currentCard, setCurrentCard] = useState<any>([]);
  const [lastAsk, setLastAsk] = useState<any>("");

  initializeApp({
    apiKey: "AIzaSyCYA0pyPJNH7Knc4-1-pSXqzxhrAW_btLE",
    authDomain: "unodb-dad4e.firebaseapp.com",
    projectId: "unodb-dad4e",
    storageBucket: "unodb-dad4e.appspot.com",
    messagingSenderId: "260132756646",
    appId: "1:260132756646:web:95007b3801f57f687ce867",
    measurementId: "G-78JQGGFBS3",
  });

  const db = getFirestore();

  useEffect(() => {
    try {
      onSnapshot(doc(db, "uno", "cards"), (doc) => {
        setCardsPlayerOne(doc.data().playerOne);
        setCardsPlayerTwo(doc.data().playerTwo);
        setCurrentCard(doc.data().currentCard);
      });
    } catch (err) {
      alert(err);
    }
  }, []);

  useEffect(() => {
    let newCards;
    let initialCards = [];
    for (var i = 0; i < 7; i++) {
      const randomNumber = (Math.random() * (35 - 0) + 0).toFixed(0);
      newCards = initialCards.push({
        number: cards[Number(randomNumber)].number,
        color: cards[Number(randomNumber)].color,
      });
      setCardsPlayerOne(initialCards);
    }
  }, [cardSelected]);

  useEffect(() => {
    let newCards;
    let initialCards = [];
    for (var i = 0; i < 7; i++) {
      const randomNumber = (Math.random() * (35 - 0) + 0).toFixed(0);
      newCards = initialCards.push({
        number: cards[Number(randomNumber)].number,
        color: cards[Number(randomNumber)].color,
      });
      setCardsPlayerTwo(initialCards);
    }
  }, [cardSelected]);

  useEffect(() => {
    (async () => {
      await setDoc(doc(db, "uno", "cards"), {
        playerOne: cardsPlayerOne,
        playerTwo: cardsPlayerTwo,
        currentCard: currentCard,
      });
    })();
  }, [currentCard]);

  useEffect(() => {
    const randomNumber = (Math.random() * (35 - 0) + 0).toFixed(0);
    setCardSelected(Math.random() * (35 - 0) + 0);
    setCurrentCard(cards[Number(randomNumber)]);
  }, []);

  async function askCard(prop: string) {
    if (prop === "one" && lastAsk !== "one") {
      const randomNumber = (Math.random() * (35 - 0) + 0).toFixed(0);
      cardsPlayerOne.push({
        number: cards[Number(randomNumber)].number,
        color: cards[Number(randomNumber)].color,
      });
      (async () => {
        await updateDoc(doc(db, "uno", "cards"), {
          playerOne: cardsPlayerOne,
        });
      })();
    }
    if (prop === "two" && lastAsk !== "two") {
      const randomNumber = (Math.random() * (35 - 0) + 0).toFixed(0);
      cardsPlayerTwo.push({
        number: cards[Number(randomNumber)].number,
        color: cards[Number(randomNumber)].color,
      });
      (async () => {
        await updateDoc(doc(db, "uno", "cards"), {
          playerTwo: cardsPlayerTwo,
        });
      })();
    }
    setLastAsk(prop);
  }

  async function playCard(props: any) {
    alert(props);
  }

  return (
    <ContainerTable>
      {cardsPlayerTwo && (
        <>
          <PlayerCards playerCards={cardsPlayerTwo} />
          <AskCardButton style={{ left: "80%" }} onClick={() => askCard("two")}>
            <h1>Pedir carta</h1>
          </AskCardButton>
          <Card
            color={currentCard.color}
            number={currentCard.number}
            playCard={() => playCard}
          />
          <AskCardButton onClick={() => askCard("one")}>
            <h1>Pedir carta</h1>
          </AskCardButton>
          <PlayerCards playerCards={cardsPlayerOne} />
        </>
      )}
    </ContainerTable>
  );
};

export default Table;
