import { Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "./component/Home";

function App() {
  console.log(" App");
  const [play, setPlay] = useState(false);
  return <>{play ? <Outlet /> : <Home setPlay={setPlay} />}</>;
}

export default App;
