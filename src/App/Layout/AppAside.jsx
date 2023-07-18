import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { FAQIcon } from '../Components/Icons/FAQIcon';
import { GameIcon2 } from '../Components/Icons/GameIcon2';
import { GameIcon1 } from '../Components/Icons/GameIcon1';

export function AppAside({ hamburgerOpen }) {
  return (
    <div>
      <aside className={hamburgerOpen ? '' : 'closed'}>
        <nav>
          <ul>
            <li>
              <NavLink className="aside-row" to="dashboard">
                <HouseIcon className="menu-icon" /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink className="aside-row" to="my-cv">
                <PersonalCardIcon className="menu-icon" />
                Moje CV
              </NavLink>
            </li>
            <li>
              <NavLink className="aside-row" to="blocks">
                <ElementIcon className="menu-icon" /> Bloki
              </NavLink>
            </li>
            <li>
              <NavLink className="aside-row" to="exercises">
                <EditIcon className="menu-icon" /> Ćwiczenia
              </NavLink>
            </li>
            <li>
              <NavLink className="aside-row" to="calendar">
                <CalendarIcon className="menu-icon" />
                Kalendarz
              </NavLink>
            </li>
            <li>
              <NavLink className="aside-row" to="faq">
                <FAQIcon className="menu-icon" />
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink className="aside-row" to="hit-the-mole">
                <GameIcon2 className="menu-icon" />
                Uderz kreta
              </NavLink>
            </li>
            <li>
              <NavLink className="aside-row" to="memo-game">
                <GameIcon1 className="menu-icon" />
                Gra Memo
              </NavLink>
            </li>
            <hr></hr>
            <li>
              <NavLink className="aside-row" to="settings">
                <SettingIcon className="menu-icon" />
                Ustawienia
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
