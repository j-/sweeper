import * as React from 'react';
import { useSelector } from 'react-redux';
import { isGameStarted, isGameOver, getRemainingMineCount, isGameWon } from '../store';
import './GameStatus.css';

const GameStatusWin: React.FC = () => (
  <p>You win</p>
);

const GameStatusLose: React.FC = () => (
  <p>You lose</p>
);

const GameStatusInProgress: React.FC = () => (
  <p>Mines: {useSelector(getRemainingMineCount)}</p>
);

const GameStatusGetStarted: React.FC = () => (
  <p>Click any cell to start game</p>
);

const GameStatus: React.FC = () => {
  const isStarted = useSelector(isGameStarted);
  const isOver = useSelector(isGameOver);
  const didWin = useSelector(isGameWon);

  return (
    <div className="GameStatus">
      {
        didWin ? <GameStatusWin /> :
        isOver ? <GameStatusLose /> :
        isStarted ? <GameStatusInProgress /> :
        <GameStatusGetStarted />
      }
    </div>
  );
};

export default GameStatus;
