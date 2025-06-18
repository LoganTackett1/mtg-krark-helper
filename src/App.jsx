import { useState } from 'react'
import './App.css'
import { flipNSingles, flipNDoubles } from './util/flip';

function App() {
  const [storm,setStorm] = useState(0);
  const [thumb,setThumb] = useState(false);
  const [flipCount,setFlipCount] = useState(0);
  const [flips,setFlips] = useState({H:0,T:0,B:0});

  function stormUpdate (e) {
    const newStorm = e.target.value;
    if (newStorm >= 0) {
      setStorm(newStorm);
    } else {
      setStorm(storm);
    }
  }

  function removeStorm () {
    if (storm > 0) {
      setStorm(storm-1);
    }
  }

  function addStorm () {
    setStorm(storm+1);
  }

  function resetStorm () {
    setStorm(0);
  }

  function toggleThumb () {
    setThumb(!thumb);
  }

  function coinCountUpdate (e) {
    const newVal = e.target.value;
    if (newVal >= 0) {
      setFlipCount(newVal);
    } else {
      setFlipCount(flipCount);
    }
  }

  function flipCoins () {
    if (flipCoins <= 0) {
      return;
    }

    if (thumb) {
      setFlips(flipNDoubles(flipCount));
    } else {
      setFlips(flipNSingles(flipCount));
    }
  }

  function resetCoins () {
    setFlips({H:0,T:0,B:0});
  }

  return (
    <div className='app'>
      <div className='storm-counter'>
        <button onClick={removeStorm}>-</button>
        <input type="number" min="0" value={storm} onChange={stormUpdate} />
        <button onClick={addStorm}>+</button>
        <button onClick={resetStorm}>RESET</button>
      </div>

      <div className='flipCoins'>
        <button onClick={toggleThumb} className={thumb ? "thumbOn" : "thumbOff"}>Toggle Thumb</button>
        <p>Number of Krark Triggers:</p>
        <input type="number" value={flipCount} onChange={coinCountUpdate}/>
        <button onClick={flipCoins}>Flip</button>
        <button onClick={resetCoins}>Reset Flips</button>
        <p>H:{flips.H} T:{flips.T} B:{flips.B}</p>
      </div>
    </div>
  )
}

export default App
