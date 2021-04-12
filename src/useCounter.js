import { useState } from 'react';

export default function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const upCount = () => setCount(count + 1);
  const downCount = () => setCount(count - 1);

  return [count, upCount, downCount];
}
