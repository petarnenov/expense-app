import React, { ReactElement } from "react";
import { ExpenseItem, ExpenseItemType } from "./ExpenseItem";
import "./ExpensesList.css";

interface Props {
  filteredExpenses: ExpenseItemType[];
}

export default function ExpensesList({
  filteredExpenses,
}: Props): ReactElement {
  let expensesContent: JSX.Element | JSX.Element[] = (
    <h2 className="expenses-list__fallback"> No expenses found. </h2>
  );
  if (filteredExpenses.length) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem props={expense} key={expense.id} />
    ));
  }
  return <ul className="expenses-list">{expensesContent}</ul>;
}
