import "./App.css";
import PersonsTable from "./features/person/PersonsTable";
import { data } from "./data/data";
function App() {
  return (
    <div className="App">
      {/* Title of the company I'm exited to join :) */}
      <h2>Procom Coding Excercise </h2>
      <PersonsTable data={data} />
    </div>
  );
}

export default App;
