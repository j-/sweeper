import * as React from 'react';
import { BOMB, FLAG, EXPLOSION } from '../emoji';
import { Cell } from '../store/cell';
import './GameCellUnopened.css';

export interface Props {
  cell?: Cell;
  onMouseUp: React.MouseEventHandler;
}

const cancel: React.MouseEventHandler = (e) => e.preventDefault();

const GameCellUnopened: React.FC<Props> = ({ cell, onMouseUp, children }) => (
  <button
    className="GameCellUnopened"
    type="button"
    tabIndex={-1}
    onContextMenu={cancel}
    onMouseDown={cancel}
    onMouseUp={onMouseUp}
  >
    {
      cell ? (
        // Flag was placed correctly
        cell.flagged && cell.mined ? FLAG :
        // Flag was placed incorrectly
        cell.flagged && !cell.mined ? EXPLOSION :
        // Mine was not flagged
        !cell.flagged && cell.mined ? BOMB :
        // Cell was not mined or flagged
        null
      ) : children
    }
  </button>
);

export default GameCellUnopened;
