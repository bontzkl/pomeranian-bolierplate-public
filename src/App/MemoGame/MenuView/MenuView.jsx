import { Button } from '../../HitTheMoleGame/Button/Button';
import { Menu } from '../Menu/Menu.jsx';
import { Selector } from '../../HitTheMoleGame/Selector/Selector.jsx';

export const MenuView = ({
  setIsGameStarted,
  setTime,
  setStepAmount,
  setBoardSize,
  boardSize,
  setShowRanking,
  showRanking,
}) => {
  return (
    <>
      <Menu label="Rozmiar planszy: ">
        <Selector
          options={[
            { label: '8 elementów', value: 8 },
            { label: '16 elementów', value: 16 },
            { label: '20 elementów', value: 20 },
          ]}
          setBoardSize={setBoardSize}
        />
      </Menu>
      <Menu label="Przyciski sterujące: ">
        <Button
          onClick={() => {
            setIsGameStarted(true);
            setTime(0);
            setStepAmount(0);
          }}
          isDisabled={boardSize === 0}
        >
          Start
        </Button>
        <Button
          onClick={() => {
            setShowRanking(!showRanking);
          }}
        >
          Tablica wyników
        </Button>
      </Menu>
    </>
  );
};
