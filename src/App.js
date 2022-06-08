import './App.css';
import Die from './components/Die';
import { useState } from 'react';

function App() {
  const allNewDice = () => {
    const newDice = []

    for(let i=0; i < 10; i++){
      let randomNumber = Math.ceil(Math.random() * 6)
      newDice.push(randomNumber)
    }
    
    return newDice;
  }

  const [dice, setDice] = useState(allNewDice())

  const diceElements = dice.map(die => <Die value={die} />)

  const rollDice = () => {
    setDice(allNewDice())
  }

  return (
    <main className="App">
      <div className='grid'>
        {diceElements}
      </div>
      <button className='roll-dice' onClick={() => rollDice()}>Roll Dice</button>
    </main>
  );
}

export default App;
