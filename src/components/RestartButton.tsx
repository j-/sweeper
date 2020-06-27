import * as React from 'react';
import { useDispatch } from 'react-redux';
import { restartGame } from '../store/actions';
import Button, { Props as ButtonProps } from './Button';

export type Props = ButtonProps;

const RestartButton: React.FC<Props> = ({ ...props }) => {
  const dispatch = useDispatch();
  const handleClick = React.useCallback<React.MouseEventHandler>((e) => {
    e.preventDefault();
    dispatch(restartGame());
  }, [dispatch]);
  return <Button onClick={handleClick} {...props} />;
}

export default RestartButton;
