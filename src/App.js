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
        isHeld: true,
        id: uuid()
      }
      newDice.push(randomNumber)
    }
    
    return newDice;
  }
  console.log(allNewDice())

  
  const [dice, setDice] = useState(allNewDice())

  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} />)

  const rollDice = () => {
    setDice(allNewDice())
  }

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
