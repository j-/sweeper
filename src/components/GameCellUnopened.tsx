import * as React from 'react';
import { BOMB, FLAG, EXPLOSION } from '../emoji';
import { Cell } from '../store/cell';
import './GameCellUnopened.css';

export interface Props {
  cell?: Cell | null;
  onOpen: () => void;
  onFlag: () => void;
}

const GameCellUnopened: React.FC<Props> = ({ cell, onOpen, onFlag, children }) => (
  <button
    className="GameCellUnopened"
    type="button"
    tabIndex={-1}
    onContextMenu={(e) => {
      e.preventDefault();
      onFlag();
    }}
    onMouseDown={(e) => {
      e.preventDefault();
    }}
    onMouseUp={(e) => {
      e.preventDefault();
      if (e.button !== 2) onOpen();
    }}
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
