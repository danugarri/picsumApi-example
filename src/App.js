import { useState } from "react";
import { BasicModal } from "./components/modal/BasicModal";
import { Watch } from "./components/watch/Watch";
import './App.css'

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Watch />
      <BasicModal setCounter={setCounter} counter={counter} />
      <p>Photo id: {counter}</p>
    </div>
  );
}
