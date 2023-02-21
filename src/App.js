import './App.css';
import { useState } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () =>{
    setGood(good+1);
    console.log('good', good);
  };
  const handleNeutral = () =>{
    setNeutral(neutral+1);
    console.log('Neutral', neutral);
  };
  const handleBad = () =>{
    setBad(bad+1);
    console.log('Bad', bad);
  };


  return (
    <div className="App">
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
    </div>
  );
}

export default App;
