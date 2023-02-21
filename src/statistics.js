/*
const Statistics = (props) => {

    const good = props.good ;
    const bad = props.bad ;
    const neutral = props.neutral;
    const sum = good + bad+ neutral ;

    const average = (goodVotes, badVotes, neutralVotes)=> {
        let sum = goodVotes - badVotes ;
        return sum/(goodVotes + neutralVotes + badVotes);
      }
    if (sum === 0){
        return (
            <h2>No feedback given yet, please give us feedback!</h2>
        );
    } else {
    return (
        <div className="statistical-data">
        <p>Good: {good} </p>
        <p>Neutral: {neutral} </p>
        <p>Bad: {bad}</p>
        <p>All: {sum}</p>
        <p>Average: {average(good, bad, neutral)}</p>
        <p>Positive: {(good/sum)*100}%</p> 
        </div>
    );
    }
}
 
export default Statistics;

// componente anterior queda sin uso, ya que se genera un componente nuevo especializado mediante props.
// the previous component has no more use, instead i generated a new component that can be specialized using props

*/
//---------------------------------------
const Statistics = (props) => {
    const name = props.name ;
    //const votes = props.votes;
    const [gVotes, nVotes, bVotes] = props.values;

    const sum = () =>{
        return gVotes + nVotes + bVotes ;
    };

    const average = ()=> {
        let acum = gVotes - bVotes ;
        return acum/sum();
      }

    return (
        <div className="statistics-view">
            <p>{name}: {}</p>
        </div>
    );
}
 
export default Statistics;