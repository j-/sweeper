import * as React from 'react';
import { useSelector } from 'react-redux';
import GameBoard from './GameBoard';
import GameStatus from './GameStatus';
import RestartButton from './RestartButton';
import SettingsButton from './SettingsButton';
import NewGameMenu from './NewGameMenu';
import { getBoardWidth, getBoardHeight, isShowingSettings } from '../store';
import './App.css';

const App: React.FC = () => {
  const settings = useSelector(isShowingSettings);
  const boardWidth = useSelector(getBoardWidth);
  const boardHeight = useSelector(getBoardHeight);
  if (settings) {
    return (
      <div className="App">
        <NewGameMenu />
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="App-game-board" style={{ width: 40 * boardWidth, height: 40 * boardHeight }}>
          <GameBoard />
        </div>
        <GameStatus />
        <br /><br />
        <RestartButton />
        <br /><br />
        <SettingsButton />
      </div>
    );
  }
};

export default App;
