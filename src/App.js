import "./App.css";
import Flexi from "./Flexi";
import data from "./data/data.json";

const onSubmit = (data) => {
  data.preventDefault();
  console.log(data);
};

function App() {
  return (
    <div className="App">
      <Flexi config={data} onSubmit={onSubmit} />
    </div>
  );
}

export default App;
