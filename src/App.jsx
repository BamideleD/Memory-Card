import React from "react";
import { GameHeader } from "./Components/GameHeader"
import { Card } from "./Components/Card";
import { useState, useEffect  } from "react";


const cardValues = [
  '🍏','🍒','🥒','🧅','🍗','🥩','🍌','🍍','🍏','🍒','🥒','🧅','🍗','🥩','🍌','🍍',
]


function App() {
 
const [cards, setCards] = useState([])
const [flippedCards, setFlippedCards] = useState([])


const initializeGame = () => {

  const finalCard = cardValues.map((value, index) => (
    {
      id:index,
      value,
      isFlipped:false,
      isMatched: false
    }
  ));

  setCards(finalCard);

 
};

useEffect(() => {
  initializeGame();
}, []);

const handleClick = (card) => {
  if (card.isFlipped || card.isMatched) {
    return;
  }

  const newCards = cards.map((c) => {
    if (c.id === card.id){
      return { ...c, isFlipped: true}
    }
    else {
      return c;
    }

  });

  setCards(newCards)

  const newFlippedCards = [...flippedCards, card.id]
  setFlippedCards(newFlippedCards);

  if(flippedCards.length === 1){
    const firstCard = cards[flippedCards[0]]

    if(firstCard.value === card.value){
      alert ('Match')
    }
    else {
      // Flip back cards 1 and 2
      setTimeout(() => {
        const flippedBackCards = newCards.map((c) => {
        if(flippedCards.includes(c.id) || c.id === card.id){
          return {...c, isFlipped:false}
        }
        else{
          return c;
        }
      })
      setCards(flippedBackCards)
      setFlippedCards([])
      }, 1000);

      

      
    }
  }
  
};

  




return (
  <div className="app">
    <GameHeader score = {0} moves = {0} />

    <div className="cards-grid">
      {cards.map((card) => (
        <Card card = {card} handleClick={handleClick}/>
      ))}
    </div>
  </div>
);
}

export default App
