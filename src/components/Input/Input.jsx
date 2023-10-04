import { useState, useEffect } from "react";

const Input = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    const storedMinValue = localStorage.getItem("minValue");
    const storedMaxValue = localStorage.getItem("maxValue");

    if (storedMinValue) {
      setMinValue(parseInt(storedMinValue));
    }

    if (storedMaxValue) {
      setMaxValue(parseInt(storedMaxValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("minValue", minValue.toString());
    localStorage.setItem("maxValue", maxValue.toString());
  }, [minValue, maxValue]);

  return (
    <div>
      <div>
        <label htmlFor="minValueInput">Min</label>
        <input
          id="minValueInput"
          type="number"
          value={minValue}
          disabled={minValue === -5}
          onChange={(e) => setMinValue(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="maxValueInput">Max</label>
        <input
          id="maxValueInput"
          type="number"
          value={maxValue}
          disabled={maxValue === 5}
          onChange={(e) => setMaxValue(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};

export { Input };
