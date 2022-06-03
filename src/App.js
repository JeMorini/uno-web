import "./App.css";
import Table from "../src/pages/Table";

function App() {
  const cards = [
    { number: 1, color: "red" },
    { number: 2, color: "red" },
    { number: 3, color: "red" },
    { number: 4, color: "red" },
    { number: 5, color: "red" },
    { number: 6, color: "red" },
    { number: 7, color: "red" },
    { number: 8, color: "red" },
    { number: 9, color: "red" },
    { number: 1, color: "blue" },
    { number: 2, color: "blue" },
    { number: 3, color: "blue" },
    { number: 4, color: "blue" },
    { number: 5, color: "blue" },
    { number: 6, color: "blue" },
    { number: 7, color: "blue" },
    { number: 8, color: "blue" },
    { number: 9, color: "blue" },
    { number: 1, color: "green" },
    { number: 2, color: "green" },
    { number: 3, color: "green" },
    { number: 4, color: "green" },
    { number: 5, color: "green" },
    { number: 6, color: "green" },
    { number: 7, color: "green" },
    { number: 8, color: "green" },
    { number: 9, color: "green" },
    { number: 1, color: "yellow" },
    { number: 2, color: "yellow" },
    { number: 3, color: "yellow" },
    { number: 4, color: "yellow" },
    { number: 5, color: "yellow" },
    { number: 6, color: "yellow" },
    { number: 7, color: "yellow" },
    { number: 8, color: "yellow" },
    { number: 9, color: "yellow" },
  ];
  const cardSelected = Math.random() * (35 - 0) + 0;
  return <Table />;
}

export default App;
