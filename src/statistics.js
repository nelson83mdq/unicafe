const Statistics = (props) => {
    const good = props.good ;
    const bad = props.bad ;
    const neutral = props.neutral;
    const sum = good + bad+ neutral ;

    const average = (goodVotes, badVotes, neutralVotes)=> {
        let sum = goodVotes - badVotes ;
        return sum/(goodVotes + neutralVotes + badVotes);
      }

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
 
export default Statistics;