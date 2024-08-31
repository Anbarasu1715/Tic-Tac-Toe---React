import React, { useState } from 'react';
import "./TicTacToe.css";
import circleIcon from "../Assets/icons8-circle-96.png";
import crossIcon from "../Assets/icons8-cross-96.png";

const TicTacToe = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState(null);

  const toggle = (num) => {
    if (winner || board[num]) return;

    const newBoard = [...board];
    newBoard[num] = count % 2 === 0 ? "X" : "O";
    setBoard(newBoard);
    setCount(count + 1);
    checkWinner(newBoard);
  };

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    if (count === 8) {
      setWinner("Draw");
    }
  };

  const renderIcon = (value) => {
    if (value === "X") {
      return <img src={crossIcon} alt="Cross" />;
    } else if (value === "O") {
      return <img src={circleIcon} alt="Circle" />;
    }
    return null;
  };

  const resetGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setWinner(null);
  };

  return (
    <div className='container'>
      <h1 id='title' className='title'>TIC TAC TOE Game In <span>React</span></h1>
      {winner && <h2 className='winner'>{winner === "X" ? "Winner is Cross" : winner === "O" ? "Winner is Circle" : "Match Draw"}</h2>}
      <div className='board'>
        <div className="row1">
          <div className="cell" onClick={() => toggle(0)}>{renderIcon(board[0])}</div>
          <div className="cell" onClick={() => toggle(1)}>{renderIcon(board[1])}</div>
          <div className="cell" onClick={() => toggle(2)}>{renderIcon(board[2])}</div>
        </div>
        <div className="row2">
          <div className="cell" onClick={() => toggle(3)}>{renderIcon(board[3])}</div>
          <div className="cell" onClick={() => toggle(4)}>{renderIcon(board[4])}</div>
          <div className="cell" onClick={() => toggle(5)}>{renderIcon(board[5])}</div>
        </div>
        <div className="row3">
          <div className="cell" onClick={() => toggle(6)}>{renderIcon(board[6])}</div>
          <div className="cell" onClick={() => toggle(7)}>{renderIcon(board[7])}</div>
          <div className="cell" onClick={() => toggle(8)}>{renderIcon(board[8])}</div>
        </div>
      </div>
        <button className='reset' onClick={resetGame}>Reset</button>
    </div>
  );
};

export default TicTacToe;