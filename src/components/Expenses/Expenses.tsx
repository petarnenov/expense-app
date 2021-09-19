import { ReactElement, useState } from "react";
import Card from "../UI/Card";
import { ExpenseItemType } from "../Expenses/ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

interface Props {
  props: ExpenseItemType[];
}

export default function Expenses({ props }: Props): ReactElement {
  const [filter, setFilter] = useState("2020");

  const onChangeSelectData = (data: string) => {
    setFilter(data);
    console.log("onChangeSelectData call with: ", data);
  };
  const filteredExpenses = props.filter(
    (expense) => new Date(expense.date).getFullYear() === +filter
  );

  return (
    <Card className="expenses">
      <ExpenseFilter onChangeSelectData={onChangeSelectData} filter={filter} />
      <ExpensesChart filteredExpenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}
