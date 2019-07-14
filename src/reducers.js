import { TOGGLE_SQUARE } from './actions';
import generateBoard from './helpers/generateBoard.js';

function mineSweeper(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SQUARE:
      return Object.assign({}, state, {
        todos: state.board.map((square, index) => {
          if (index === action.index) {
            return Object.assign({}, square, {
              clicked: true
            });
          }
          return square;
        })
      });
    default:
      return state;
  }
}
