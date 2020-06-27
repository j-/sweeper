import * as React from 'react';
import { useDispatch } from 'react-redux';
import { restartGame } from '../store/actions';
import Button from './Button';

const RestartButton: React.FC = ({ ...props }) => {
  const dispatch = useDispatch();
  const handleClick = React.useCallback<React.MouseEventHandler>((e) => {
    e.preventDefault();
    dispatch(restartGame());
  }, [dispatch]);
  return <Button onClick={handleClick} className="btn btn-dark" {...props}>New game</Button>;
}

export default RestartButton;
