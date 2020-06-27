import * as React from 'react';
import GameBoard from './GameBoard';
import GameStatus from './GameStatus';
import { useSelector } from 'react-redux';
import { getBoardWidth, getBoardHeight } from '../store';
import './Game.css';

const Game: React.FC = () => {
  const boardWidth = useSelector(getBoardWidth);
  const boardHeight = useSelector(getBoardHeight);
  return (
    <div className="Game">
      <div className="Game-board mt-4 mb-4" style={{ width: 40 * boardWidth, height: 40 * boardHeight }}>
        <GameBoard />
      </div>
      <GameStatus />
    </div>
  );
};

export default Game;
