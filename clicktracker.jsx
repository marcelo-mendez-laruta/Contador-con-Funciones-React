import React, { useState } from 'react';
export default function ClickTracker() {
  let aux = {
    cant: 0,
    lastClick: 'Aun no se hizo Click',
  };
  const [count, setCount] = useState(aux);
  const handleClick = () => {
    let newaux = {
      cant: count.cant + 1,
      lastClick: Date(),
    };
    setCount(newaux);
  };
  return (
    <div>
      <p>Contador de Clicks</p>
      <button onClick={handleClick}>Dame click</button>
      <p>Contador:{count.cant}</p>
      {count.cant > 0 && (
        <p>
          "Ultimo Click: <span>{count.lastClick}"</span>
        </p>
      )}
    </div>
  );
}
