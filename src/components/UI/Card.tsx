import { ReactElement } from 'react';
import './Card.css';

interface Props {
  children: ReactElement<any, any>[];
  className: string;
}

export default function Card(props: Props): ReactElement {
  const classes = `card ${props.className}`;
  return <div className={classes}>{props.children}</div>;
}
