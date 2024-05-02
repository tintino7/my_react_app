import {useState, useRef} from 'react'
import styles from './TicTacToe.module.css'


/* Game component */
function Game(){
    const [historys, setHistorys] = useState([Array(9).fill(null)])
    const [XisNext, setXisNext] = useState(true)
    const [currentMove, setCurrentMove] = useState(0)
    const currentSquare = historys[currentMove]


    const handleHistory = (newHistory) => {
        const updatedHistory = [...historys.slice(0, currentMove + 1), newHistory]
        setHistorys(updatedHistory)
        setCurrentMove(updatedHistory.length - 1);
        setXisNext(!XisNext)   
    }

    const jumpTo = (index) => {
        setCurrentMove(index)
        setXisNext(index % 2 === 0)  
    }


    return(
        <div className={styles.game}>
            <div>
                <Board handleHistory={handleHistory} XisNext={XisNext} square={currentSquare}/>
            </div>
            <div className={styles.history}>
                {historys.map((history, index) => (
                    <button key={index} onClick={() => jumpTo(index)}>Move to step {index}</button>
                    
                ))}
            </div>
        </div>
    )
}




/* Board component */
function Board(props){
    
    function handleClick(index){
        const nextSquares = [...props.square]
        
        if(nextSquares[index] || calculateWinner(props.square)){
            return 
        }
        props.XisNext ? nextSquares[index] = 'X' : nextSquares[index] = 'O'
        props.handleHistory(nextSquares)
    }


    const winner = calculateWinner(props.square)
    let text;

    if(winner){
        text = `winner is ${winner}`
    }
    else{
        text = `Next Player ${props.XisNext ? 'X' : 'O'}`
    }


    return(
        <div className={styles.board}>
            <div>
                {text}
            </div>
            <div className={styles.row}>
                <Square value = {props.square[0]} handleSquareClick={() => handleClick(0)}/>
                <Square value = {props.square[1]} handleSquareClick={() => handleClick(1)}/>
                <Square value = {props.square[2]} handleSquareClick={() => handleClick(2)}/>
            </div>
            <div className={styles.row}>
                <Square value = {props.square[3]} handleSquareClick={() => handleClick(3)}/>
                <Square value = {props.square[4]} handleSquareClick={() => handleClick(4)}/>
                <Square value = {props.square[5]} handleSquareClick={() => handleClick(5)}/>
            </div>
            <div className={styles.row}>
                <Square value = {props.square[6]} handleSquareClick={() => handleClick(6)}/>
                <Square value = {props.square[7]} handleSquareClick={() => handleClick(7)}/>
                <Square value = {props.square[8]} handleSquareClick={() => handleClick(8)}/>
            </div>
        </div>
    )
}



/* Square component */
function Square(props){
    return(
        <button className={styles.square} onClick={props.handleSquareClick}>{props.value}</button>
    )
}




/* Calculate winner function */
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];


    for (let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i]

        if(squares[a] === squares[b] && squares[b] === squares[c]){
            return squares[a]
        }
    }
    return null
}
export default Game