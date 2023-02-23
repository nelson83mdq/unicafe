import './App.css';
import { useState } from 'react';
import Statistics from './statistics';
import Boton from './boton'

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div className="App">
      <h1>Give Feedback please!</h1>
      <Boton name='Good' onClick={()=>setGood(good+1)}/>
      <Boton name='Neutral' onClick={()=>setNeutral(neutral+1)}/>
      <Boton name='Bad' onClick={()=>setBad(bad+1)}/>
      <hr/>
      <h1>Statistics.</h1>
      <Statistics values={[good, neutral, bad]} />
    </div>
  );
  //<p>Positive: {(good/all)*100}%</p> muestra un NAN al comienzo debido a la falta de datos
}

export default App;
