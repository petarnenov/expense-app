import React, { ReactElement, useState } from 'react';
import './ExpenseFilter.css';

interface Props {
  onChangeSelectData: Function;
  filter:string
}

export default function ExpenseFilter({
  onChangeSelectData,
  filter
}: Props): ReactElement {
  const changeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onChangeSelectData(value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={changeSelectHandler} value={filter}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
