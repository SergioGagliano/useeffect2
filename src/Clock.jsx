import React, { useState, useEffect } from "react";

export function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [time]);

  return <h2>Ora corrente: {time}</h2>;
};
