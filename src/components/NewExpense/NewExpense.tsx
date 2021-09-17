import React, { ReactElement } from 'react';
import './NewExpense.css';
import NewExpenseForm, { ExpenseFormType } from './NewExpenseForm';

interface Props {
  onSaveExpenseData: Function;
}

export default function NewExpense({ onSaveExpenseData }: Props): ReactElement {
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={onSaveExpenseData} />
    </div>
  );
}
