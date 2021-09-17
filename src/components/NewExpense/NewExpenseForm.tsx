import React, { ReactElement, useState } from 'react';
import './NewExpenseForm.css';

interface Props {}

interface ExpenseState {
  description: string;
  amount: string;
  date: string;
}

type ExpenseFormField = 'description' | 'amount' | 'date';

export default function NewExpenseForm({}: Props): ReactElement {
  const [state, setState] = useState({} as ExpenseState);

  const changeHandler =
    (e: React.ChangeEvent<HTMLInputElement>) => (field: ExpenseFormField) => {
      const value = e.target.value;
      setState((prevState) => ({ ...prevState, [field]: value }));
    };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={(e) => changeHandler(e)('description')}
            value={state.description}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            onChange={(e) => changeHandler(e)('amount')}
            value={state.amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2021-09-17"
            onChange={(e) => changeHandler(e)('date')}
            value={state.date}
          />
        </div>
        <div className="new-expensee__actions">
          <button type="submit">Add expense</button>
        </div>
      </div>
    </form>
  );
}
