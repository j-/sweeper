import { Reducer, AnyAction } from 'redux';
import { isActionSetBoardDimensions, isActionOpenCell, isActionFlagCell, isActionRestartGame, isActionSetSeed, isActionNewGame, isActionToggleSettings } from './actions';
import { create } from '../random';
import {
  Board,
  initializeBoard,
  openCellAtIndex,
  addMinesToBoard,
  flagCellAtIndex,
  calculateNeighborMineCounts,
  expandCell,
  calculateDidWin,
} from './board';

export interface RootReducerState {
  showSettings: boolean;
  seed: string;
  mineCount: number;
  boardWidth: number;
  boardHeight: number;
  boardCells: Board;
  isGameStarted: boolean;
  isGameOver: boolean;
  didWin: boolean;
}

export const DEFAULT_COUNT = 20;
export const DEFAULT_WIDTH = 12;
export const DEFAULT_HEIGHT = 12;
export const DEFAULT_SEED = 'DEFAULT_SEED';

export const MIN_ROWS = 5;
export const MIN_COLS = 5;
export const MAX_ROWS = 20;
export const MAX_COLS = 20;
export const MIN_COUNT = 1;

export function getMaxMineCount (length: number) {
  return length - 2;
}

const DEFAULT_STATE: RootReducerState = {
  showSettings: false,
  seed: DEFAULT_SEED,
  mineCount: DEFAULT_COUNT,
  boardWidth: DEFAULT_WIDTH,
  boardHeight: DEFAULT_HEIGHT,
  boardCells: initializeBoard(DEFAULT_WIDTH, DEFAULT_HEIGHT),
  isGameStarted: false,
  isGameOver: false,
  didWin: false,
};

const reducer: Reducer<RootReducerState, AnyAction> = (state = DEFAULT_STATE, action) => {
  if (isActionSetBoardDimensions(action)) {
    const { width: boardWidth, height: boardHeight } = action.data;
    return {
      ...state,
      boardWidth,
      boardHeight,
      boardCells: initializeBoard(boardWidth, boardHeight),
      isGameStarted: false,
      isGameOver: false,
      didWin: false,
    };
  }

  if (isActionOpenCell(action)) {
    const { x, y } = action.data;
    const index = getCellIndex(state, x, y);
    let { boardCells, isGameOver, isGameStarted, didWin } = state;
    if (isGameOver) {
      // Game's already over, exit early
      return state;
    }
    const cell = boardCells[index];
    // Step 0: Only continue if cell is not flagged or opened
    if (cell.flagged || cell.opened) {
      return state;
    }
    const { seed, mineCount, boardWidth, boardHeight } = state;
    // Step 1: Open the cell where the player clicked
    boardCells = openCellAtIndex(boardCells, index);
    if (!isGameStarted) {
      isGameStarted = true;
      // Step 2: Add mines randomly to initialize the board
      boardCells = addMinesToBoard(boardCells, mineCount, create(seed));
      // Step 3: Calculate neighbor counts
      boardCells = calculateNeighborMineCounts(boardCells, boardWidth, boardHeight);
    } else if (cell.mined) {
      // Game is over if the player clicks on a mine
      isGameOver = true;
    }
    if (!cell.mined) {
      // Step 4: Expand all neighbor cells if required
      boardCells = expandCell(boardCells, boardWidth, boardHeight, x, y);
    }
    // Step 5: Determine if the player won
    didWin = calculateDidWin(boardCells);
    isGameOver = isGameOver || didWin;
    return {
      ...state,
      boardCells,
      isGameStarted,
      isGameOver,
      didWin,
    };
  }

  if (isActionFlagCell(action)) {
    const { x, y } = action.data;
    const { isGameOver } = state;
    if (isGameOver) {
      return state;
    }
    let { boardCells } = state;
    const index = getCellIndex(state, x, y);
    boardCells = flagCellAtIndex(boardCells, index);
    return {
      ...state,
      boardCells,
    };
  }

  if (isActionRestartGame(action)) {
    return {
      ...state,
      seed: action.data.seed,
      boardCells: initializeBoard(state.boardWidth, state.boardHeight),
      isGameStarted: false,
      isGameOver: false,
      didWin: false,
    };
  }

  if (isActionNewGame(action)) {
    const { rows: boardHeight, cols: boardWidth, mines: mineCount } = action.data;
    return {
      ...state,
      boardWidth,
      boardHeight,
      mineCount,
      showSettings: false,
      boardCells: initializeBoard(boardWidth, boardHeight),
      isGameStarted: false,
      isGameOver: false,
      didWin: false,
    };
  }

  if (isActionSetSeed(action)) {
    return {
      ...state,
      seed: action.data.seed,
    };
  }

  if (isActionToggleSettings(action)) {
    return {
      ...state,
      showSettings: action.data.show,
    };
  }

  return state;
};

export default reducer;

export const isShowingSettings = (state: RootReducerState): boolean => state.showSettings;
export const hasSeed = (state: RootReducerState): boolean => state.seed !== DEFAULT_SEED;
export const getBoardWidth = (state: RootReducerState): number => state.boardWidth;
export const getBoardHeight = (state: RootReducerState): number => state.boardHeight;
export const getBoardDimensions = (state: RootReducerState): Readonly<[number, number]> => [state.boardWidth, state.boardHeight];
export const getBoardCells = (state: RootReducerState): Readonly<Board> => state.boardCells;
export const getCellIndex = (state: RootReducerState, x: number, y: number): number => state.boardWidth * y + x;
export const isGameStarted = (state: RootReducerState): boolean => state.isGameStarted;
export const isGameOver = (state: RootReducerState): boolean => state.isGameOver;
export const isGameWon = (state: RootReducerState): boolean => state.didWin;
export const getTotalMineCount = (state: RootReducerState): number => state.mineCount;
export const getFlagCount = (state: RootReducerState): number => state.boardCells.map((cell) => cell.flagged).filter(Boolean).length;
export const getRemainingMineCount = (state: RootReducerState): number => Math.max(0, getTotalMineCount(state) - getFlagCount(state));
