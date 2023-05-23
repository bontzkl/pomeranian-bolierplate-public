import { Today } from '@mui/icons-material';
import './styles.css';
import { useEffect, useState } from 'react';

// Funckja która przyjmuje X (infinity) elementów

// valid arguments: [1,2,3], [4,5], [8]
// const inputArray = [[1, 2, 3], [4, 5], [8]];
// const arrayFlattner = (arrays) => {
//   return arrays.flat();
// };
// const reduceTables = (...tables) => tables.join();
// console.log(arrayFlattner(inputArray));
// map reduce filter - wazne
// const scores = [
//   { letter: 'A', score: 5 },
//   { letter: 'E', score: 15 },
//   { letter: 'I', score: 6 },
//   { letter: 'O', score: 2 },
//   { letter: 'U', score: 0 },
// ];
// // imionaWagi(["Janek", "Zosia"], wagi) ->// [{name: "janek", score: 20}, {name: "zosia", score: 13}, {name: 'khx', score: 0}]

// const scorer = (names, scores) => {
//   const upperNames = names.map((name) => name.toUpperCase());
//   const allLettersWithScore = scores.map((score) => score.letter);

//   const scoredNames = upperNames.map((name) => {
//     return name.split('').filter((letter) => {
//       return allLettersWithScore.inlcudes(letter) ? true : false;
//     });
//   });
//   console.log(scoredNames);
//   scoredNames.map((nameAsArray) => {
//     return nameAsArray.map((letter) => {
//       return letter === scores.letter;
//     });
//   });
// };

// console.log(scorer(['Janek', 'Zosia'], scores));

export function SetTimeout() {
  // const [isVisible, setIsVisible] = useState(true);
  // const [style, setStyle] = useState({ opacity: 1, transition: 'all 3s' });
  // const changeOpacity = () => {
  //   setStyle((prevState) => ({ ...prevState, opacity: 0 }));
  //   setTimeout(() => {
  //     setIsVisible(!isVisible);
  //   }, 3 * 1000);
  // };
  // const [seconds, setSeconds] = useState(6);
  // const timer = () => {
  //   setInterval(() => {
  //     setSeconds(seconds - 1);
  //   }, 1 * 1000);
  // };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setSeconds(seconds - 1);
  //   }, 1 * 1000);
  //   if (seconds < 0) {
  //     clearInterval(timer);
  //   }
  // }, [seconds]);

  // const [position, setPosition] = useState({
  //   position: 'absolute',
  //   left: -10000,
  //   transition: 'all 5s',
  // });
  // setTimeout(() => {
  //   setPosition((prev) => ({ ...prev, left: 500 }));
  // }, 5 * 1000);

  // const initialState = {
  //   fontSize: '16px',
  //   transition: 'all 5s',
  //   rotate: '0deg',
  // };
  // const [style, setStyle] = useState(initialState);
  // const onClickHandle = () => {
  //   setStyle((prev) => ({
  //     ...prev,
  //     fontSize: '32px',
  //     rotate: '180deg',
  //   }));
  //   setTimeout(() => {
  //     setStyle(initialState);
  //   }, 5 * 1000);
  // };
  const [date, setDate] = useState(new Date('05.24.2023'));

  return (
    <div>
      {/* <h1>{seconds}</h1>
      <button>Start!</button> */}
      {/* <p style={style}>My name is ruin!</p>
      <button onClick={changeOpacity}>Vanish the ruin!</button> */}
      {/* <p style={position}>PROMOCJA!</p> */}
      {/* <div style={style}>jakiś element</div>
      <button onClick={onClickHandle}>powiększ i kręć</button> */}
      <br />
      {date.getDay()} {date.getHours()} {date.getMinutes()}
    </div>
  );
}
