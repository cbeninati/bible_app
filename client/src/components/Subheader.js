import React, { useState } from 'react';

function Subheader({ selection }) {
  const [selectedValue, setSelectedValue] = useState(""); // State to hold the selected dropdown value

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update state with selected dropdown value
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from reloading the page
    console.log("Submitted value:", selectedValue); // Handle the form submission (e.g., API call)
  };

  return (
    <div className="subheader">
      <div className="container flex">
        <div className="subheadings">
          <h2>Select a:</h2>
          <h3>{selection}</h3>
        </div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="dropdown">Select a verse range:<br></br></label>
            <select id="dropdown" value={selectedValue} onChange={handleChange}>
              <option value="" disabled>Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select id="dropdown" value={selectedValue} onChange={handleChange}>
              <option value="" disabled>Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            
            <button type="submit">Submit</button>
          </form>
      </div>
    </div>
  );
}

export default Subheader;
