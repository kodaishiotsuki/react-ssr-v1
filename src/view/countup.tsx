import React, { useEffect, useState } from "react";

const CountUp: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
      <p>{new Date().toTimeString()}</p>
    </>
  );
};

export default CountUp;
