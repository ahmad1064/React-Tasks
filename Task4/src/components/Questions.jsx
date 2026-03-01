import React, { useState, useEffect } from "react";

const Questions = ({ data, handleAnswer }) => {

  const [time, setTime] = useState(10);

  useEffect(() => {

    if (time === 0) {
      handleAnswer(null);
      return;
    }

    const timer = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(timer);

  }, [time]);

  return (
    <div className="bg-white p-8 rounded shadow w-96 text-center">

      <h2 className="text-xl font-bold mb-4">
        {data.question}
      </h2>

      <p className="text-red-500 mb-4">
        Time Left: {time}
      </p>

      {data.options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(option)}
          className="block w-full bg-blue-500 text-white p-2 mb-2 rounded hover:bg-blue-600"
        >
          {option}
        </button>
      ))}

    </div>
  );
};

export default Questions;