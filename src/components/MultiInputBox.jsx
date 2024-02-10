// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const MultiInputBox = ({ inputs, setInputs }) => {
  // Function to handle changes in input values
  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  // Function to add a new input field
  const handleAddInput = () => {
    setInputs([...inputs, ""]);
  };

  // Function to reset inputs
  const handleReset = () => {
    setInputs([""]);
  };

  return (
    <div className="max-w-md p-4 flex flex-wrap items-center">
      {inputs.map((input, index) => (
        <input
          key={index}
          type="text"
          value={input}
          onChange={(e) => handleInputChange(index, e.target.value)}
          placeholder={`Input ${index + 1}`}
          className="border rounded px-2 py-1 m-2"
        />
      ))}
      <Button onClick={handleAddInput}>
        {inputs.length > 1 ? "Add More Parameters" : "Add Parameter"}
      </Button>
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
