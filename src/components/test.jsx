import { useState } from 'react';

// Custom Hook
export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const add = () => setCount((prev) => prev + 1); // Increment by 1
  const subtract = () => setCount((prev) => prev - 1); // Decrement by 1

  return { count, add, subtract }; // Return the state and actions
}