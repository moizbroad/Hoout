import React, { useState } from "react";

const RadioButtons = ({ checked, item }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        Option 1
      </label>
    </div>
  );
};

export default RadioButtons;
