import './App.css';
import Die from './components/Die';
import { React, useState } from 'react';
import uuid from 'react-uuid'

function App() {
  
  const allNewDice = () => {
    const newDice = []

    for(let i=0; i < 10; i++) {
      let randomNumber = {
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: uuid()
      }
      newDice.push(randomNumber)
    } 
    return newDice;
  }
  
  const [dice, setDice] = useState(allNewDice()) // dice, through allNewDice() is an array of 10 numbers

  const rollDice = () => {
    setDice(allNewDice())
  }

  const holdDice = (id) => {
    setDice(oldDice => oldDice.map(die => { //oldDiice is a pseudo prop mirroring 'dice'
      return die.id === id                  // It maps through all 10 numbers in the array, checking if the id, matched the id passed into the function
        ? {...die, isHeld: !die.isHeld}     // if so, it swaps the id
        : die                               // if not, it leaves the die
    }))
  }

  const diceElements = dice.map(die => 
    <Die 
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld} 
      holdDice={() => holdDice(die.id)}
    />
  )

  return (
    <main className="App">
      <div className='grid'>
        {diceElements}
      </div>
      <button className='roll-dice' onClick={rollDice}>Roll Dice</button>
    </main>
  );
}

export default App;
