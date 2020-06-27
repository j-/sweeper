import * as React from 'react';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = (props) => (
  <button type="button" className="btn btn-light" {...props} />
);

export default Button;
