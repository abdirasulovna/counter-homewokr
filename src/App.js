import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const Plus = () => {
    setCount(count + 1);
  };

  const Minus = () => {
if (count > 0){
    setCount(count - 1);
}
  };

  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="count">
        <div>{count}</div>
        <button onClick={Plus}>increase</button>
        <button onClick={Minus}>decrease</button>
      </div>
    </div>
  );
}

export default App;
