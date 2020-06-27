import * as React from 'react';
import { EXPLOSION } from '../emoji';
import { Cell } from '../store/cell';
import NeighborMineCount from './NeighborMineCount';
import './GameCellOpened.css';

export interface Props {
  cell: Cell;
}

const GameCellOpened: React.FC<Props> = ({ cell }) => (
  <div className="GameCellOpened">
    <span className="GameCellOpened-content">
      {
        cell.mined ? EXPLOSION :
        cell.neighborMineCount > 0 ? <NeighborMineCount count={cell.neighborMineCount} /> :
        null
      }
    </span>
  </div>
);

export default GameCellOpened;
