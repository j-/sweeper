import * as React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { openCell, flagCell } from '../store/actions';
import {
  getBoardDimensions as selectBoardDimensions,
  getBoardCells as selectBoardCells,
  isGameOver as selectIsGameOver,
} from '../store';
import GameCell from './GameCell';
import './GameBoard.css';

const cancel: React.MouseEventHandler = (e) => e.preventDefault();

const GameBoard: React.FC = () => {
  const [width, height] = useSelector(selectBoardDimensions);
  const cells = useSelector(selectBoardCells);
  const isGameOver = useSelector(selectIsGameOver);
  const dispatch = useDispatch();
  const children: JSX.Element[] = [];
  const gridTemplate = `repeat(${height}, 1fr) / repeat(${width}, 1fr)`;
  const className = classNames('GameBoard', isGameOver && 'GameBoard--is-game-over');
  for (let i = 0; i < width * height; i++) {
    const cell = cells[i];
    const x = i % width;
    const y = Math.floor(i / width);
    const handleMouseUp: React.MouseEventHandler = (e) => {
      e.preventDefault();
      const placeFlag = e.getModifierState('Meta') || e.getModifierState('Control') || e.button === 2;
      dispatch(placeFlag ? flagCell(x, y) : openCell(x, y));
    };
    children.push(
      <GameCell key={i} isGameOver={isGameOver} cell={cell} onMouseUp={handleMouseUp} />
    );
  }
  return (
    <div className={className} style={{ gridTemplate }} onContextMenu={cancel}>
      {children}
    </div>
  )
};

export default GameBoard;
