import React, { ReactElement, useState } from "react";
import AddNewExpenseButton from "./AddNewExpenseButton";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

interface Props {
  onSaveExpenseData: Function;
}

export default function NewExpense({ onSaveExpenseData }: Props): ReactElement {
  const [shouldShowForm, setShouldShowForm] = useState(false);

  const showForm = () => {
    setShouldShowForm(true);
  };
  const hideForm = () => {
    setShouldShowForm(false);
  };
  return (
    <div className="new-expense">
      {!shouldShowForm && <AddNewExpenseButton showForm={showForm} />}
      {shouldShowForm && (
        <NewExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          hideForm={hideForm}
        />
      )}
    </div>
  );
}
