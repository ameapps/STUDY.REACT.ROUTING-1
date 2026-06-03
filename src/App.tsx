import "./styles.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Help } from "./pages/Help";
import { History } from "./pages/History";
import { PieChart } from "./pages/PieChart";
import { ColorVisualizer } from "./pages/ColorVisualizer/ColorVisualizer";
import DisplayTimer from "./pages/Timer1.tsx";
import DisplayTimer1 from "./pages/Timer1.tsx";
import DisplayTimer2 from "./pages/Timer2.tsx";

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
          <button onClick={() => navigate('/ColorVisualizer')}>ColorVisualizer</button>
          <button onClick={() => navigate('/DisplayTimer1')}>DisplayTimer 1</button>
          <button onClick={() => navigate('/DisplayTimer2')}>DisplayTimer 2</button>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Help" element={<Help />}></Route>
        <Route path="/History" element={<History />}></Route>
        <Route path="/PieChart" element={<PieChart />}></Route>
        <Route path="/ColorVisualizer" element={<ColorVisualizer />}></Route>
        <Route path="/DisplayTimer1" element={<DisplayTimer1 />}></Route>
        <Route path="/DisplayTimer2" element={<DisplayTimer2 />}></Route>  
      </Routes>
    </>
  );
}