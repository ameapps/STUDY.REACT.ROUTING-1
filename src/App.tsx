import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Help } from "./pages/Help";

export default function App() {
  const navigate = useNavigate(); // equivalente di Router.navigate()

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <button onClick={() => navigate('/help')}>Help</button>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Help" element={<Help />}></Route>
      </Routes>
    </>
  );
}