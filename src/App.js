import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./components/Quiz.css"; // Make sure your styles are imported

const quizData = [
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Madrid", "Berlin", "Rome"],
    correct: "New Delhi",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Saturn", "Mars", "Venus"],
    correct: "Mars",
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correct: "2",
  },
  {
    question: "Which is the best club in SRM?",
    options: ["Google Developer Groups", "Obviously Google Developer Groups", "It is Google Developer Groups mateee", "All of the above"],
    correct: "All of the above",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSubmit = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    const nextQuestion = currentIndex + 1;
    if (nextQuestion < quizData.length) {
      setCurrentIndex(nextQuestion);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="App">
      {quizCompleted ? (
        <Result score={score} total={quizData.length} onRestart={handleRestart} />
      ) : (
        <Quiz
          data={quizData[currentIndex]}
          currentQuestion={currentIndex}
          totalQuestions={quizData.length}
          onAnswerSubmit={handleAnswerSubmit}
        />
      )}
    </div>
  );
}

export default App;
