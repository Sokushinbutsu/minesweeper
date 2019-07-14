const { generateBoard } = require('../helpers/generateBoard.js');
const { TOGGLE_SQUARE, PLANT_FLAG } = require('./actions.js');

const initialState = {
  hasWon: false,
  hasLost: false,
  board: generateBoard()
};

function mineSweeper(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SQUARE:
      return {
        ...state,
        board: state.board.map((row, index) => {
          if (index === action.y)
            return row.map((item, index) => {
              if (index === action.x) {
                item.clicked = true;
              }
              return item;
            });
          return row;
        })
      };

    case PLANT_FLAG:
      return {
        ...state,
        board: state.board.map((row, index) => {
          if (index === action.y)
            return row.map((item, index) => {
              if (index === action.x) {
                item.isFlagged = true;
              }
              return item;
            });
          return row;
        })
      };
    default:
      return state;
  }
}

module.exports.mineSweeper = mineSweeper;
