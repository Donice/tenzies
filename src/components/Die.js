import '../App.css'
const Die = ({ value, isHeld }) => {
    const styles = {
        backgroundColor: isHeld? "#59e391" : "white"
    }
    return (
        <div className='die' style={styles}>
            <h1 className='die-font'>{value} </h1>
        </div>
    )
}

export default Die;