import { ReactElement } from 'react';
import Card from '../UI/Card';
import { ExpenseItem, ExpenseItemType } from '../Expenses/ExpenseItem';
import './Expenses.css';

interface Props {
  props: ExpenseItemType[];
}

export default function Expenses({ props }: Props): ReactElement {
  return (
    <Card className="expenses">
      {props.map((expense) => {
        return <ExpenseItem props={expense} />;
      })}
    </Card>
  );
}
