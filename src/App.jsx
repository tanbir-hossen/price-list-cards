import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Prices from "./components/Price-Lists/Prices";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      {/* <Example></Example> */}
      <Prices></Prices>
    </>
  );
}

export default App;
