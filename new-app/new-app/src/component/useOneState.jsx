import { useState } from 'react';

// Custom hook for managing a single value
export function useOneState(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [value, setValue];
}