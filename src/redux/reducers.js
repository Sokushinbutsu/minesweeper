import { generateBoard } from '../helpers/generateBoard.js';
import { TOGGLE_SQUARE, PLANT_FLAG } from './actions.js';

const initialState = {
  hasWon: false,
  hasLost: false,
  board: generateBoard()
};

const mineSweeper = (state = initialState, action) => {
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
};

export default mineSweeper;
