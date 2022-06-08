import './App.css';
import Die from './components/Die';
import { useState } from 'react';

function App() {
  const [dice, setDice] = useState()
  
  const allNewDice = () => {
    const newDice = []

    for(let i=0; i < 10; i++){
      let randomNumber = Math.ceil(Math.random() * 6)
      newDice.push(randomNumber)
    }
    
    return newDice;
  }
  
  console.log(allNewDice())
  


  return (
    <main className="App">
      <div className='grid'>
        <Die 
          value="2"
        />
        <Die 
          value="2"
        />
        <Die 
          value="2"
        />
        <Die 
          value="2"
        />
        <Die 
          value="2"
        />
        <Die 
          value="2"
        />
        <Die 
          value="2"
        />
        <Die 
          value="2"
        />
        <Die 
          value="2"
        />
        <Die 
          value="2"
        />
      </div>

    </main>
  );
}

export default App;
