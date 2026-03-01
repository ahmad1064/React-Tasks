import React from "react";

const Result = ({ score, total }) => {

  return (
    <div className="bg-white p-8 rounded shadow text-center">
      <h2 className="text-2xl font-bold mb-4">
        Quiz Finished 🎉
      </h2>
      <p className="text-lg">
        Your Score: {score} / {total}
      </p>
    </div>
  );
};

export default Result;