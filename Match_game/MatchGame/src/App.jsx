import React, { useEffect, useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { BsXCircleFill } from "react-icons/bs"; // Import BsXCircleFill
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import "./App.css";
import { questionsData } from "./data";
function App() {
  const [countTrue, setCountTrue] = useState(0);
  const [countFalse, setCountFalse] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const getRandomIndex = () => {
    return Math.floor(Math.random() * questionsData.length);};
  const changeQuestion = () => {
    setCurrentQuestion(questionsData[getRandomIndex()]);};
  const handleClick = (answeredQuestion) => {
    if (currentQuestion && currentQuestion.rightAnswer === answeredQuestion) {
      setCountTrue(countTrue + 1);
    } else {
      setCountFalse(countFalse + 1);}
    changeQuestion();
  };
  useEffect(() => {
    changeQuestion();
  }, []);
  return (
<div className="app-container">
  <h1>Matching Game</h1>
  <div className="score">
  <p>
     <IoCheckmarkCircleOutline /> : {countTrue}
    </p>
      <p>
          <BsXCircleFill /> : {countFalse}
        </p>
      </div>
      {currentQuestion ? (
        <div className="question-container">
          <img
        src={currentQuestion.imgSource}
        alt={currentQuestion.question}
            className="image-container"
          />
         <p>{currentQuestion.question}</p>
        </div>
  ) : (
   <p>Loading...</p>
)}
  <div className="card">
     <button className="yes-button" onClick={() => handleClick(true)}>
       <AiOutlineCheck />
    </button>
    <button className="no-button" onClick={() => handleClick(false)}>
    <AiOutlineClose />
    </button>
  </div>
    </div>);}
export default App;
