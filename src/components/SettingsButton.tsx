import * as React from 'react';
import { useDispatch } from 'react-redux';
import { showSettings } from '../store/actions';
import Button, { Props as ButtonProps } from './Button';

export type Props = ButtonProps;

const SettingsButton: React.FC<Props> = ({ ...props }) => {
  const dispatch = useDispatch();
  const handleClick = React.useCallback<React.MouseEventHandler>((e) => {
    e.preventDefault();
    dispatch(showSettings());
  }, [dispatch]);
  return <Button onClick={handleClick} {...props} />;
}

export default SettingsButton;
