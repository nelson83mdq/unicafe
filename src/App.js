import './App.css';
import { useState } from 'react';
import Statistics from './statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () =>{
    setGood(good+1);
  };
  const handleNeutral = () =>{
    setNeutral(neutral+1);
  };
  const handleBad = () =>{
    setBad(bad+1);
  };  

  return (
    <div className="App">
      <h1>Give Feedback please!</h1>
      <button className = 'feedback-button' onClick={handleGood}>Good</button>
      <button className='feedback-button' onClick={handleNeutral}>Neutral</button>
      <button className='feedback-button' onClick={handleBad}>Bad</button>
      <hr/>
      <h1>Statistics.</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
  //<p>Positive: {(good/all)*100}%</p> muestra un NAN al comienzo debido a la falta de datos
}

export default App;
