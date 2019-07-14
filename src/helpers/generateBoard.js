const BOARD_SIZE = 8;

const getRandom = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const generateBoard = () => {
  let board = [];
  let mines = 0;
  for (let i = 0; i < BOARD_SIZE; i++) {
    let row = [];
    for (let j = 0; j < BOARD_SIZE; j++) {
      row.push({ clicked: false, isBomb: false });
    }
    board.push(row);
  }

  while (mines < 10) {
    const x = getRandom(8);
    const y = getRandom(8);
    if (board[x][y]['isBomb'] === false) {
      board[x][y]['isBomb'] = true;
      mines++;
    }
  }

  console.log(mines);

  return board;
};

console.log(generateBoard());
// export default generateBoard;
