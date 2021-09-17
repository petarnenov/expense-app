import { ReactElement, useState } from 'react';
import Card from '../UI/Card';
import { ExpenseItem, ExpenseItemType } from '../Expenses/ExpenseItem';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

interface Props {
  props: ExpenseItemType[];
}

export default function Expenses({ props }: Props): ReactElement {
  const [filter, setFilter] = useState('2020');

  const onChangeSelectData = (data: string) => {
    setFilter(data);
    console.log('onChangeSelectData call with: ', data);
  };
  return (
    <div className="expenses">
      <ExpenseFilter onChangeSelectData={onChangeSelectData} filter={filter} />
      <Card className="expenses">
        {props.map((expense) => {
          return <ExpenseItem props={expense} key={expense.id} />;
        })}
      </Card>
    </div>
  );
}
