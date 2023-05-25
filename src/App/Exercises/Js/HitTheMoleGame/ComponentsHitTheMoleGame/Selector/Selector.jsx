import { useState } from 'react';
import { Button } from '../Button/Button';

export const Selector = (options) => {
  const [time, setTime] = useState(2);
  const [moles, setMoles] = useState(1);

  return (
    <div>
      {options.map(({ label, value }) => (
        <Button isActive={moles === value} onClick={() => setMoles(value)}>
          {label}
        </Button>
      ))}
    </div>
  );
};
