import './App.css';
import Die from './components/Die';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState()
  console.log(value)

  return (
    <main className="App">
      <div className='grid'>
        <Die 
          value={value}
        />
        <Die 
          value={value}
        />
        <Die 
          value={value}
        />
        <Die 
          value={value}
        />
        <Die 
          value={value}
        />
        <Die 
          value={value}
        />
        <Die 
          value={value}
        />
        <Die 
          value={value}
        />
        <Die 
          value={value}
        />
        <Die 
          value={value}
        />
      </div>

    </main>
  );
}

export default App;
