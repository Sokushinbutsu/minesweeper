import { TOGGLE_SQUARE, GENERATE_BOARD, PLANT_FLAG } from './actions';
import generateBoard from './helpers/generateBoard.js';

const initialState = {
  hasWon: false,
  hasLost: false,
  board: []
};

function mineSweeper(state = initialState, action) {
  switch (action.type) {
    case GENERATE_BOARD:
      return state({
        board: generateBoard()
      });
    case TOGGLE_SQUARE:
      // return Object.assign({}, state, {
      //   board: state.board.map((square, x) => {
      //     state.board.map((square, y) => {
      //       if (action.x === x && action.y === y) {
      //         return Object.assign({}, square, {
      //           isFlagged: true
      //         });
      //       }
      //     });
      //   })
      // });

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
      // return Object.assign({}, state, {
      //   board: state.board.map((square, x) => {
      //     state.board.map((square, y) => {
      //       if (action.x === x && action.y === y) {
      //         return Object.assign({}, square, {
      //           isFlagged: true
      //         });
      //       }
      //     });
      //   })
      // });
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

export default mineSweeper;
