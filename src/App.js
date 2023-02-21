import './App.css';
import { useState } from 'react';

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
  const all = bad + neutral + good;
  const average = (goodVotes, badVotes, neutralVotes)=> {
    let sum = goodVotes - badVotes ;
    return sum/(goodVotes + neutralVotes + badVotes);
  }

  return (
    <div className="App">
      <h2>Give Feedback please!</h2>
      <button className = 'feedback-button' onClick={handleGood}>Good</button>
      <button className='feedback-button' onClick={handleNeutral}>Neutral</button>
      <button className='feedback-button' onClick={handleBad}>Bad</button>
      <hr/>
      <h2>Statistics.</h2>
      <p>Good: {good} </p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad}</p>
      <p>All: {good+ neutral + bad}</p>
      <p>Average: {average(good, bad, neutral)}</p>
      <p>Positive: {(good/all)*100}%</p>  
    </div>
  );
  //<p>Positive: {(good/all)*100}%</p> muestra un NAN al comienzo debido a la falta de datos
}

export default App;
