import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      {/* <Example></Example> */}
    </>
  );
}

export default App;