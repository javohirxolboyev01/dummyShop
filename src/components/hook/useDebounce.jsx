import { useState, useEffect } from "react";

export default function useDebounce(value, delay = 500) {
  const [Value, setValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return Value;
}
