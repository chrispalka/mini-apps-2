/* eslint-disable no-console */
const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const Cell = (row, col, opened, flagged, mined, neighboringMineCount) => ({
  id: `${row}_${col}`,
  row,
  col,
  opened,
  flagged,
  mined,
  neighboringMineCount,
});

const addMines = (board, mines) => {
  const mineCoordinates = [];
  const minedBoard = board;
  for (let i = 0; i < mines; i += 1) {
    let randomRow = randomNum(0, 9);
    let randomCol = randomNum(0, 9);
    let cell = `${randomRow}_${randomCol}`;
    while (mineCoordinates.includes(cell)) {
      randomRow = randomNum(0, 9);
      randomCol = randomNum(0, 9);
      cell = `${randomRow}_${randomCol}`;
    }
    mineCoordinates.push(cell);
    minedBoard[cell].mined = true;
  }
  return board;
};

const isMined = (board, id) => {
  const cell = board[id];
  let mined = 0;
  if (typeof cell !== 'undefined') {
    mined = cell.mined ? 1 : 0;
  }
  return mined;
};

const getNeighbors = (id) => {
  const row = Number(id[0]);
  const col = Number(id[2]);
  const neighbors = [];

  neighbors.push(`${(row - 1)}_${col - 1}`);
  neighbors.push(`${(row - 1)}_${col}`);
  neighbors.push(`${(row - 1)} ${col + 1}`);
  neighbors.push(`${(row)}_${col - 1}`);
  neighbors.push(`${(row)}_${col + 1}`);
  neighbors.push(`${(row + 1)}_${col - 1}`);
  neighbors.push(`${(row + 1)}_${col}`);
  neighbors.push(`${(row + 1)}_${col + 1}`);

  for (let i = 0; i < neighbors.length; i += 1) {
    if (neighbors[i].length > 3) {
      neighbors.splice(i, 1);
      i -= 1;
    }
  }
  return neighbors;
};

const calculateNeighboringMines = (board, boardSize) => {
  let cell;
  let neighboringMineCount = 0;
  for (let row = 0; row < boardSize; row += 1) {
    for (let col = 0; col < boardSize; col += 1) {
      const id = `${row}_${col}`;
      cell = board[id];
      if (!cell.mined) {
        // console.log(cell)
        const neighbors = getNeighbors(id);
        neighboringMineCount = 0;
        // console.log(neighbors);
        for (let i = 0; i < neighbors.length; i += 1) {
          neighboringMineCount += isMined(board, neighbors[i]);
        }
        cell.neighboringMineCount = neighboringMineCount;
      }
    }
  }
  return board;
};

const boardBuilder = (size, mines) => {
  let board = {};
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      board[`${row}_${col}`] = Cell(row, col, false, false, false, 0);
    }
  }
  board = addMines(board, mines);
  board = calculateNeighboringMines(board, size);
  return board;
};

export default boardBuilder;
