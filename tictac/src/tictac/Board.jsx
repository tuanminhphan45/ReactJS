import Cell from "./Cell";
import "./game.css";
const Board = ({ cells, onClick }) => {
    return (
        <>
            <div className="board">
                {cells.map((item, index) => (
                    <Cell
                        key={index}
                        value={item}
                        onClick={() => onClick(index)}
                    />
                ))}
            </div>
        </>
    );
};

export default Board;
