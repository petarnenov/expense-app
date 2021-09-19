import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseItem.css";

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
  const clickDeleteMeHandler = async (id: number) => {
    try {
      await fetch(`http://127.0.0.1:3333/expenses/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    }
  };
  return (
    <li>
      <Card className="expense-item" key={props.id}>
        <ExpenseDate props={props} />
        <div className="expense-item__description">
          <h2>{props.description}</h2>
          <div className="expense-item__price">
            ${(props.amount / 100).toFixed(2)}
          </div>
        </div>
        <button
          className="delete-btn"
          onClick={() => clickDeleteMeHandler(props.id)}
        >
          Delete me
        </button>
      </Card>
    </li>
  );
};
