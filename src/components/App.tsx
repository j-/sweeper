import * as React from 'react';
import { useSelector } from 'react-redux';
import RestartButton from './RestartButton';
import SettingsButton from './SettingsButton';
import NewGameMenu from './NewGameMenu';
import { isShowingSettings } from '../store';
import Game from './Game';
import './App.css';

const App: React.FC = () => {
  const settings = useSelector(isShowingSettings);
  return (
    <div className="App container pt-5 pb-5">
      <nav className="navbar navbar-light bg-light">
        <RestartButton className="btn btn-dark mr-auto">New game</RestartButton>
        <SettingsButton className="btn btn-light ml-1">Options</SettingsButton>
      </nav>
      <div className="d-flex flex-column align-items-center">
        {settings && (
          <div className="mt-4 mb-4">
            <NewGameMenu />
          </div>
        )}
        {!settings && (
          <Game />
        )}
      </div>
    </div>
  );
};

export default App;
