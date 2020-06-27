import * as React from 'react';
import { FLAG } from '../emoji';
import { Cell } from '../store/cell';
import GameCellOpened from './GameCellOpened';
import GameCellUnopened from './GameCellUnopened';
import './GameCell.css';

export interface Props {
  isGameOver: boolean;
  cell: Cell;
  onOpen: () => void;
  onFlag: () => void;
}

const GameCell: React.FC<Props> = ({ isGameOver, cell, onOpen, onFlag }) => (
  <div className="GameCell">
    {
      cell.opened ?
        <GameCellOpened cell={cell} /> :
        <GameCellUnopened cell={isGameOver ? cell : null} onOpen={onOpen} onFlag={onFlag}>
          {cell.flagged ? FLAG : null}
        </GameCellUnopened>
    }
  </div>
);

export default GameCell;
