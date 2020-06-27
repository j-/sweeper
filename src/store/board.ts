import { Cell, INITIAL, open, mine, flag } from './cell';
import { getMaxMineCount } from '.';

export interface Board extends Array<Cell> {

}

/**
 * Creates a new empty board.
 */
export const initializeBoard = (width: number, height: number): Board => (
  new Array<Cell>(width * height).fill(INITIAL)
);

/**
 * Returns a new board with the cell at the given index passed to a mapping
 * function and replaced.
 */
const mapCellAtIndex = (board: Board, index: number, map: (cell: Cell) => Cell): Board => [
  ...board.slice(0, index),
  map(board[index]),
  ...board.slice(index + 1),
];

/**
 * Returns a new board with the cell at the given index opened.
 */
export const openCellAtIndex = (board: Board, index: number) => (
  mapCellAtIndex(board, index, open)
);

/**
 * Returns a new board with the cell at the given index flagged/unflagged.
 */
export const flagCellAtIndex = (board: Board, index: number) => (
  mapCellAtIndex(board, index, flag)
);

/**
 * Returns a new board with the cell at the given index mined.
 */
export const mineCellAtIndex = (board: Board, index: number) => (
  mapCellAtIndex(board, index, mine)
);

/**
 * Places mines on the board randomly using the supplied RNG.
 */
export const addMinesToBoard = (board: Board, count: number, rand: () => number) => {
  const { length } = board;
  if (count > getMaxMineCount(length)) {
    throw new Error('Too many mines');
  }
  while (true) {
    const index = Math.floor(rand() * length);
    const cell = board[index];
    // This is the cell the player just clicked, skip it
    if (cell.opened) continue;
    // Cell already has a mine from a previous iter, skip it
    if (cell.mined) continue;
    // Place a mine at the current cell
    board = mineCellAtIndex(board, index);
    // All mines have been added, exit
    if (--count <= 0) break;
  }
  return board;
};

/**
 * Returns an array of (x, y) coordinate pairs, each representing the
 * coordinates of the given cell -- taking into account the boundaries if the
 * board.
 */
export const getNeighborCoords = (width: number, height: number, x: number, y: number): [number, number][] => {
  const hasUp = y > 0 && height > 1;
  const hasDn = y < height - 1 && height > 1;
  const hasLe = x > 0 && width > 1;
  const hasRi = x < width - 1 && width > 1;
  const coords: [number, number][] = [];
  if (hasUp && hasLe) coords.push([x - 1, y - 1]);
  if (hasUp) coords.push([x, y - 1]);
  if (hasUp && hasRi) coords.push([x + 1, y - 1]);
  if (hasLe) coords.push([x - 1, y]);
  if (hasRi) coords.push([x + 1, y]);
  if (hasDn && hasLe) coords.push([x - 1, y + 1]);
  if (hasDn) coords.push([x, y + 1]);
  if (hasDn && hasRi) coords.push([x + 1, y + 1]);
  return coords;
};

/**
 * For each cell on this board calculate how many neighbors are mined.
 * Returns a new board with each cell containing a neighbor mine count.
 */
export const calculateNeighborMineCounts = (board: Board, width: number, height: number) => {
  const onlyMined = ([x, y]: [number, number]) => board[x + y * height].mined;
  for (let index = 0; index < board.length; index++) {
    const x = index % width;
    const y = Math.floor(index / width);
    const neighborMineCount = (
      // Iterate over all neighbors of this cell
      getNeighborCoords(width, height, x, y)
        // Filter out all neighbors without mines
        .filter(onlyMined)
        // Count the mined neighbors
        .length
    );
    board = mapCellAtIndex(board, index, (cell) => ({
      ...cell,
      neighborMineCount,
    }));
  }
  return board;
};

/**
 * Recursively expand this cell and all of its neighbors if appropriate.
 */
export const expandCell = (board: Board, width: number, height: number, x: number, y: number) => {
  const index = x + y * width;
  const cell = board[index];
  board = openCellAtIndex(board, index);
  if (cell.neighborMineCount > 0) {
    return board;
  }
  const neighbors = getNeighborCoords(width, height, x, y);
  for (const [x, y] of neighbors) {
    const index = x + y * width;
    const cell = board[index];
    if (!cell.flagged && !cell.opened) {
      board = expandCell(board, width, height, x, y);
    }
  }
  return board;
};

/**
 * Returns true if the mines in this board are totally swept.
 */
export const calculateDidWin = (board: Board) => {
  return board.every((cell) => (
    // Cell must be mined OR opened
    // Cell cannot be mined AND opened
    (cell.mined || cell.opened) && cell.mined !== cell.opened
  ));
};
