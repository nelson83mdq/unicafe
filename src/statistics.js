
const StatisticLine = ({name, value}) => {
    return ( 
        <div className='statistics-line'>
            <p>{name}: {value}</p>
        </div>
     );
}
 
//export default StatisticLine;


const Statistics = (props) => {
    const [gVotes, nVotes, bVotes] = props.values ;
    const Total = gVotes + nVotes + bVotes ;
    const average = (gVotes-bVotes)/Total;
    const positive = (gVotes / Total)*100;

    if ((Total) === 0){
        return (
            <div className='statistics-none'>
                <h2>No feedback given yet!</h2>
            </div>
        );
    }
    return (
        <div className="statistics-view">
            <StatisticLine name='Good' value={gVotes}/>
            <StatisticLine name='Neutral' value={nVotes}/>
            <StatisticLine name='Bad' value={bVotes}/>
            <StatisticLine name='All' value={Total}/>
            <StatisticLine name='Average' value={average}>%</StatisticLine>
            <StatisticLine name='Positives' value={positive}>%</StatisticLine>
        </div>
    );
}
 
export default Statistics;