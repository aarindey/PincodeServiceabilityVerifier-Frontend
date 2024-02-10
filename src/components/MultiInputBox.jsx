// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const MultiInputBox = ({ inputs, setInputs }) => {
  const [parametersList, setParametersList] = useState("");
  // Function to handle changes in input values
  const handleInputChange = (value) => {
    setParametersList(value);
  };

  // Function to reset inputs
  const handleReset = () => {
    setParametersList("");
  };

  // Function to handle Add Click
  const handleAddClick = () => {
    setInputs(parametersList);
  };

  return (
    <div className="max-w-md p-4 flex flex-wrap items-center">
      <input
        type="text"
        value={parametersList}
        onChange={(e) => handleInputChange(e.target.value)}
        className="border rounded px-2 py-1 m-2"
      />
      <Button onClick={handleAddClick}>Add Parameters List</Button>
      <button
        onClick={handleReset}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Reset
      </button>
    </div>
  );
};

export default MultiInputBox;
