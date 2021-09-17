import React, { ReactElement, useState } from 'react';
import './NewExpenseForm.css';

interface Props {}

export default function NewExpenseForm({}: Props): ReactElement {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const changeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
  };

  const changeAmountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);
  };

  const changeDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDate(value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={changeTitleHandler}
            value={title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            onChange={changeAmountHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2021-09-17"
            onChange={changeDateHandler}
            value={date}
          />
        </div>
        <div className="new-expensee__actions">
          <button type="submit">Add expense</button>
        </div>
      </div>
    </form>
  );
}
