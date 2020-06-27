import * as React from 'react';
import { useDispatch } from 'react-redux';
import { showSettings } from '../store/actions';
import Button from './Button';

const SettingsButton: React.FC = ({ ...props }) => {
  const dispatch = useDispatch();
  const handleClick = React.useCallback<React.MouseEventHandler>((e) => {
    e.preventDefault();
    dispatch(showSettings());
  }, [dispatch]);
  return <Button onClick={handleClick} className="btn btn-light" {...props}>Settings</Button>;
}

export default SettingsButton;
