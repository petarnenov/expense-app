import { ReactElement } from 'react';
import { ExpenseItemType} from "../Expenses/ExpenseItem"
import './ExpenseDate.css';

interface Props {
  props: ExpenseItemType;
}

export default function ExpenseDate({ props }: Props): ReactElement {
  const date = new Date(props.date);
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.toLocaleString('en-US', { year: 'numeric' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  return (
    <div className="expense-date">
      <div className="expense-date__month"> {month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
