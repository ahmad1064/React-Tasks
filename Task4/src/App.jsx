import React, { useState } from "react";
import Questions from "./components/Questions";
import Result from "./components/Result";
import questions from "./components/questions.json";

const App = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected) => {

    if (selected === questions[currentIndex].answer) {
      setScore(score + 1);
    }

    const next = currentIndex + 1;

    if (next < questions.length) {
      setCurrentIndex(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {!showResult ? (
        <Questions
          data={questions[currentIndex]}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Result score={score} total={questions.length} />
      )}
    </div>
  );
};

export default App;