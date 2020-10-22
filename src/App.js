import React, { useRef, useState } from "react";
import "./App.css";
import Bottom from "./Bottom";
import Center from "./Center";
import GameResult from "./components/GameResult";
import GameStart from "./components/GameStart";
import Top from "./Top";
import {
  evaluateExpression, generateInputs,
  generateOptions, generateRandomOperator
} from "./utils";

function App() {
  const INPUT_START = 1;
  const INPUT_END = 20;
  const INPUTS_COUNT = 2;
  const OPTIONS_COUNT = 4;
  const DIFFICULTY_LEVEL = 1;
  const TIMER_DURATION = 30;

  const [gameState, setGameState] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [inCorrectCount, setInCorrectCount] = useState(0);
  const [inputs, setInputs] = useState([]);
  const [operator, setOperator] = useState(null);
  const [options, setOptions] = useState([]);
  const [result, setResult] = useState(null);
  const [sound, setSound] = useState(true);
  const [remainingTime, setRemainingTime] = useState(TIMER_DURATION);
  const remainingTimeRef = useRef(remainingTime);
  const intervalRef = useRef();

  function updateState(newState) {
    remainingTimeRef.current = newState;
    setRemainingTime(newState);
  }

  const loadQuestion = () => {
    let currentOperator = generateRandomOperator(DIFFICULTY_LEVEL);
    setOperator(currentOperator);
    let currentInputs = generateInputs(INPUTS_COUNT, INPUT_START, INPUT_END);
    setInputs(currentInputs);
    let result = evaluateExpression(currentInputs, currentOperator);
    setResult(result);
    setOptions(generateOptions(OPTIONS_COUNT, result));
  };

  const endGame = () => {
    clearInterval(intervalRef.current);
    setGameState(2);
  };

  const initGame = () => {
    // Set 60 seconds
    updateState(TIMER_DURATION);
    // main game timer
    const gameTimerId = setInterval(() => {
      if (remainingTimeRef.current <= 1) {
        updateState(remainingTimeRef.current - 1);
        endGame();
        // clearInterval(intervalRef.current);
      } else {
        updateState(remainingTimeRef.current - 1);
      }
    }, 1000);
    intervalRef.current = gameTimerId;
    loadQuestion();
  };

  const onClickStart = () => {
    setCorrectCount(0);
    setInCorrectCount(0);
    setGameState(1);
    playClickSound();
    initGame();
  };

  const onOptionClick = (e) => {
    let currentInCorrectCount = inCorrectCount + 1;
    if ( currentInCorrectCount >= 3) {
      setInCorrectCount(currentInCorrectCount);
      endGame();
    } else if (e.currentTarget.innerHTML === result) {
      setCorrectCount(correctCount + 1);
    } else {
      setInCorrectCount(currentInCorrectCount);
    }
    playClickSound();
    loadQuestion();
  };

  const playClickSound = () => {
    // play click sound
    if (sound) {
      new Audio("click.mp3").play();
    }
  };

  return (
    <div className="App">
      {/* Running */}
      {gameState === 1 && (
        <React.Fragment>
          <Top
            score={correctCount}
            inCorrectCount={inCorrectCount}
            timer={remainingTime}
            sound={sound}
            setSound={setSound}
          />
          <Center inputs={[...inputs]} operator={operator} />
          <Bottom options={[...options]} onClick={(e) => onOptionClick(e)} />
        </React.Fragment>
      )}
      {/* Result */}
      {gameState === 2 && (
        <React.Fragment>
          <Top
            score={correctCount}
            inCorrectCount={inCorrectCount}
            timer={remainingTime}
            sound={sound}
            setSound={setSound}
          />
          <GameResult
            score={correctCount}
            timer={remainingTime}
            onClick={() => onClickStart()}
          ></GameResult>
        </React.Fragment>
      )}
      {/* Start */}
      {gameState === 0 && (
        <React.Fragment>
          <Top
            score={correctCount}
            inCorrectCount={inCorrectCount}
            timer={remainingTime}
            sound={sound}
            setSound={setSound}
          />
          <GameStart onClick={() => onClickStart()}></GameStart>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
