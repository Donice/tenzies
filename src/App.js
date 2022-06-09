import './App.css';
import Die from './components/Die';
import { React, useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import uuid from 'react-uuid'

function App() {
  // function one
  const generateNewDie = () => {
    return {
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: uuid()
    }
  }

  // function two
  const allNewDice = () => {
    const newDice = []

    for(let i=0; i < 10; i++) {
      let randomNumber = generateNewDie()
      newDice.push(randomNumber)
    } 
    return newDice;
  }
  
  // Dice state
  const [dice, setDice] = useState(allNewDice()) // dice, through allNewDice() is an array of 10 numbers
  const [tenzies, setTenzies] = useState(false)


  // state effeCt
  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log("You won")
    }
  }, [dice])

  //function three
  const rollDice = () => {
    if(!tenzies) {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld 
        ? die
        : generateNewDie()
    }))
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
    
  }

  // function four
  const holdDice = (id) => {
    setDice(oldDice => oldDice.map(die => { //old Diice is a pseudo prop mirroring 'dice'
      return die.id === id                  // It maps through all 10 numbers in the array, checking if the id, matched the id passed into the function
        ? {...die, isHeld: !die.isHeld}     // if so, it swaps the id
        : die                               // if not, it leaves the die
    }))
  }

  // function five
  const diceElements = dice.map(die => 
    <Die 
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld} 
      holdDice={() => holdDice(die.id)}
    />
  )

  const restart = () => {
    setDice(allNewDice())
  }

  return (
    <main className="App">
      {tenzies === true && <Confetti />}
      <h1 className='title' >Tenzies</h1>
      <p className='instructions' >Roll until dice are the same. click each to freeze it at its current value between rolls</p>
      <div className='grid'>
        {diceElements}
      </div>
      <button 
        className='roll-dice' 
        onClick={rollDice}
      >
        {tenzies === true? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}

export default App;

/**
 * Css: put real dots on the diCe
 * TraCk the number of rolls
 * TraCk time it took to win
 * Save best time to loCalstorage 
 */
