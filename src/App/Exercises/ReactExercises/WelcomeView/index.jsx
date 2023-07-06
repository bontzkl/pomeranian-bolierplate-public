import { useState } from 'react';
import { Input } from '../../../Components/Input';
import './styles.css';

export const WelcomeView = () => {
  const [inputValue, setInputValue] = useState('Place holder');
  return (
    <div className="container-welcome-view">
      <div>
        <h2>Cześć!</h2>
        <p>Wpisz tekst</p>
        <Input handleOnChange={(e) => setInputValue(e.target.value)} />
      </div>
      <div>
        <h1>{inputValue}</h1>
      </div>
    </div>
  );
};
