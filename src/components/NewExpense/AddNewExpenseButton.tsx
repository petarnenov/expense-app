import React, { ReactElement } from "react";

interface Props {
  showForm: Function;
}

export default function AddNewExpenseButton({ showForm }: Props): ReactElement {
  return (
    <div>
      <button onClick={() => showForm()}>Add New Expense</button>
    </div>
  );
}
