import { useState } from "react";

export const useCounter = ({
  initialCount = 0,
}: { initialCount?: number } = {}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount((prevState) => prevState + 1);
  const decrement = () => setCount((prevState) => prevState - 1);

  return { count, increment, decrement };
};
