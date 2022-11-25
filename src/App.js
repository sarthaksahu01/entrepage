import { Nav } from "./components/Nav";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Teams } from "./components/Teams";
import { LineChart } from "./components/LineChart";
import { PieChart } from "recharts";

function App() {
  return (
    <>
      <Nav />
      <Dashboard />
      <Teams />
      <LineChart />
      <PieChart />
    </>
  );
}

export default App;
