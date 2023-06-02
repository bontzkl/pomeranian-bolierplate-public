import { useState } from 'react';
import './Board.css';
import { useEffect } from 'react';

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const getRandomLetters = (amount) => {
  const shuffled = [...alphabet].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
};

function shuffleArray(s) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

const generateBoard = (size) => {
  const randomLetters = getRandomLetters(size / 2);

  const letters = randomLetters.map((letter) => {
    return {
      id: null,
      value: letter,
      isPaired: false,
    };
  });

  const mergedLetters = [...letters, ...letters];

  return shuffleArray(mergedLetters).map((obj, index) => {
    return { ...obj, id: index + 1 };
  });
};

export const Board = ({
  boardSize,
  setStepAmount,
  stepAmount,
  setEndGame,
  setIsGameStarted,
  setGameStats,
  timeScore,
  setBoardSize,
  gameStats,
  setRanking,
  ranking,
  endGame,
}) => {
  const [board, setBoard] = useState(generateBoard(boardSize));
  const [firstClickedId, setFirstClickedId] = useState();
  const [secondClickedId, setSecondClickedId] = useState();
  const FIELD_CLICK_RESET_DELAY = 800;

  const resetClickedFieldId = () => {
    setTimeout(() => {
      setFirstClickedId(undefined);
      setSecondClickedId(undefined);
    }, FIELD_CLICK_RESET_DELAY);
  };

  const handleClick = (obj) => {
    if (firstClickedId && firstClickedId !== obj.id) {
      setSecondClickedId(obj.id);
      resetClickedFieldId();
    } else {
      setFirstClickedId(obj.id);
    }
  };
  useEffect(() => {
    if (firstClickedId && secondClickedId) {
      setStepAmount(stepAmount + 1);
      const firstClickedValue = board.find(
        (item) => item.id === firstClickedId
      ).value;
      const secondClickedValue = board.find(
        (item) => item.id === secondClickedId
      ).value;
      if (firstClickedValue === secondClickedValue) {
        setBoard(
          board.map((field) => {
            const isClickedFieldPaired =
              field.id === firstClickedId || field.id === secondClickedId;
            const isFieldPaired = field.isPaired;
            return {
              ...field,
              isPaired: isClickedFieldPaired || isFieldPaired,
            };
          })
        );
      }
    }
  }, [firstClickedId, secondClickedId]);
  useEffect(() => {
    if (board.find((e) => e.isPaired === false)) {
      setEndGame(false);
    } else {
      setGameStats({ time: timeScore, score: stepAmount, diff: boardSize });
      setRanking((oldRanking) => [...oldRanking, gameStats]);
      setEndGame(true);
      setIsGameStarted(false);
      setBoardSize(0);
    }
  }, [board, setBoard, firstClickedId, secondClickedId]);

  return (
    <div className="board">
      {board.map((field) => {
        const isClicked =
          field.id === firstClickedId || field.id === secondClickedId;
        const clickedFieldClassName = isClicked ? ' field-clicked' : '';
        const pairedFieldClassName = field.isPaired ? ' field-paired' : '';
        return (
          <div
            key={field.id}
            className={`board-field${clickedFieldClassName}${pairedFieldClassName}`}
            onClick={() => handleClick(field)}
          >
            {isClicked || field.isPaired ? field.value : ''}
          </div>
        );
      })}
    </div>
  );
};
