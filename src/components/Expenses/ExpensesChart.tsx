import React, { ReactElement } from "react";
import Chart from "../Chart/Chart";
import { ChartBarItem } from "../Chart/ChartBar";
import { ExpenseItemType } from "./ExpenseItem";

interface Props {
  filteredExpenses: ExpenseItemType[];
}

export default function ExpensesChart({
  filteredExpenses,
}: Props): ReactElement {
  const items = Array.from(Array(12).keys()).reduce((acc, _, index) => {
    const month = new Date(new Date().setMonth(index))
      .toUTCString()
      .split(" ")[2];
    acc[index] = {
      key: index.toString(),
      label: month,
      value: 0,
      maxValue: 0,
    };
    return acc;
  }, [] as ChartBarItem[]);

  filteredExpenses.forEach((expense) => {
    const monthIndex = new Date(expense.date).getMonth();
    items[monthIndex].value += expense.amount;
    items.forEach((item) => (item.maxValue += expense.amount));
  });
  return <Chart items={items} />;
}
