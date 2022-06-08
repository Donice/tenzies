import '../App.css'
const Die = ({ value }) => {
    value = Math.floor(Math.random() * 7)
    return (
        <div className="die">
            <h1>{value} </h1>
        </div>
    )
}

export default Die;