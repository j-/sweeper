import { Action, ActionCreator } from 'redux';
import { create as createSeed } from '../seed';

export const ACTION_SET_BOARD_DIMENSIONS = 'SET_BOARD_DIMENSIONS';

export interface ActionSetBoardDimensions extends Action<typeof ACTION_SET_BOARD_DIMENSIONS> {
  data: {
    width: number;
    height: number;
  };
}

export const isActionSetBoardDimensions = (action: Action): action is ActionSetBoardDimensions => (
  action.type === ACTION_SET_BOARD_DIMENSIONS
);

export const setBoardDimensions: ActionCreator<ActionSetBoardDimensions> = (width: number, height: number) => ({
  type: ACTION_SET_BOARD_DIMENSIONS,
  data: {
    width,
    height,
  },
});

export const ACTION_OPEN_CELL = 'OPEN_CELL';

export interface ActionOpenCell extends Action<typeof ACTION_OPEN_CELL> {
  data: {
    x: number;
    y: number;
  };
}

export const isActionOpenCell = (action: Action): action is ActionOpenCell => (
  action.type === ACTION_OPEN_CELL
);

export const openCell: ActionCreator<ActionOpenCell> = (x: number, y: number) => ({
  type: ACTION_OPEN_CELL,
  data: {
    x,
    y,
  },
});

export const ACTION_FLAG_CELL = 'FLAG_CELL';

export interface ActionFlagCell extends Action<typeof ACTION_FLAG_CELL> {
  data: {
    x: number;
    y: number;
  };
}

export const isActionFlagCell = (action: Action): action is ActionFlagCell => (
  action.type === ACTION_FLAG_CELL
);

export const flagCell: ActionCreator<ActionFlagCell> = (x: number, y: number) => ({
  type: ACTION_FLAG_CELL,
  data: {
    x,
    y,
  },
});

export const ACTION_RESTART_GAME = 'RESTART_GAME';

export interface ActionRestartGame extends Action<typeof ACTION_RESTART_GAME> {
  data: {
    seed: string;
  };
}

export const isActionRestartGame = (action: Action): action is ActionRestartGame => (
  action.type === ACTION_RESTART_GAME
);

export const restartGame: ActionCreator<ActionRestartGame> = (seed: string = createSeed()) => ({
  type: ACTION_RESTART_GAME,
  data: {
    seed,
  },
});

export const ACTION_SET_SEED = 'SET_SEED';

export interface ActionSetSeed extends Action<typeof ACTION_SET_SEED> {
  data: {
    seed: string;
  };
}

export const isActionSetSeed = (action: Action): action is ActionSetSeed => (
  action.type === ACTION_SET_SEED
);

export const setSeed: ActionCreator<ActionSetSeed> = (seed: string = createSeed()) => ({
  type: ACTION_SET_SEED,
  data: {
    seed,
  },
});

export const ACTION_NEW_GAME = 'NEW_GAME';

export interface ActionNewGame extends Action<typeof ACTION_NEW_GAME> {
  data: {
    rows: number;
    cols: number;
    mines: number;
  };
}

export const isActionNewGame = (action: Action): action is ActionNewGame => (
  action.type === ACTION_NEW_GAME
);

export const newGame: ActionCreator<ActionNewGame> = (rows: number, cols: number, mines: number) => ({
  type: ACTION_NEW_GAME,
  data: {
    rows,
    cols,
    mines,
  },
});

export const ACTION_TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';

export interface ActionToggleSettings extends Action<typeof ACTION_TOGGLE_SETTINGS> {
  data: {
    show: boolean;
  };
}

export const isActionToggleSettings = (action: Action): action is ActionToggleSettings => (
  action.type === ACTION_TOGGLE_SETTINGS
);

export const toggleSettings: ActionCreator<ActionToggleSettings> = (show: boolean) => ({
  type: ACTION_TOGGLE_SETTINGS,
  data: {
    show,
  },
});

export const showSettings: ActionCreator<ActionToggleSettings> = () => toggleSettings(true);
export const hideSettings: ActionCreator<ActionToggleSettings> = () => toggleSettings(false);
