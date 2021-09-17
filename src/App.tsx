import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

import db from './store/db.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">Expense React App</header>
      <section>
        <NewExpense />
        <Expenses props={db.expenses} />
      </section>
    </div>
  );
}

export default App;
