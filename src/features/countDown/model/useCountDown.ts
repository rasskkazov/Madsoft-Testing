import { useEffect, useState } from "react";

export const DEADLINE = "countDown";

export const useCountDown = () => {
  const [deadline, setDeadline] = useState(Date.now() + 1000 * 2 * 60);

  useEffect(() => {
    if (!localStorage.getItem(DEADLINE)) {
      localStorage.setItem(DEADLINE, deadline.toString());
    } else {
      setDeadline(Number(localStorage.getItem(DEADLINE)));
    }
  }, []);
  return { deadline };
};
