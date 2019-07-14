// Action Types
export const TOGGLE_SQUARE = 'TOGGLE_SQUARE';

// Action Creators
export function toggleSquare(index) {
  return { type: TOGGLE_SQUARE, index };
}
