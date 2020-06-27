import * as React from 'react';
import './NeighborMineCount.css';

export interface Props {
  count: number;
}

const NeighborMineCount: React.FC<Props> = ({ count }) => (
  <span className={`NeighborMineCount NeighborMineCount--${count}`}>
    {count}
  </span>
);

export default NeighborMineCount;
