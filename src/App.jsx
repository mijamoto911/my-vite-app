import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";

import { useState, useEffect } from "react";
import "./App.css";

export const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter]);

  const handleClickReset = () => {
    setCounter(counter === 0);
  };
  const handleClickIncrement = () => {
    setCounter(counter < 5 ? counter + 1 : counter);
  };
  const handleClickDecrement = () => {
    setCounter(counter > -5 ? counter - 1 : counter);
  };

  return (
    <div>
      <h2>Counter {counter}</h2>
      <div>
        <Button
          className="inc"
          onClick={handleClickIncrement}
          disabled={counter === 5}
        >
          +
        </Button>
        <Button
          className="dec"
          onClick={handleClickDecrement}
          disabled={counter === -5}
        >
          -
        </Button>
        <Button className="reset" onClick={handleClickReset}>
          reset
        </Button>
      </div>
      <div>
        <Input />
      </div>
    </div>
  );
};
