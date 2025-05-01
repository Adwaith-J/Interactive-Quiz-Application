import React, { useState } from "react";
import "./Quiz.css";
import { motion } from "framer-motion";

const Quiz = ({ data, currentQuestion, onAnswerSubmit, totalQuestions }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (!selectedOption) {
      setFeedback("Please select an option before proceeding.");
      return;
    }

    const isCorrect = selectedOption === data.correct;
    setFeedback("");
    onAnswerSubmit(isCorrect);
    setSelectedOption("");
  };

  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <motion.div
      className="quiz-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <h2>Question {currentQuestion + 1} of {totalQuestions}</h2>
      <p>{data.question}</p>
      <div className="options">
        {data.options.map((opt, idx) => (
          <button
            key={idx}
            className={`option-button ${selectedOption === opt ? "selected" : ""}`}
            onClick={() => handleSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
      {feedback && <p className="feedback">{feedback}</p>}
      <motion.button
        className="next-button"
        whileTap={{ scale: 0.95 }}
        onClick={handleNext}
      >
        Next
      </motion.button>
    </motion.div>
  );
};

export default Quiz;
