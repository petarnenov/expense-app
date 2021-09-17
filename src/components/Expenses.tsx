import { ReactElement } from 'react';
import { ExpenseItem, ExpenseItemType } from './ExpenseItem';
import './Expenses.css';

interface Props {
  props: ExpenseItemType[];
}

export default function Expenses({ props }: Props): ReactElement {
  return (
    <div className="expenses">
      {props.map((expense) => {
        return <ExpenseItem props={expense} />;
      })}
    </div>
  );
}
