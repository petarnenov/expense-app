import React, { ReactElement } from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

interface Props {}

export default function NewExpense({}: Props): ReactElement {
  return (
    <div className="new-expense">
      <NewExpenseForm />
    </div>
  );
}
