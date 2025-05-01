// src/components/Result.js
import React from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import "./Quiz.css";

const Result = ({ score, total, onRestart }) => {
  const { width, height } = useWindowSize();
  const perfectScore = score === total;

  const getFeedback = () => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return "🎉 Perfect score! Well done!";
    if (percentage >= 75) return "👏 Great job!";
    if (percentage >= 50) return "👍 Good effort!";
    return "💪 Keep practicing!";
  };

  return (
    <motion.div
      className="result-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {perfectScore && <Confetti width={width} height={height} />}
      <h2>Quiz Completed!</h2>
      <p>
        You scored <strong>{score}</strong> out of <strong>{total}</strong>
      </p>
      <p>{getFeedback()}</p>
      <motion.button
        className="restart-button"
        onClick={onRestart}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05, backgroundColor: "#0d47a1" }}
      >
        Restart Quiz
      </motion.button>
    </motion.div>
  );
};

export default Result;
