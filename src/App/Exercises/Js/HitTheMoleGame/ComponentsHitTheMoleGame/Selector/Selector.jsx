import { Button } from '../Button/Button';
import { useState } from 'react';
export const Selector = ({ options }) => {
  const [modifiedOptions, setModifiedOptions] = useState(options);

  const handleClick = (clickedButton) => {
    setModifiedOptions(
      modifiedOptions.map((option) => {
        return {
          ...option,
          isActive: clickedButton === option.value,
        };
      })
    );
  };
  return (
    <div>
      {modifiedOptions.map(({ label, value, isActive }) => (
        <Button
          isActive={isActive}
          onClick={() => {
            handleClick(value);
          }}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
