import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { ExpenseFormType } from './components/NewExpense/NewExpenseForm';

import db from './store/db.json';

function App() {
  const onSaveExpenseData = (data: ExpenseFormType) => {
    console.log('Do what you want with data in App component: ', data);
  };

  return (
    <div className="App">
      <header className="App-header">Expense React App</header>
      <section>
        <NewExpense onSaveExpenseData={onSaveExpenseData} />
        <Expenses props={db.expenses} />
      </section>
    </div>
  );
}

export default App;
