const Boton = (props) => {
    const name = props.name ;
    const handleClick = props.onClick;
    console.log(name, handleClick);
    console.log(props);
    return (
        <button className= 'state-button' onClick={handleClick}>
            { name }
        </button>
    );
}
 
export default Boton;