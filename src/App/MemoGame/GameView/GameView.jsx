import { Button } from '../../HitTheMoleGame/Button/Button';
import { Menu } from '../Menu/Menu.jsx';
import './GameView.css';

export const GameView = ({
  setIsGameStarted,
  stepAmount,
  timeScore,
  setBoardSize,
}) => {
  return (
    <>
      <Menu label="Czas gry: ">
        <div className="menu-field">{timeScore}</div>
      </Menu>
      <Menu label="Liczba ruchów: ">
        <div className="menu-field">{stepAmount}</div>
      </Menu>
      <Menu label="Przyciski sterujące: ">
        <Button
          onClick={() => {
            setIsGameStarted(false);
            setBoardSize(0);
          }}
        >
          Stop
        </Button>
      </Menu>
    </>
  );
};
