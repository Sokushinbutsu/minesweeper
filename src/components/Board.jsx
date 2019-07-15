import React from 'react';
import Square from './Square.jsx';

const Board = props => {
  return (
    <div className="board">
      {props.board.map((arr, index) => {
        return arr.map(square => {
          return <Square square={square} />;
        });
      })}
    </div>
  );
};

export default Board;
