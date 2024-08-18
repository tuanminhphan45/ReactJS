import Board from "./Board";
import "./game.css";
import React, { useState } from "react";

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const handleClick = (index) => {
        const boardCopy = [...board];
        if (boardCopy[index]) return;
        boardCopy[index] = isXNext ? "X" : "O";
        setBoard(boardCopy);
        setIsXNext(!isXNext);
    };
    return (
        <div>
            <Board cells={board} onClick={handleClick}></Board>
        </div>
    );
};

export default Game;
