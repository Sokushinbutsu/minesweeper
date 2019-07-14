// Action Types
export const TOGGLE_SQUARE = 'TOGGLE_SQUARE';
export const GENERATE_BOARD = 'GENERATE_BOARD';
export const PLANT_FLAG = 'PLANT_FLAG';

// Action Creators
export function toggleSquare(x, y) {
  return { type: TOGGLE_SQUARE, x, y };
}

export function generateBoard() {
  return { type: GENERATE_BOARD };
}

export function plantFlag(x, y) {
  return { type: PLANT_FLAG, x, y };
}
