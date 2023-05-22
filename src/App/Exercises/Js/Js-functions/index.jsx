import { DonutLarge } from '@mui/icons-material';
import './styles.css';
import { useState } from 'react';

export function JsFunctions() {
  //Notatki
  // // //użycie funckji wbudowanej 'alert'
  // // alert('Ala ma kota');  alert na stronie z tekstem
  // // //użycie funckji wbudowanej 'console'
  // // console.debug('test');
  // // console.log('test');  wyswietla element w konsoli
  // // console.error('test');
  // // console.info('test');
  // // przyklad funckji
  // function logText() {
  //   console.log('log');
  //   return 'returnw';
  // }
  // //wywołanie funckji
  // logText();
  // console.log(logText);
  const checkNumber = (par1, par2) => {
    // if (par > 50) {
    //   return true;
    // } else {
    //   return false;
    // }
    return par1 > 50 ? par1 + Number(par2) : par2;
  };
  //Zadanie z planetami
  const [planet, setPlanet] = useState(0);
  const planets = [
    'Słońce',
    'Merkury',
    'Wenus',
    'Ziemia',
    'Mars',
    'Jowisz',
    'Saturn',
    'Uran',
    'Neptun',
  ];
  const checkPlanet = (par) => {
    return planets[par];
  };
  const handleOnChange = (e) => {
    setPlanet(e.target.value);
  };
  //zadanie sportowe
  const users = [
    { name: 'Kamil', age: 33, sport: 'Basketball' },
    { name: 'Arek', age: 22, sport: 'Volleyball' },
    { name: 'Igor', age: 18, sport: 'Soccer' },
    { name: 'Aleksander', age: 25 },
  ];
  const check = (usr, names) => {
    return usr.find((item) => item.name === names).sport;
  };
  const obj = {
    name: 'dog',
    legs: 4,
    color: 'white',
  };
  const animal = ({ name, legs }) => {
    return `This ${name} have ${legs} legs!`;
    // return 'This ' + param.name + ' have ' + param.legs + ' legs.';
  };
  console.log(animal(obj));
  return (
    <div>
      <input type="number" min={0} max={8} onChange={handleOnChange} />
      <h1>{checkPlanet(planet)}</h1>
    </div>
  );
}
