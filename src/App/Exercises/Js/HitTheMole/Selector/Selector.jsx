import { Button } from '../Button/Button';
import { useState, useEffect } from 'react';
export const Selector = ({ options, setBoardSize }) => {
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
  useEffect(() => {
    if (modifiedOptions) {
      modifiedOptions.find((item) => {
        if (item.isActive === true) {
          setBoardSize(item.value);
        }
      });
    }
  }, [modifiedOptions]);
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
