import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoardWidth, getTotalMineCount, MIN_ROWS, MAX_ROWS, MIN_COUNT, getMaxMineCount } from '../store';
import { newGame, hideSettings } from '../store/actions';
import Button from './Button';

const NewGameMenu: React.FC = () => {
  const dispatch = useDispatch();
  const [size, setSize] = React.useState<string>(String(useSelector(getBoardWidth)));
  const [mines, setMines] = React.useState<string>(String(useSelector(getTotalMineCount)));
  const handleChangeSize: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget;
    setSize(value || '');
  };
  const handleChangeMines: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget;
    setMines(value || '');
  };
  const handleBlurSize = () => {
    const newSize = Math.max(MIN_ROWS, Math.min(MAX_ROWS, Number(size) || 0));
    setSize(String(newSize));
    setMines(String(Math.max(MIN_COUNT, Math.min(getMaxMineCount(Number(newSize) * Number(newSize)), Number(mines)))));
  };
  const handleBlurMines = () => {
    setMines(String(Math.max(MIN_COUNT, Math.min(getMaxMineCount(Number(size) * Number(size)), Number(mines)))));
  };
  const handleClickNewGame: React.MouseEventHandler = (e) => {
    e.preventDefault();
    dispatch(newGame(size, size, mines));
  };
  const handleClickCancel: React.MouseEventHandler = (e) => {
    e.preventDefault();
    dispatch(hideSettings());
  };
  return (
    <div className="NewGameMenu card card-body" style={{ maxWidth: '20em' }}>
      <div className="form-group">
        <label htmlFor="NewGameMenu-size">Size</label><br />
        <input id="NewGameMenu-size" className="form-control" type="number" value={size} onChange={handleChangeSize} onBlur={handleBlurSize} />
      </div>
      <div className="form-group">
        <label htmlFor="NewGameMenu-mines">Mines</label><br />
        <input id="NewGameMenu-mines" className="form-control" type="number" value={mines} onChange={handleChangeMines} onBlur={handleBlurMines} />
      </div>
      <div>
        <Button onClick={handleClickCancel}>
          Cancel
        </Button>{' '}
        <Button className="btn btn-primary" onClick={handleClickNewGame}>
          Start game
        </Button>
      </div>
    </div>
  );
};

export default NewGameMenu;
