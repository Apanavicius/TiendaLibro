import { useState } from "react";

export const useCount = (initial, stock, minimo = 1) => {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    count > minimo && setCount(count - 1);
  };

  const increment = () => {
    count < stock && setCount(count + 1);
  };

  return { count, decrement, increment };
};
