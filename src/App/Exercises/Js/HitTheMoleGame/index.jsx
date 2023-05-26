import { Button } from './ComponentsHitTheMoleGame/Button/Button';
import { Selector } from './ComponentsHitTheMoleGame/Selector/Selector';

import './styles.css';

export function HitTheMoleGame() {
  return (
    <div>
      <div className="settings-container">
        <div className="label">CZAS GRY</div>
        <Selector
          options={[
            { label: '1 minuta', value: 1, isActive: false },
            { label: '2 minuty', value: 2, isActive: true },
            { label: '3 minuty', value: 3, isActive: false },
          ]}
        />
      </div>
      <div className="settings-container">
        <div className="label">LICZBA KRETÓW</div>
        <Selector
          options={[
            { label: '1 kret', value: 1, isActive: true },
            { label: '2 krety', value: 2, isActive: false },
            { label: '3 krety', value: 3, isActive: false },
          ]}
        />
      </div>
      <div className="settings-container">
        <div className="label">PRZYCISKI STERUJĄCE</div>
        <Button>START!</Button>
      </div>
    </div>
  );
}
