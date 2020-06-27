export interface Cell {
  /** Has the player clicked this cell? */
  readonly opened: boolean;
  /** Has a flag been set on this cell? */
  readonly flagged: boolean;
  /** Does this cell contain a mine? */
  readonly mined: boolean;
  /** How many neighbors are mines? */
  readonly neighborMineCount: number;
}

export const open = (cell: Cell): Cell => ({
  ...cell,
  opened: true,
});

export const mine = (cell: Cell): Cell => ({
  ...cell,
  mined: true,
});

export const flag = (cell: Cell): Cell => ({
  ...cell,
  flagged: !cell.flagged,
});

export const INITIAL: Readonly<Cell> = {
  opened: false,
  flagged: false,
  mined: false,
  neighborMineCount: 0,
};

export const MINE: Readonly<Cell> = mine(INITIAL);
