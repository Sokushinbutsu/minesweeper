module.exports = {
  GENERATE_BOARD: 'GENERATE_BOARD',
  PLANT_FLAG: 'PLANT_FLAG',
  TOGGLE_SQUARE: 'TOGGLE_SQUARE',
  generateBoard() {
    return { type: this.GENERATE_BOARD };
  },
  plantFlag(x, y) {
    return { type: this.PLANT_FLAG, x, y };
  },
  toggleSquare(x, y) {
    return { type: this.TOGGLE_SQUARE, x, y };
  }
};
