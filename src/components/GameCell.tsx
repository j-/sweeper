import * as React from 'react';
import { FLAG } from '../emoji';
import { Cell } from '../store/cell';
import GameCellOpened from './GameCellOpened';
import GameCellUnopened from './GameCellUnopened';
import './GameCell.css';

export interface Props {
  isGameOver: boolean;
  cell: Cell;
  onMouseUp: React.MouseEventHandler;
}

const GameCell: React.FC<Props> = ({ isGameOver, cell, onMouseUp }) => (
  <div className="GameCell">
    {
      cell.opened ?
        <GameCellOpened cell={cell} /> :
        <GameCellUnopened cell={isGameOver ? cell : null} onMouseUp={onMouseUp}>
          {cell.flagged ? FLAG : null}
        </GameCellUnopened>
    }
  </div>
);

export default GameCell;
