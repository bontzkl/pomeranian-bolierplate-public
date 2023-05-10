import React, { useState } from 'react';

import './style.css';

export function Exercise3() {
  const [isBigger, setIsBigger] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const handleChange = (event) => {
    if (event.target.value > 10) {
      setIsBigger(true);
      setIsEmpty(true);
    } else if (event.target.value === '') {
      setIsEmpty(false);
    } else {
      setIsBigger(false);
      setIsEmpty(true);
    }
  };
  const text = isBigger ? 'Tak, jest wieksza' : 'Nie, jest mmiejsza';
  return (
    <div>
      <h1>Czy A jest większe od 10?</h1>
      <input type="number" onChange={handleChange} />
      {isEmpty && <p>{text}</p>}
    </div>
  );
}
