import '../App.css'
const Die = ({ value, isHeld, holdDice }) => {
    const styles = {
        backgroundColor: isHeld? "#59e391" : "white"
    }
    return (
        <div 
            className='die' 
            style={styles}
            onClick={holdDice}
        >
            <h1 className='die-font'>{value} </h1>
        </div>
    )
}

export default Die;