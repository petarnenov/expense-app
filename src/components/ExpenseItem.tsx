import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

export type ExpenseItemType = {
  id: number;
  date: number;
  description: string;
  amount: number;
};
interface Props {
  props: ExpenseItemType;
}

export const ExpenseItem = ({ props }: Props) => {
  return (
    <div>
      <div className="expense-item" key={props.id}>
        <ExpenseDate props={props} />
        <div className="expense-item__description">
          <h2>{props.description}</h2>
          <div className="expense-item__price">
            ${(props.amount / 100).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};
