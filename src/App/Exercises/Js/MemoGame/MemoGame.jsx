import './MemoGame.css';
import { useEffect, useState } from 'react';
import { MenuView } from './MenuView/MenuView';
import { Board } from './Board/Board';
import { GameView } from './GameView/GameView';

export function MemoGame() {
  const [boardSize, setBoardSize] = useState();
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [stepAmount, setStepAmount] = useState(0);
  const [time, setTime] = useState(0);
  const [gameInterval, setGameInterval] = useState();
  const [endGame, setEndGame] = useState(false);
  const [gameStats, setGameStats] = useState();
  const [showRanking, setShowRanking] = useState(false);
  let ranking = [];
  useEffect(() => {
    if (isGameStarted) {
      const timer = setInterval(() => {
        setTime((prev) => {
          return prev + 1;
        });
      }, 1000);
      setGameInterval(timer);
    } else {
      clearInterval(gameInterval);
      setGameInterval();
      setTime(0);
    }
  }, [isGameStarted]);
  const timeScore =
    Math.floor(time / 60) + ':' + Math.floor((time % 60) / 10) + (time % 10);

  return (
    <div className="memo-game">
      {endGame && (
        <h1>{`Wygrałeś! Czas: ${gameStats.time} Ruchy: ${gameStats.score} Wielkość planszy: ${gameStats.diff}`}</h1>
      )}
      {/* {showRanking ? (
        <div>
          Ranking:
          {ranking.map(({ score }) => {
            return <div>{score}</div>;
          })}
        </div>
      ) : (
        ''
      )} */}
      {!isGameStarted && (
        <MenuView
          setIsGameStarted={setIsGameStarted}
          setStepAmount={setStepAmount}
          setTime={setTime}
          setBoardSize={setBoardSize}
          boardSize={boardSize}
          setShowRanking={setShowRanking}
          showRanking={showRanking}
        />
      )}
      {isGameStarted && (
        <GameView
          stepAmount={stepAmount}
          setIsGameStarted={setIsGameStarted}
          timeScore={timeScore}
          setBoardSize={setBoardSize}
        />
      )}
      {isGameStarted && (
        <Board
          stepAmount={stepAmount}
          setStepAmount={setStepAmount}
          boardSize={boardSize}
          setTime={setTime}
          timeScore={timeScore}
          setEndGame={setEndGame}
          setIsGameStarted={setIsGameStarted}
          setGameStats={setGameStats}
          setBoardSize={setBoardSize}
          gameStats={gameStats}
          ranking={ranking}
        />
      )}
    </div>
  );
}
