import React, { useState } from 'react';
import "./App.css"

const Board = ({ squares, onClick }) => {
  return (
    <div className='board'>
      {squares.map((square, i) => (
        <button key={i} className='square' onClick={() => onClick(i)}>
          {square}
        </button>
      ))}
    </div>
  );
};

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); 
  const [isNext, setIsNext] = useState(true);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (boardCopy[i] || calculateWinner(boardCopy)) return;
    boardCopy[i] = isNext ? 'x' : 'o';
    setBoard(boardCopy);
    setIsNext(!isNext);
    const winner=calculateWinner(boardCopy);
    if(winner){
      return window.alert(`Winner is ${winner}`);
    }
  
}
  const refresh=()=>{
    setBoard(Array(9).fill(null));
    setIsNext(true);
  }

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isNext ? 'x' : 'o'}`;

  return (
    <>
    <h1 style={{fontWeight:"bold",display:"flex",justifyContent:"center"}}>Tic-Tac-Toe</h1>
      <div className="game"> 
        <div className="board">
          <Board squares={board} onClick={handleClick} /> 
        </div>
        <div className='game-info'>
          <div className='statustext'>{status}</div>
          <div><button onClick={refresh}>Refresh</button></div>
        </div>
      </div>
    </>
  );
};

const calculateWinner = (squares) => {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a]=== squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default App;

 