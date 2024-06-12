import './playbutton.css'
function PlayButton(){
    function handleClick(){
        console.log('play');
    }
    return (
        <button onClick={handleClick}>Play</button>
    )
}
export default PlayButton