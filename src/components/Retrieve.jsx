// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";

// Retrieve component
// eslint-disable-next-line react/prop-types
export default function Retrieve({ inputs }) {
  const [inorderTraversal, setInorderTraversal] = useState([]);

  // Function to handle the "Retrieve" button click
  const handleRetrieveClick = async () => {
    try {
      // Make the API call
      const response = await axios.get(
        `https://asia-south2-local-cogency-413608.cloudfunctions.net/search_matrix?${inputs}`
      );

      // Extract the array from the response data
      const { inorder_traversal } = response.data;

      // Update the state variable with the obtained array
      setInorderTraversal(inorder_traversal);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  return (
    <div className="ml-4">
      {/* "Retrieve" button */}
      <Button onClick={handleRetrieveClick}>Retrieve</Button>

      {/* Display the retrieved array */}
      <div className="mt-3">
        {inorderTraversal.length > 0 && (
          <div>
            <h3>Inorder Traversal:</h3>
            <ul>
              {inorderTraversal.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
