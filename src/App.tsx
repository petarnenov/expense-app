import "./App.css";
import Expenses from "./components/Expenses";
import db from "./store/db.json";

function App() {
  console.log(db);
  return (
    <div className="App">
      <header className="App-header">Expense React App</header>
      <section>
        <Expenses props={db.expenses} />
      </section>
    </div>
  );
}

export default App;
