module.exports = {
  PLANT_FLAG: 'PLANT_FLAG',
  TOGGLE_SQUARE: 'TOGGLE_SQUARE',
  plantFlag(x, y) {
    return { type: 'PLANT_FLAG', x, y };
  },
  toggleSquare(x, y) {
    return { type: 'TOGGLE_SQUARE', x, y };
  }
};
