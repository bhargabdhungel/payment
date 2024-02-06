import { useEffect} from "react";

export default function useDebounce(fn, delay) {
  useEffect(() => {
    const handler = setTimeout(() => fn(), delay);
    return () => clearTimeout(handler);
  }, [fn, delay]);
}