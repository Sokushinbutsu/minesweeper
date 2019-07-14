export const PLANT_FLAG = 'PLANT_FLAG';
export const TOGGLE_SQUARE = 'TOGGLE_SQUARE';

export function plantFlag(x, y) {
  return { type: 'PLANT_FLAG', x, y };
}

export function toggleSquare(x, y) {
  return { type: 'TOGGLE_SQUARE', x, y };
}
