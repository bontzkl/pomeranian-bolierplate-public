import './styles.css';
import { useState, useEffect } from 'react';

const numbers = [2, 5, 7, 1, 8, 12];
const arr = ['źrebak', 'łąka', 'zegarek', 'auto', 'kanapa', 'placek'];

const myText = 'ala_ma_kota_a_tomek_ma_psa';
//funkcja formatująca myText
const formatter = (text) => {
  text = text.replace('a', 'A');
  text = text.split('_');
  let textAfterFormat = '';
  for (let i = 0; i < text.length; i++) {
    if (i === text.length - 1) {
      textAfterFormat = textAfterFormat + text[i] + '.';
    } else {
      textAfterFormat = textAfterFormat + text[i] + ' ';
    }
  }
  console.log(textAfterFormat);
};

const CalculatePixels = (x, y) => {
  x = parseInt(x);
  y = parseInt(y);
  const totalPx = x * y;
  return String(totalPx) + 'px';
};
//funckja sprawdzająca wartości zmiennych
const getInfoAboutValue = (value) => {
  console.log(
    'Typ wartości:',
    typeof value,
    '\nWartość:',
    value,
    '\nWartość logiczna:',
    Boolean(value)
  );
};

export function ValuesAndComments() {
  const [text, setText] = useState('');
  const [censured, setCensured] = useState(false);
  const handleOnChange = (e) => {
    const uncensuredtext = e.target.value;
    const censure = e.target.value.replaceAll('kurde', 'psia jucha');
    setText(censure);
    if (censure != uncensuredtext) {
      setCensured(true);
    } else {
      setCensured(false);
    }
  };
  return (
    <div>
      {/* {arr
        .sort((a, b) => {
          return a.localeCompare(b);
        })
        .map((item) => {
          return <p>{item}</p>;
        })}
      {numbers
        .sort((a, b) => a - b)
        .reverse()
        .map((item) => {
          return <p>{item}</p>;
        })} */}
      <input onChange={handleOnChange} />
      {censured && <p className="alert">Tekst został ocenzurowany!</p>}
      <p>{text}</p>
    </div>
  );
}
