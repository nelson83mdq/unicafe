const Boton = (props) => {
    const name = props.name ;
    const handleClick = props.onClick;
    
    return (
        <button className= 'state-button' onClick={handleClick}>
            { name }
        </button>
    );
}
 
export default Boton;