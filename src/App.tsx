import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Help } from "./pages/Help";
import { History } from "./pages/History";
import { PieChart } from "./pages/PieChart";

export default function App() {
  const navigate = useNavigate(); // equivalente di Router.navigate()

  return (
    <>
      <ul>
        <li className="list">
          <Link to="/">Home</Link>
          <Link to="/History">History</Link>
          <button onClick={() => navigate('/help')}>Help</button>
          <button onClick={() => navigate('/PieChart')}>PieChart</button>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Help" element={<Help />}></Route>
        <Route path="/History" element={<History />}></Route>
        <Route path="/PieChart" element={<PieChart />}></Route>
      </Routes>
    </>
  );
}